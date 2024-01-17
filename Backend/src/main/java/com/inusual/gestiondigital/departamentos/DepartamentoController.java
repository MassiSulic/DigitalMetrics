package com.inusual.gestiondigital.departamentos;

import com.inusual.gestiondigital.departamentos.dtos.DepartamentoDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/departamentos")
public interface DepartamentoController {
    @GetMapping("/getAll")
    ResponseEntity<List<DepartamentoDto>> getAll();

    @GetMapping("/getById")
    ResponseEntity<DepartamentoDto> getById(@RequestParam int id);

    @GetMapping("/getByNombre")
    ResponseEntity<DepartamentoDto> getByNombre(@RequestParam String nombre);

    @PostMapping("/create")
    ResponseEntity<DepartamentoDto> create(@RequestBody DepartamentoDto departamenoRequestCreateDto);

    @PutMapping("/update")
    ResponseEntity<DepartamentoDto> update(@RequestBody DepartamentoDto departamentoResponseDto);

    @DeleteMapping("/delete")
    ResponseEntity<?> delete(@RequestParam int id);

    @GetMapping("/getHijos")
    void getHijos(@RequestParam int id);
}
