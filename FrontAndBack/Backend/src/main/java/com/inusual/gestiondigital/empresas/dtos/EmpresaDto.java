package com.inusual.gestiondigital.empresas.dtos;

import lombok.Builder;
import lombok.Data;

@Data @Builder
public class EmpresaDto {
    private int id;
    private String nombre;

}
