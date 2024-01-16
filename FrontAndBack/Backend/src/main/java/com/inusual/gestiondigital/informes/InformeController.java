package com.inusual.gestiondigital.informes;

import com.inusual.gestiondigital.informes.dtos.InformeDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/informes")
public interface InformeController {
    @GetMapping("/helloworld")
    ResponseEntity<String> helloworld();

    @GetMapping("/getAll")
    ResponseEntity<List<InformeDto>> getAll();

    @GetMapping("/getById")
    ResponseEntity<InformeDto> getById(@RequestParam int id);

    @GetMapping("/getByNombre")
    ResponseEntity<InformeDto> getByNombre(@RequestParam String nombre);

    @PostMapping("/create")
    ResponseEntity<InformeDto> create(@RequestBody InformeDto clienteReqCreateDTO);

    @PutMapping("/update")
    ResponseEntity<InformeDto> update(@RequestBody InformeDto clienteReqUpdateDto);

    @DeleteMapping("/delete")
    ResponseEntity<?> delete(@RequestBody InformeDto informeDto);

    @DeleteMapping("/deleteAll")
    ResponseEntity<?> delete(@RequestBody List<InformeDto> informeDtoList);
}
