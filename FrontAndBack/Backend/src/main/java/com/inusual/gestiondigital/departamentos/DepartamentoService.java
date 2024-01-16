package com.inusual.gestiondigital.departamentos;

import com.inusual.gestiondigital.empresas.Empresa;

import java.util.List;

public interface DepartamentoService {
    List<Departamento> getAll();
    List<Departamento> getAllIn(List<Integer> idList);
    Departamento getById(int id);
    Departamento getByNombre(String nombre);
    Departamento add(Departamento informe);
    Departamento update(Departamento informe);
    void delete(int id);
    void findDepartamentosHijos(int departamentoId);
}
