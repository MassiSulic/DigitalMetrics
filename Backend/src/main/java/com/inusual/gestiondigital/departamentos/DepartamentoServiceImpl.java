package com.inusual.gestiondigital.departamentos;

import com.inusual.gestiondigital.exceptions.UserNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class DepartamentoServiceImpl implements DepartamentoService{
    private final DepartamentoRepository departamentoRepository;

    @Override
    public List<Departamento> getAll() {
        return this.departamentoRepository.findAll();
    }

    @Override
    public List<Departamento> getAllIn(List<Integer> idList) {
        return this.departamentoRepository.findAllById(idList);
    }

    @Override
    public Departamento getByNombre(String nombre) {
        return this.departamentoRepository.findByNombre(nombre).
                orElseThrow(()->new UserNotFoundException("No existe Departamento con Nombre: " + nombre));
    }

    @Override
    public Departamento getById(int id) {
        return this.departamentoRepository.findById(id).
                orElseThrow(()->new UserNotFoundException("No existe Departamento con Id: " + id));
    }

    @Override
    public Departamento add(Departamento departamento) {
        Integer departamentoPadreId = departamento.getDepartamentoPadreId();
        if (departamentoPadreId != null && departamentoPadreId > 0) {
            Departamento departamentoPadre = this.departamentoRepository.findById(departamentoPadreId)
                    .orElseThrow(() -> new IllegalArgumentException("Departamento Padre no encontrado"));
            departamento.setDepartamentoPadre(departamentoPadre);
        }

        return this.departamentoRepository.save(departamento);
    }

    @Override
    public Departamento update(Departamento departamento) {
        this.departamentoRepository
                .findById(departamento.getId())
                .orElseThrow(()-> new UserNotFoundException("Departamento by id " + departamento.getId() + " was not found"));


        return this.departamentoRepository.save(departamento);
    }

    @Override
    public void delete(int id) {
        Departamento deletedInforme = this.getById(id);
        this.departamentoRepository.delete(deletedInforme);
    }

    @Override
    public void findDepartamentosHijos(int departamentoId) {
        List<Departamento> departamentosHijos = departamentoRepository.findHijosDirectos(departamentoId);
        System.out.println(departamentosHijos);
    }
}
