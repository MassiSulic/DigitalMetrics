package com.inusual.gestiondigital.empresas;

import com.inusual.gestiondigital.empresas.dtos.EmpresaDto;
import com.inusual.gestiondigital.empresas.dtos.EmpresaMapper;
import com.inusual.gestiondigital.informes.dtos.InformeDto;
import com.inusual.gestiondigital.informes.dtos.InformeMapper;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class EmpresaControllerImpl implements EmpresaController {
    private final EmpresaService empresaService;
    private final EmpresaMapper empresaMapper;

    @Override
    public ResponseEntity<String> helloworld() {
        return new ResponseEntity<>("Hola Mundo", HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<EmpresaDto>> getAll() {
        List<Empresa> empresas = this.empresaService.getAll();
        return new ResponseEntity<>(this.empresaMapper.toEmpresaDtoList(empresas), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<EmpresaDto> getById(int id) {
        Empresa empresa = this.empresaService.getById(id);
        return new ResponseEntity<>(this.empresaMapper.toEmpresaDto(empresa), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<EmpresaDto> getByNombre(String nombre) {
        Empresa empresa = this.empresaService.getByNombre(nombre);
        return new ResponseEntity<>(this.empresaMapper.toEmpresaDto(empresa), HttpStatus.OK);
    }

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<EmpresaDto> create(EmpresaDto empresaDto) {
        Empresa empresa = this.empresaService.add(this.empresaMapper.toEmpresaCreate(empresaDto));
        return new ResponseEntity<>(this.empresaMapper.toEmpresaDto(empresa), HttpStatus.CREATED);
    }

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<EmpresaDto> update(EmpresaDto empresaDto) {
        Empresa empresa = this.empresaService.update(this.empresaMapper.toEmpresa(empresaDto));
        return new ResponseEntity<>(this.empresaMapper.toEmpresaDto(empresa), HttpStatus.CREATED);
    }

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> delete(int id) {
        this.empresaService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
