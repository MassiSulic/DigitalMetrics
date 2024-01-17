package com.inusual.gestiondigital.informes.dtos;

import com.inusual.gestiondigital.departamentos.Departamento;
import com.inusual.gestiondigital.departamentos.DepartamentoService;
import com.inusual.gestiondigital.departamentos.dtos.DepartamentoMapper;
import com.inusual.gestiondigital.empresas.Empresa;
import com.inusual.gestiondigital.empresas.EmpresaService;
import com.inusual.gestiondigital.empresas.dtos.EmpresaMapper;
import com.inusual.gestiondigital.informes.Informe;
import com.inusual.gestiondigital.informes.InformeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@AllArgsConstructor
public class InformeMapperImpl implements InformeMapper{

    private EmpresaMapper empresaMapper;
    private DepartamentoMapper departamentoMapper;
    private EmpresaService empresaService;
    private DepartamentoService departamentoService;


    @Override
    public Informe toInforme(InformeDto informeDto) {
        Informe build = Informe.builder()
                .id(informeDto.getId())
                .nombre(informeDto.getNombre())
                .link(informeDto.getLink())
                .build();

        if (informeDto.getEmpresa() != null){
            Empresa empresa = this.empresaService.getById(informeDto.getEmpresa().getId());
            build.setEmpresa(empresa);
        }
        if (informeDto.getDepartamento() != null){
            Departamento departamento = this.departamentoService.getById(informeDto.getDepartamento().getId());
            build.setDepartamento(departamento);
        }

        return build;
    }


    @Override
    public InformeDto toInformeDto(Informe informe) {
        return InformeDto.builder()
                .id(informe.getId())
                .nombre(informe.getNombre())
                .link(informe.getLink())
                .departamento(informe.getDepartamento() != null ? this.departamentoMapper.toDepartamentoDto(informe.getDepartamento()) : null)
                .empresa(informe.getEmpresa() != null ? this.empresaMapper.toEmpresaDto(informe.getEmpresa()) : null)
                .build();
    }

    @Override
    public List<InformeDto> toInformeDtoList(List<Informe> informeList) {
        return informeList
                .stream()
                .map(this::toInformeDto)
                .collect(Collectors.toList());
    }
}
