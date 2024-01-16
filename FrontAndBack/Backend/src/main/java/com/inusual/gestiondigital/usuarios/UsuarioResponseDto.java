package com.inusual.gestiondigital.usuarios;

import com.inusual.gestiondigital.departamentos.dtos.DepartamentoDto;
import com.inusual.gestiondigital.empresas.Empresa;
import com.inusual.gestiondigital.empresas.dtos.EmpresaDto;
import com.inusual.gestiondigital.informes.dtos.InformeDto;
import lombok.Builder;
import lombok.Data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data @Builder
public class UsuarioResponseDto {
    private int id;
    private String nombre;
    private String nombreUsuario;
    private String email;
    private String puesto;
    private EmpresaDto empresa;
    private List<InformeDto> informes;
    private List<DepartamentoDto> departamentos;
}
