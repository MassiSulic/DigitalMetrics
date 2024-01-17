package com.inusual.gestiondigital.security.service;


import com.inusual.gestiondigital.departamentos.Departamento;
import com.inusual.gestiondigital.departamentos.DepartamentoService;
import com.inusual.gestiondigital.departamentos.dtos.DepartamentoDto;
import com.inusual.gestiondigital.empresas.Empresa;
import com.inusual.gestiondigital.empresas.EmpresaService;
import com.inusual.gestiondigital.exceptions.BusinessException;
import com.inusual.gestiondigital.exceptions.UserNotFoundException;
import com.inusual.gestiondigital.informes.Informe;
import com.inusual.gestiondigital.security.dto.*;
import com.inusual.gestiondigital.security.entity.Rol;
import com.inusual.gestiondigital.security.entity.Usuario;
import com.inusual.gestiondigital.security.enums.RolNombre;
import com.inusual.gestiondigital.security.jwt.JwtProvider;
import com.inusual.gestiondigital.security.repository.UsuarioRepository;
import com.inusual.gestiondigital.usuarios.UsuarioResponseDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.util.*;
import java.util.stream.Collectors;

@Service
@Transactional
public class UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    RolService rolService;

    @Autowired
    DepartamentoService departamentoService;

    @Autowired
    EmpresaService empresaService;



    @Autowired
    JwtProvider jwtProvider;

    public Usuario getByNombreUsuario(String nombreUsuario){
        return usuarioRepository.findByNombreUsuario(nombreUsuario)
                .orElseThrow(() ->new UserNotFoundException("No existe el usuario con username " + nombreUsuario)
        );
    }

    public Optional<Usuario> getByNombreUsuarioOrEmail(String nombreOrEmail){
        return usuarioRepository.findByNombreUsuarioOrEmail(nombreOrEmail, nombreOrEmail);
    }

    public Optional<Usuario> getByTokenPassword(String tokenPassword){
        return usuarioRepository.findByTokenPassword(tokenPassword);
    }

    public boolean existsByNombreUsuario(String nombreUsuario){
        return usuarioRepository.existsByNombreUsuario(nombreUsuario);
    }

    public boolean existsByEmail(String email){
        return usuarioRepository.existsByEmail(email);
    }

    public JwtDto login(LoginUsuario loginUsuario){
        Authentication authentication =
                authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginUsuario.getNombreUsuario(), loginUsuario.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtProvider.generateToken(authentication);
        return new JwtDto(jwt);
    }

    public JwtDto refresh(JwtDto jwtDto) throws ParseException {
        String token = jwtProvider.refreshToken(jwtDto);
        return new JwtDto(token);
    }

    public Mensaje save(NuevoUsuario nuevoUsuario){
        if(usuarioRepository.existsByNombreUsuario(nuevoUsuario.getNombreUsuario()))
            throw new BusinessException("P-301", HttpStatus.BAD_REQUEST, "ese nombre de usuario ya existe");
        if(usuarioRepository.existsByEmail(nuevoUsuario.getEmail()))
            throw new BusinessException("P-302", HttpStatus.BAD_REQUEST, "ese email de usuario ya existe");

        Usuario usuario = Usuario.builder()
                .nombre(nuevoUsuario.getNombre())
                .nombreUsuario(nuevoUsuario.getNombreUsuario())
                .email(nuevoUsuario.getEmail())
                .password(passwordEncoder.encode(nuevoUsuario.getPassword()))
                .build();

        Set<Rol> roles = new HashSet<>();
        roles.add(rolService.getByRolNombre(RolNombre.ROLE_USER).get());
        if(nuevoUsuario.getRoles().contains("admin")){
            roles.add(rolService.getByRolNombre(RolNombre.ROLE_ADMIN).get());
        }

        usuario.setRoles(roles);

        //////////////////////////////////////////////////////////////////
        ////DEPARTAMENTOS/////////
        List<Integer> idDepartamentosList = nuevoUsuario.getDepartamentos().stream()
                .map(DepartamentoDto::getId)
                .collect(Collectors.toList());

        List<Departamento> departamentos = departamentoService.getAllIn(idDepartamentosList);
        usuario.setDepartamentos(new HashSet<>(departamentos));

        ///////////////////////////////////////////////////////////////////
        /////////Empresa///////////
        if (nuevoUsuario.getEmpresa() != null){
            Empresa empresa = this.empresaService.getById(nuevoUsuario.getEmpresa().getId());
            usuario.setEmpresa(empresa);
        }
        ///////////////////////////////////////////////////////////////////
        /////////Puesto///////////
        usuario.setPuesto(nuevoUsuario.getPuesto());

        this.usuarioRepository.save(usuario);

        return new Mensaje(usuario.getNombreUsuario() + " ha sido creado");
    }


    public Mensaje editar(EditUsuario editUsuario){

        Usuario usuario = this.usuarioRepository.findById(editUsuario.getId()).
                orElseThrow(()->new UserNotFoundException("No existe Usuario con id: " + editUsuario.getId()));

        if(!Objects.equals(editUsuario.getNombreUsuario(), usuario.getNombreUsuario()) && (usuarioRepository.existsByNombreUsuario(editUsuario.getNombreUsuario())))
        {
            throw new BusinessException("P-301", HttpStatus.BAD_REQUEST, "ese nombre de usuario ya existe");
        }
        if(editUsuario.getEmail() == usuario.getEmail() && (usuarioRepository.existsByEmail(editUsuario.getEmail())))
        {
            throw new BusinessException("P-302", HttpStatus.BAD_REQUEST, "ese email de usuario ya existe");
        }

        //////////////////////////////////////////////////////////////////
        ////DEPARTAMENTOS/////////

        List<Integer> idDepartamentosList = editUsuario.getDepartamentos().stream()
                .map(DepartamentoDto::getId)
                .collect(Collectors.toList());
        List<Departamento> departamentos = departamentoService.getAllIn(idDepartamentosList);
        usuario.getDepartamentos().clear();
        usuario.setDepartamentos(new HashSet<>(departamentos));
        ///////////////////////////////////////////////////////////////////
        /////////Empresa///////////
        if (editUsuario.getEmpresa() != null){
            Empresa empresa = this.empresaService.getById(editUsuario.getEmpresa().getId());
            usuario.setEmpresa(empresa);
        }
        ///////////////////////////////////////////////////////////////////
        usuario.setNombreUsuario(editUsuario.getNombreUsuario());
        usuario.setEmail(editUsuario.getEmail());
        usuario.setNombre(editUsuario.getNombre());
        usuario.setPuesto(editUsuario.getPuesto());

        this.usuarioRepository.save(usuario);

        return new Mensaje(usuario.getNombreUsuario() + " ha sido editado");
    }


    public List<Usuario> getAll(){
        return this.usuarioRepository.findAll();
    }

    public Usuario getById(int id) {
        return this.usuarioRepository.findById(id).
                orElseThrow(() -> new UserNotFoundException("No existe Usuario con Id: " + id));

    }


    public Usuario update(Usuario usuario){
        return this.usuarioRepository.save(usuario);
    }

    public Mensaje actualizarInformes(Usuario editUsuario){

        Usuario user = this.usuarioRepository.findById(editUsuario.getId()).
                orElseThrow(()->new UserNotFoundException("No existe Usuario con id: " + editUsuario.getId()));

        Set<Informe> informes = user.getInformes();
        informes.clear(); // Remove existing associations if needed
        informes.addAll(editUsuario.getInformes());

        this.usuarioRepository.save(user);
        return new Mensaje("Los informes de " + user.getNombreUsuario() + " han sido actualizados");
    }


    public void delete(int id){
        Usuario usuarioAEliminar = this.getById(id);
        this.usuarioRepository.delete(usuarioAEliminar);
    }

    public void deleteAll(List<UsuarioResponseDto> usuarioResponseDtoList){
        List<Usuario> usuariosAEliminar = new ArrayList<>();
        for (UsuarioResponseDto usuarioResponseDto: usuarioResponseDtoList  ) {
            usuariosAEliminar.add(this.getById(usuarioResponseDto.getId()));
        }
        this.usuarioRepository.deleteAllInBatch(usuariosAEliminar);
    }

}
