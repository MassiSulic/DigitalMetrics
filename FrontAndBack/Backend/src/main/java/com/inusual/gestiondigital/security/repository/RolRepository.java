package com.inusual.gestiondigital.security.repository;


import com.inusual.gestiondigital.security.entity.Rol;
import com.inusual.gestiondigital.security.enums.RolNombre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RolRepository extends JpaRepository<Rol, Integer> {
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
}
