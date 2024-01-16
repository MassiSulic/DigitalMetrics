package com.inusual.gestiondigital.empresas.dtos;

import com.inusual.gestiondigital.empresas.Empresa;
import com.inusual.gestiondigital.informes.Informe;

import java.util.List;

public interface EmpresaMapper {

    Empresa toEmpresa(EmpresaDto empresaDto);
    Empresa toEmpresaCreate(EmpresaDto empresaDto);
    EmpresaDto toEmpresaDto(Empresa empresa);
    List<EmpresaDto> toEmpresaDtoList(List<Empresa> informeList);
}
