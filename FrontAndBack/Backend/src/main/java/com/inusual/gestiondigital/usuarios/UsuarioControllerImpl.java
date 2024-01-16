package com.inusual.gestiondigital.usuarios;


import com.inusual.gestiondigital.security.dto.EditUsuario;
import com.inusual.gestiondigital.security.dto.Mensaje;
import com.inusual.gestiondigital.security.dto.NuevoUsuario;
import com.inusual.gestiondigital.security.entity.Usuario;
import com.inusual.gestiondigital.security.service.UsuarioService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
public class UsuarioControllerImpl implements UsuarioController {

    private UsuarioService usuarioService;
    private UsuarioMapper usuarioMapper;

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<UsuarioResponseDto>> getAll() {
        List<Usuario> usuarios = this.usuarioService.getAll();
        return new ResponseEntity<>(this.usuarioMapper.toUsuariosDtoList(usuarios), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<UsuarioResponseDto> getById(int id) {
        Usuario usuario = this.usuarioService.getById(id);
        return new ResponseEntity<>(this.usuarioMapper.toUsuarioResponseDto(usuario), HttpStatus.OK);
    }


    @Override
    public ResponseEntity<UsuarioResponseDto> update(UsuarioResponseDto usuarioResponseDto) {
        Usuario usuario = this.usuarioService.update(this.usuarioMapper.toUsuario(usuarioResponseDto));
        return new ResponseEntity<>(this.usuarioMapper.toUsuarioResponseDto(usuario), HttpStatus.OK);
    }




    @Override
    public ResponseEntity<UsuarioResponseDto> getByNombreUsuario(String nombreUsuario) {
        Usuario usuario = this.usuarioService.getByNombreUsuario(nombreUsuario);
        return new ResponseEntity<>(this.usuarioMapper.toUsuarioResponseDto(usuario), HttpStatus.OK);
    }



    @Override
    public ResponseEntity<?> deleteAll(List<UsuarioResponseDto> usuarioResponseDtoList) {
        this.usuarioService.deleteAll(usuarioResponseDtoList);
        return null;
    }

    @Override
    public ResponseEntity<?> delete(int id) {
        this.usuarioService.delete(id);
        return null;
    }
}
