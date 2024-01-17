package com.inusual.gestiondigital.informes.dtos;

import com.inusual.gestiondigital.informes.Informe;

import java.util.List;

public interface InformeMapper {

    Informe toInforme(InformeDto informeDto);
    InformeDto toInformeDto(Informe informe);
    List<InformeDto> toInformeDtoList(List<Informe> informeList);
}
