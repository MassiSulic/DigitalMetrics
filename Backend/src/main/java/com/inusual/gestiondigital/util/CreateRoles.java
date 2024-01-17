package com.inusual.gestiondigital.util;

import com.inusual.gestiondigital.departamentos.Departamento;
import com.inusual.gestiondigital.departamentos.DepartamentoRepository;
import com.inusual.gestiondigital.security.entity.Rol;
import com.inusual.gestiondigital.security.enums.RolNombre;
import com.inusual.gestiondigital.security.service.RolService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;


/**
 * MUY IMPORTANTE: ESTA CLASE SÓLO SE EJECUTARÁ UNA VEZ PARA CREAR LOS ROLES.
 * UNA VEZ CREADOS SE DEBERÁ ELIMINAR O BIEN COMENTAR EL CÓDIGO
 *
 */

@Component
@AllArgsConstructor
public class CreateRoles implements CommandLineRunner {

/*    @Autowired
    RolService rolService;*/

    @Override
    public void run(String... args) throws Exception {
/*        Rol rolAdmin = new Rol(RolNombre.ROLE_ADMIN);
        Rol rolUser = new Rol(RolNombre.ROLE_USER);
        rolService.save(rolAdmin);
        rolService.save(rolUser);*/


    }
}
