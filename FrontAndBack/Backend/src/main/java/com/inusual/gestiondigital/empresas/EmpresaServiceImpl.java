package com.inusual.gestiondigital.empresas;

import com.inusual.gestiondigital.exceptions.UserNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class EmpresaServiceImpl implements EmpresaService {

    private final EmpresaRepository empresaRepository;

    @Override
    public List<Empresa> getAll() {
        return this.empresaRepository.findAll();
    }

    @Override
    public Empresa getByNombre(String nombre) {
        return this.empresaRepository.findByNombre(nombre).
                orElseThrow(()->new UserNotFoundException("No existe Informe con Nombre: " + nombre));
    }

    @Override
    public Empresa getById(int id) {
        return this.empresaRepository.findById(id).
                orElseThrow(()->new UserNotFoundException("No existe Empresa con Id: " + id));
    }

    @Override
    public Empresa add(Empresa informe) {
        return this.empresaRepository.save(informe);
    }

    @Override
    public Empresa update(Empresa informe) {
        this.empresaRepository
                .findById(informe.getId())
                .orElseThrow(()-> new UserNotFoundException("Empresa by id " + informe.getId() + "was not found"));


        return this.empresaRepository.save(informe);
    }

    @Override
    public void delete(int id) {
        Empresa deletedInforme = this.getById(id);
        this.empresaRepository.delete(deletedInforme);
    }
}
