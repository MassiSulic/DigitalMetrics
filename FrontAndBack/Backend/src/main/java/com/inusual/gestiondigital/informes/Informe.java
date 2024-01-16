package com.inusual.gestiondigital.informes;

import com.inusual.gestiondigital.departamentos.Departamento;
import com.inusual.gestiondigital.empresas.Empresa;
import com.inusual.gestiondigital.security.entity.Usuario;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "informes", schema = "mkt_inusual_bi", catalog = "")
public class Informe {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    private int id;
    @Basic
    @Column(name = "link", nullable = true, length = 300)
    private String link;
    @Basic
    @Column(name = "nombre", nullable = true, length = 100)
    private String nombre;
    @ManyToOne
    @JoinColumn(name = "empresa_id", referencedColumnName = "id")
    private Empresa empresa;
    @ManyToOne
    @JoinColumn(name = "departamento_id", referencedColumnName = "id")
    private Departamento departamento;

    @ManyToMany(mappedBy = "informes")
    private Set<Usuario> usuarios = new HashSet<>();

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Empresa getEmpresa() {
        return empresa;
    }

    public void setEmpresa(Empresa empresa) {
        this.empresa = empresa;
    }

    public Departamento getDepartamento() {
        return departamento;
    }

    public void setDepartamento(Departamento departamento) {
        this.departamento = departamento;
    }

    public Set<Usuario> getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(Set<Usuario> usuarios) {
        this.usuarios = usuarios;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Informe informe = (Informe) o;
        return id == informe.id && Objects.equals(link, informe.link) && Objects.equals(nombre, informe.nombre) && Objects.equals(empresa, informe.empresa) && Objects.equals(departamento, informe.departamento);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, link, nombre, empresa, departamento);
    }

    @Override
    public String toString() {
        return "Informe{" +
                "id=" + id +
                ", link='" + link + '\'' +
                ", nombre='" + nombre + '\'' +
                ", empresa=" + empresa +
                ", departamento=" + departamento +
                '}';
    }
}
