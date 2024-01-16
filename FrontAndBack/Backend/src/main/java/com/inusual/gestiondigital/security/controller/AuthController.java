package com.inusual.gestiondigital.security.controller;
import com.inusual.gestiondigital.security.dto.*;
import com.inusual.gestiondigital.security.entity.Usuario;
import com.inusual.gestiondigital.security.service.UsuarioService;
import com.inusual.gestiondigital.usuarios.UsuarioCreateDto;
import com.inusual.gestiondigital.usuarios.UsuarioMapper;
import com.inusual.gestiondigital.usuarios.UsuarioResponseDto;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

@RestController
@RequestMapping("/auth")
@CrossOrigin
@AllArgsConstructor
public class AuthController {

    private UsuarioService usuarioService;
    private UsuarioMapper usuarioMapper;

    @PostMapping("/login")
    public ResponseEntity<JwtDto> login(@Valid @RequestBody LoginUsuario loginUsuario){
        return ResponseEntity.ok(usuarioService.login(loginUsuario));
    }

    @PostMapping("/refresh")
    public ResponseEntity<JwtDto> refresh(@RequestBody JwtDto jwtDto) throws ParseException {
        return ResponseEntity.ok(usuarioService.refresh(jwtDto));
    }

    @PostMapping("/actualizarInformes")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Mensaje> actualizarInformes(@RequestBody UsuarioResponseDto usuarioDto) {
        return ResponseEntity.ok(this.usuarioService.actualizarInformes(this.usuarioMapper.toUsuarioInformes(usuarioDto)));
    }

    @PostMapping("/nuevo")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Mensaje> nuevo(@Valid @RequestBody NuevoUsuario nuevoUsuario){
        return ResponseEntity.ok(usuarioService.save(nuevoUsuario));
    }

    @PostMapping("/editar")
    public ResponseEntity<Mensaje> editar(@Valid @RequestBody EditUsuario editUsuario){
        return ResponseEntity.ok(usuarioService.editar(editUsuario));
    }




}
