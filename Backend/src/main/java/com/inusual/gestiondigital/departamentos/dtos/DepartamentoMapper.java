package com.inusual.gestiondigital.departamentos.dtos;

import com.inusual.gestiondigital.departamentos.Departamento;

import java.util.List;

public interface DepartamentoMapper {

    Departamento toDepartamento(DepartamentoDto departamentoDto);
    DepartamentoDto toDepartamentoDto(Departamento departamento);
    List<DepartamentoDto> toDepartamentoDtoList(List<Departamento> informeList);
}
