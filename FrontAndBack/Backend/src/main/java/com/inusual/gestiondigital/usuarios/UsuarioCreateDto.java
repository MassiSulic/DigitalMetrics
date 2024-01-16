package com.inusual.gestiondigital.usuarios;

import com.inusual.gestiondigital.departamentos.dtos.DepartamentoDto;
import com.inusual.gestiondigital.empresas.dtos.EmpresaDto;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data @Builder
public class UsuarioCreateDto {

    @NotBlank(message = "nombre obligatorio")
    private String nombre;
    @NotBlank(message = "nombre de usuario obligatorio")
    private String nombreUsuario;
    @Email(message = "dirección de email no válida")
    @NotBlank(message = "email obligatorio")
    private String email;
    @NotBlank
    private String password;
    private String puesto;
    private Set<String> roles = new HashSet<>();
    private List<DepartamentoDto> departamentos;
    private EmpresaDto empresa;

}
