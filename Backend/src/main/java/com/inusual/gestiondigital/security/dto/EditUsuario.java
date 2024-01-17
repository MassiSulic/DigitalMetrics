package com.inusual.gestiondigital.security.dto;

import com.inusual.gestiondigital.departamentos.dtos.DepartamentoDto;
import com.inusual.gestiondigital.empresas.dtos.EmpresaDto;
import com.inusual.gestiondigital.informes.dtos.InformeDto;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class EditUsuario {
    private int id;
    @NotBlank(message = "nombre obligatorio")
    private String nombre;
    @NotBlank(message = "nombre de usuario obligatorio")
    private String nombreUsuario;
    @Email(message = "dirección de email no válida")
    @NotBlank(message = "email obligatorio")
    private String email;
    private String puesto;
    private List<DepartamentoDto> departamentos = new ArrayList<>();
    private List<InformeDto> informes = new ArrayList<>();
    private EmpresaDto empresa;


    public EditUsuario() {
    }

    public EditUsuario(int id, String nombre, String nombreUsuario, String email, String puesto, List<DepartamentoDto> departamentos, List<InformeDto> informes, EmpresaDto empresa) {
        this.id = id;
        this.nombre = nombre;
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.puesto = puesto;
        this.departamentos = departamentos;
        this.informes = informes;
        this.empresa = empresa;
    }

    public EditUsuario(String nombre, String nombreUsuario, String email) {
        this.nombre = nombre;
        this.nombreUsuario = nombreUsuario;
        this.email = email;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPuesto() {
        return puesto;
    }

    public void setPuesto(String puesto) {
        this.puesto = puesto;
    }

    public List<DepartamentoDto> getDepartamentos() {
        return departamentos;
    }

    public void setDepartamentos(List<DepartamentoDto> departamentos) {
        this.departamentos = departamentos;
    }

    public EmpresaDto getEmpresa() {
        return empresa;
    }

    public void setEmpresa(EmpresaDto empresa) {
        this.empresa = empresa;
    }

    public List<InformeDto> getInformes() {
        return informes;
    }

    public void setInformes(List<InformeDto> informes) {
        this.informes = informes;
    }
}
