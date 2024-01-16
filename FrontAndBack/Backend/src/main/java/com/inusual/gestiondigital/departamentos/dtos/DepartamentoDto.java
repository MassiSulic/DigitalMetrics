package com.inusual.gestiondigital.departamentos.dtos;

import com.inusual.gestiondigital.empresas.dtos.EmpresaDto;
import lombok.Builder;
import lombok.Data;

@Data @Builder
public class DepartamentoDto {
    private int id;
    private String nombre;
    private EmpresaDto empresa;
    private DepartamentoDto departamentoPadre;
    private int departamentoPadreId;
}
