package com.inusual.gestiondigital.usuarios;

import com.inusual.gestiondigital.departamentos.Departamento;
import com.inusual.gestiondigital.departamentos.DepartamentoService;
import com.inusual.gestiondigital.departamentos.dtos.DepartamentoDto;
import com.inusual.gestiondigital.departamentos.dtos.DepartamentoMapper;
import com.inusual.gestiondigital.empresas.Empresa;
import com.inusual.gestiondigital.empresas.EmpresaService;
import com.inusual.gestiondigital.empresas.dtos.EmpresaMapper;
import com.inusual.gestiondigital.informes.Informe;
import com.inusual.gestiondigital.informes.InformeService;
import com.inusual.gestiondigital.informes.dtos.InformeMapper;
import com.inusual.gestiondigital.security.entity.Rol;
import com.inusual.gestiondigital.security.entity.Usuario;
import com.inusual.gestiondigital.security.enums.RolNombre;
import com.inusual.gestiondigital.security.service.RolService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@AllArgsConstructor
@Component
public class UsuarioMapperImpl implements UsuarioMapper{

    private InformeMapper informeMapper;
    private EmpresaMapper empresaMapper;
    private DepartamentoMapper departamentoMapper;
    private EmpresaService empresaService;
    private InformeService informeService;
    private RolService rolService;
    private DepartamentoService departamentoService;

    @Override
    public Usuario toUsuario(UsuarioResponseDto usuarioDto) {
        Usuario build = Usuario.builder()
                .id(usuarioDto.getId())
                .nombreUsuario(usuarioDto.getNombreUsuario())
                .nombre(usuarioDto.getNombre())
                .puesto(usuarioDto.getPuesto())
                .build();


        if (usuarioDto.getEmpresa() != null){
            Empresa empresa = this.empresaService.getById(usuarioDto.getEmpresa().getId());
            build.setEmpresa(empresa);
        }
        if (usuarioDto.getInformes() != null){
            build.setInformes(usuarioDto.getInformes()
                    .stream()
                    .map((informeDto -> this.informeMapper.toInforme(informeDto)))
                    .collect(Collectors.toSet()));
        }else{
            build.setInformes(new HashSet<>());
        }

        if (usuarioDto.getDepartamentos() != null){
            Set<Departamento> departamentos = new HashSet<>();
            for (DepartamentoDto departamento: usuarioDto.getDepartamentos()) {
                departamentos.add(this.departamentoService.getById(departamento.getId()));
            }
            build.setDepartamentos(departamentos);
        }else{
            build.setDepartamentos(new HashSet<>());
        }

        System.out.println(build);
        return build;
    }

    @Override
    public Usuario toUsuarioInformes(UsuarioResponseDto usuarioDto) {
        System.out.println(usuarioDto);
        Usuario build = Usuario.builder()
                .id(usuarioDto.getId())
                .build();

        Set<Informe> informes = new HashSet<>();
        if (usuarioDto.getInformes() != null){
            informes.addAll(usuarioDto.getInformes()
                    .stream()
                    .map((informeDto -> this.informeService.getById(informeDto.getId())))
                    .collect(Collectors.toSet()));
        }
        build.setInformes(informes);
        return build;
    }

    @Override
    public Usuario toUsuarioFromCreateDto(UsuarioCreateDto usuarioDto) {
        Usuario build = Usuario.builder()
                .nombreUsuario(usuarioDto.getNombreUsuario())
                .nombre(usuarioDto.getNombre())
                .email(usuarioDto.getEmail())
                .password(usuarioDto.getPassword())
                .puesto(usuarioDto.getPuesto())
                .informes(new HashSet<>())
                .build();


        if (usuarioDto.getEmpresa() != null){
            Empresa empresa = this.empresaService.getById(usuarioDto.getEmpresa().getId());
            build.setEmpresa(empresa);
        }

        if (usuarioDto.getDepartamentos() != null){
            Set<Departamento> departamentos = new HashSet<>();
            for (DepartamentoDto departamento: usuarioDto.getDepartamentos()) {
                departamentos.add(this.departamentoService.getById(departamento.getId()));
            }
            build.setDepartamentos(departamentos);
        }

        Set<Rol> roles = new HashSet<>();
        roles.add(rolService.getByRolNombre(RolNombre.ROLE_USER).get());
        if(usuarioDto.getRoles() != null){
            if(usuarioDto.getRoles().contains("admin"))
                roles.add(rolService.getByRolNombre(RolNombre.ROLE_ADMIN).get());
        }

        build.setRoles(roles);
        System.out.println(build);
        return build;
    }

    @Override
    public UsuarioResponseDto toUsuarioResponseDto(Usuario usuario) {
        return UsuarioResponseDto.builder()
                .id(usuario.getId())
                .nombreUsuario(usuario.getNombreUsuario())
                .email(usuario.getEmail())
                .nombre(usuario.getNombre())
                .puesto(usuario.getPuesto())
                .empresa(usuario.getEmpresa() != null ? this.empresaMapper.toEmpresaDto(usuario.getEmpresa()) : null)
                .informes(usuario.getInformes() != null ? this.informeMapper.toInformeDtoList(usuario.getInformes().stream().toList()) : null)
                .departamentos(usuario.getDepartamentos() != null ? this.departamentoMapper.toDepartamentoDtoList(usuario.getDepartamentos().stream().toList()) : null)
                .build();
    }

    @Override
    public List<UsuarioResponseDto> toUsuariosDtoList(List<Usuario> usuarioList) {
        return usuarioList
                .stream()
                .map(this::toUsuarioResponseDto)
                .collect(Collectors.toList());
    }
}
