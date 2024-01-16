package com.inusual.gestiondigital.empresas.dtos;

import com.inusual.gestiondigital.empresas.Empresa;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class EmpresaMapperImpl implements EmpresaMapper {
    @Override
    public Empresa toEmpresa(EmpresaDto empresaDto) {
        return Empresa.builder()
                .id(empresaDto.getId())
                .nombre(empresaDto.getNombre())
                .build();
    }

    @Override
    public Empresa toEmpresaCreate(EmpresaDto empresaDto) {
        return Empresa.builder()
                .nombre(empresaDto.getNombre())
                .build();
    }

    @Override
    public EmpresaDto toEmpresaDto(Empresa empresa) {
        return EmpresaDto.builder()
                .id(empresa.getId())
                .nombre(empresa.getNombre())
                .build();
    }

    @Override
    public List<EmpresaDto> toEmpresaDtoList(List<Empresa> empresaList) {
        return empresaList
                .stream()
                .map(this::toEmpresaDto)
                .collect(Collectors.toList());
    }


}
