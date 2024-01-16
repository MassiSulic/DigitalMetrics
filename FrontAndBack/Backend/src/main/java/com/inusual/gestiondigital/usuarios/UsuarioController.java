package com.inusual.gestiondigital.usuarios;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/usuarios")
public interface UsuarioController {
    @GetMapping("/getAll")
    ResponseEntity<List<UsuarioResponseDto>> getAll();

    @GetMapping("/getById")
    ResponseEntity<UsuarioResponseDto> getById(@RequestParam int id);

    @GetMapping("/getByUserName")
    ResponseEntity<UsuarioResponseDto> getByNombreUsuario(@RequestParam String  userName);


    @PutMapping("/update")
    ResponseEntity<UsuarioResponseDto> update(@RequestBody UsuarioResponseDto usuarioResponseDto);

    @DeleteMapping("/delete")
    ResponseEntity<?> delete(@RequestParam int id);

    @DeleteMapping("/deleteAll")
    ResponseEntity<?> deleteAll(@RequestBody List<UsuarioResponseDto> usuarioResponseDtoList);





}
