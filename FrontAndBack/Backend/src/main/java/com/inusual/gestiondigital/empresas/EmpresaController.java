package com.inusual.gestiondigital.empresas;

import com.inusual.gestiondigital.empresas.dtos.EmpresaDto;
import com.inusual.gestiondigital.informes.dtos.InformeDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/empresas")
public interface EmpresaController {
    @GetMapping("/helloworld")
    ResponseEntity<String> helloworld();

    @GetMapping("/getAll")
    ResponseEntity<List<EmpresaDto>> getAll();

    @GetMapping("/getById")
    ResponseEntity<EmpresaDto> getById(@RequestParam int id);

    @GetMapping("/getByNombre")
    ResponseEntity<EmpresaDto> getByNombre(@RequestParam String nombre);

    @PostMapping("/create")
    ResponseEntity<EmpresaDto> create(@RequestBody EmpresaDto clienteReqCreateDTO);

    @PutMapping("/update")
    ResponseEntity<EmpresaDto> update(@RequestBody EmpresaDto clienteReqUpdateDto);

    @DeleteMapping("/delete")
    ResponseEntity<?> delete(@RequestParam int id);
}
