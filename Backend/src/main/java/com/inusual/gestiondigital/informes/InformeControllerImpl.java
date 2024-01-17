package com.inusual.gestiondigital.informes;

import com.inusual.gestiondigital.informes.dtos.InformeDto;
import com.inusual.gestiondigital.informes.dtos.InformeMapper;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
public class InformeControllerImpl implements InformeController{
    private final InformeService informeService;
    private final InformeMapper informeMapper;

    @Override
    public ResponseEntity<String> helloworld() {
        return new ResponseEntity<>("Hola Mundo", HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<InformeDto>> getAll() {
        List<Informe> informes = this.informeService.getAll();
        return new ResponseEntity<>(this.informeMapper.toInformeDtoList(informes), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<InformeDto> getById(int id) {
        Informe informe = this.informeService.getById(id);
        return new ResponseEntity<>(this.informeMapper.toInformeDto(informe), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<InformeDto> getByNombre(String nombre) {
        Informe informe = this.informeService.getByNombre(nombre);
        return new ResponseEntity<>(this.informeMapper.toInformeDto(informe), HttpStatus.OK);
    }

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<InformeDto> create(InformeDto informeDto) {
        Informe informe = this.informeService.add(this.informeMapper.toInforme(informeDto));
        System.out.println(informe);
        return new ResponseEntity<>(this.informeMapper.toInformeDto(informe), HttpStatus.CREATED);
    }

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<InformeDto> update(InformeDto informeDto) {
        Informe informe = this.informeService.update(this.informeMapper.toInforme(informeDto));
        return new ResponseEntity<>(this.informeMapper.toInformeDto(informe), HttpStatus.CREATED);
    }

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> delete(InformeDto informeDto) {
       this.informeService.delete(this.informeMapper.toInforme(informeDto));
       return new ResponseEntity<>(HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> delete(List<InformeDto> informeDtoList) {
        this.informeService.deleteAll(informeDtoList.stream().map(this.informeMapper::toInforme).collect(Collectors.toList()));
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
