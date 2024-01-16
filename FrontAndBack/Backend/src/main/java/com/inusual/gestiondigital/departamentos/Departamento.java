package com.inusual.gestiondigital.departamentos;

import com.inusual.gestiondigital.empresas.Empresa;
import com.inusual.gestiondigital.informes.Informe;
import com.inusual.gestiondigital.security.entity.Usuario;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.util.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "departamentos", schema = "mkt_inusual_bi", catalog = "")
public class Departamento {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    private int id;
    @Basic
    @Column(name = "nombre", nullable = true, length = 100)
    private String nombre;
    @Basic
    @Column(name = "empresa_id", nullable = true, insertable = false, updatable = false)
    private Integer empresaId;
    @Basic
    @Column(name = "departamento_padre_id", nullable = true, insertable = false, updatable = false)
    private Integer departamentoPadreId;

    @ManyToOne
    @JoinColumn(name = "empresa_id", referencedColumnName = "id")
    private Empresa empresa;
    @ManyToOne
    @JoinColumn(name = "departamento_padre_id", referencedColumnName = "id")
    private Departamento departamentoPadre;

    @OneToMany(mappedBy = "departamento")
    private Collection<Informe> informes;

    @ManyToMany(mappedBy = "departamentos")
    private Set<Usuario> usuarios = new HashSet<>();

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

    public Integer getEmpresaId() {
        return empresaId;
    }

    public void setEmpresaId(Integer empresaId) {
        this.empresaId = empresaId;
    }

    public Integer getDepartamentoPadreId() {
        return departamentoPadreId;
    }

    public void setDepartamentoPadreId(Integer departamentoPadreId) {
        this.departamentoPadreId = departamentoPadreId;
    }

    public Set<Usuario> getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(Set<Usuario> usuarios) {
        this.usuarios = usuarios;
    }

    public Collection<Informe> getInformes() {
        return informes;
    }

    public void setInformes(Collection<Informe> informes) {
        this.informes = informes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Departamento that = (Departamento) o;
        return id == that.id && Objects.equals(nombre, that.nombre) && Objects.equals(empresaId, that.empresaId) && Objects.equals(departamentoPadreId, that.departamentoPadreId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, empresaId, departamentoPadreId);
    }

    public Empresa getEmpresa() {
        return empresa;
    }

    public void setEmpresa(Empresa empresa) {
        this.empresa = empresa;
    }

    public Departamento getDepartamentoPadre() {
        return departamentoPadre;
    }

    public void setDepartamentoPadre(Departamento departamentoPadre) {
        this.departamentoPadre = departamentoPadre;
    }

    @Override
    public String toString() {
        return "Departamento{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", empresaId=" + empresaId +
                ", departamentoPadreId=" + departamentoPadreId +
                '}';
    }
}
