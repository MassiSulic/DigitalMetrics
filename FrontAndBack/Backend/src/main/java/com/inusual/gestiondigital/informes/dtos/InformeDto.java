package com.inusual.gestiondigital.informes.dtos;

import com.inusual.gestiondigital.departamentos.dtos.DepartamentoDto;
import com.inusual.gestiondigital.empresas.dtos.EmpresaDto;
import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import lombok.Builder;
import lombok.Data;

@Data @Builder
public class InformeDto {
    private int id;
    private String link;
    private String nombre;
    private EmpresaDto empresa;
    private DepartamentoDto departamento;
}
