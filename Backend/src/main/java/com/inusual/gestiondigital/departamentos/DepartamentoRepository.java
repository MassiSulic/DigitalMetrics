package com.inusual.gestiondigital.departamentos;

import com.inusual.gestiondigital.empresas.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DepartamentoRepository extends JpaRepository<Departamento, Integer> {

    Optional<Departamento> findByNombre(String nombre);

    @Query("SELECT d FROM Departamento d WHERE d.departamentoPadre.id IN (SELECT d.id FROM Departamento d WHERE d.departamentoPadre.id = :departamentoId)")
    List<Departamento> findHijosRecursivos(@Param("departamentoId") int departamentoId);

    @Query("SELECT d FROM Departamento d WHERE d.departamentoPadre.id = :departamentoId")
    List<Departamento> findHijosDirectos(@Param("departamentoId") int departamentoId);

}

