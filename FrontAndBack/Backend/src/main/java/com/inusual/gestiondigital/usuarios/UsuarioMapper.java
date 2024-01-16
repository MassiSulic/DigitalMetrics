package com.inusual.gestiondigital.usuarios;

import com.inusual.gestiondigital.security.entity.Usuario;

import java.util.List;

public interface UsuarioMapper {
    Usuario toUsuario(UsuarioResponseDto usuarioDto);

    Usuario toUsuarioInformes(UsuarioResponseDto usuarioDto);

    Usuario toUsuarioFromCreateDto(UsuarioCreateDto usuarioDto);

    UsuarioResponseDto toUsuarioResponseDto(Usuario usuario);

    List<UsuarioResponseDto> toUsuariosDtoList(List<Usuario> usuarioList);

}
