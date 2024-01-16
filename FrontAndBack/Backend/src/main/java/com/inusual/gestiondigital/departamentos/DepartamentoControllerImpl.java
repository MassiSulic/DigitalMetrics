package com.inusual.gestiondigital.departamentos;

import com.inusual.gestiondigital.departamentos.dtos.DepartamentoMapper;
import com.inusual.gestiondigital.departamentos.dtos.DepartamentoDto;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class DepartamentoControllerImpl implements DepartamentoController {
    private final DepartamentoService departamentoService;
    private final DepartamentoMapper departamentoMapper;


    @Override
    public ResponseEntity<List<DepartamentoDto>> getAll() {
        List<Departamento> departamentos = this.departamentoService.getAll();
        return new ResponseEntity<>(this.departamentoMapper.toDepartamentoDtoList(departamentos), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<DepartamentoDto> getById(int id) {
        Departamento departamento = this.departamentoService.getById(id);
        return new ResponseEntity<>(this.departamentoMapper.toDepartamentoDto(departamento), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<DepartamentoDto> getByNombre(String nombre) {
        Departamento departamento = this.departamentoService.getByNombre(nombre);
        return new ResponseEntity<>(this.departamentoMapper.toDepartamentoDto(departamento), HttpStatus.OK);
    }

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<DepartamentoDto> create(DepartamentoDto departamentoDto) {
        Departamento departamento = this.departamentoService.add(this.departamentoMapper.toDepartamento(departamentoDto));
        return new ResponseEntity<>(this.departamentoMapper.toDepartamentoDto(departamento), HttpStatus.CREATED);
    }

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<DepartamentoDto> update(DepartamentoDto departamentoDto) {
        Departamento departamento = this.departamentoService.update(this.departamentoMapper.toDepartamento(departamentoDto));
        return new ResponseEntity<>(this.departamentoMapper.toDepartamentoDto(departamento), HttpStatus.CREATED);
    }

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> delete(int id) {
        this.departamentoService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @Override
    public void getHijos(int id) {
       this.departamentoService.findDepartamentosHijos(id);

    }
}
