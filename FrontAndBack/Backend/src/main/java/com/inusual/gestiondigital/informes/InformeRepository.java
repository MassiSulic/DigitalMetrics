package com.inusual.gestiondigital.informes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface InformeRepository extends JpaRepository<Informe, Integer> {

    Optional<Informe> findByNombre(String nombre);
}
