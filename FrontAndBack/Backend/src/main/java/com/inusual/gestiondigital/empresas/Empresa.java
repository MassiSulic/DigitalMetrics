package com.inusual.gestiondigital.empresas;


import com.inusual.gestiondigital.departamentos.Departamento;
import com.inusual.gestiondigital.informes.Informe;
import com.inusual.gestiondigital.security.entity.Usuario;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.util.Collection;
import java.util.Objects;
  
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "empresas", schema = "mkt_inusual_bi", catalog = "")
public class Empresa {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    private int id;
    @Basic
    @Column(name = "nombre", nullable = true, length = 100)
    private String nombre;
    @OneToMany(mappedBy = "empresa", cascade = CascadeType.ALL)
    private Collection<Departamento> departamentos;

    @OneToMany(mappedBy = "empresa")
    private Collection<Informe> informes;

    @OneToMany(mappedBy = "empresa")
    private Collection<Usuario> usuarios;

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

    public Collection<Departamento> getDepartamentos() {
        return departamentos;
    }

    public void setDepartamentos(Collection<Departamento> departamentos) {
        this.departamentos = departamentos;
    }

    public Collection<Informe> getInformes() {
        return informes;
    }

    public void setInformes(Collection<Informe> informes) {
        this.informes = informes;
    }

    public Collection<Usuario> getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(Collection<Usuario> usuarios) {
        this.usuarios = usuarios;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Empresa empresas = (Empresa) o;
        return id == empresas.id && Objects.equals(nombre, empresas.nombre);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre);
    }

    public Collection<Departamento> getDepartamentosById() {
        return departamentos;
    }

    public void setDepartamentosById(Collection<Departamento> departamentosById) {
        this.departamentos = departamentosById;
    }

    @Override
    public String toString() {
        return "Empresa{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                '}';
    }
}
