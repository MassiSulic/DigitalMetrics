package com.inusual.gestiondigital.departamentos.dtos;

import com.inusual.gestiondigital.departamentos.Departamento;
import com.inusual.gestiondigital.empresas.dtos.EmpresaMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@AllArgsConstructor
public class DepartamentoMapperImpl implements DepartamentoMapper {

    private final EmpresaMapper empresaMapper;


    @Override
    public Departamento toDepartamento(DepartamentoDto departamentoDto) {
        Departamento build = Departamento.builder()
                .nombre(departamentoDto.getNombre())
                .empresa(this.empresaMapper.toEmpresa(departamentoDto.getEmpresa()))
                .build();
        DepartamentoDto departamentoPadreDto = departamentoDto.getDepartamentoPadre();
        if (departamentoPadreDto != null) {
            build.setDepartamentoPadreId(departamentoPadreDto.getId());
        }
        return build;
    }

    @Override
    public DepartamentoDto toDepartamentoDto(Departamento departamento) {
        if (departamento == null) {
            return null;
        }

        DepartamentoDto build = DepartamentoDto.builder()
                .id(departamento.getId())
                .nombre(departamento.getNombre())
                .empresa(this.empresaMapper.toEmpresaDto(departamento.getEmpresa()))
                .build();
        Departamento departamentoPadre = departamento.getDepartamentoPadre();
        if (departamentoPadre != null) {
            build.setDepartamentoPadre(toDepartamentoDto(departamentoPadre));
        }
        return build;
    }



    @Override
    public List<DepartamentoDto> toDepartamentoDtoList(List<Departamento> departamentoList) {
        return departamentoList
                .stream()
                .map(this::toDepartamentoDto)
                .collect(Collectors.toList());
    }

    /*@Override
    public DepartamentoSimpleDto toDepartamentoSimpleDto(Departamento departamento) {
        return DepartamentoSimpleDto.builder()
                .nombre(departamento.getNombre())
                .empresaId(this.empresaMapper.toEmpresaDto(departamento.getEmpresa()).getId())
                .departamenoPadreId(toDepartamentoResponseDto(departamento.getDepartamentoPadre()).getId())
                .build();
    }

    @Override
    public List<DepartamentoDto> toDepartamentoResponseDtoList(List<Departamento> departamentoList) {
        return departamentoList
                .stream()
                .map(this::toDepartamentoResponseDto)
                .collect(Collectors.toList());
    }*/
}
