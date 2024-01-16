package com.inusual.gestiondigital.empresas;

import java.util.List;

public interface EmpresaService {

    List<Empresa> getAll();
    Empresa getById(int id);
    Empresa getByNombre(String nombre);
    Empresa add(Empresa informe);
    Empresa update(Empresa informe);
    void delete(int id);

}
