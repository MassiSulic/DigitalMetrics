package com.inusual.gestiondigital.informes;

import com.inusual.gestiondigital.exceptions.UserNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class InformeServiceImpl implements InformeService{

    private final InformeRepository informeRepository;

    @Override
    public List<Informe> getAll() {
        List<Informe> all = this.informeRepository.findAll();
        System.out.println(all);
        return all;
    }

    @Override
    public Informe getByNombre(String nombre) {
        return this.informeRepository.findByNombre(nombre).
                orElseThrow(()->new UserNotFoundException("No existe Informe con Nombre: " + nombre));
    }

    @Override
    public Informe getById(int id) {
        return this.informeRepository.findById(id).
                orElseThrow(()->new UserNotFoundException("No existe Informe con Id: " + id));
    }

    @Override
    public Informe add(Informe informe) {
        return this.informeRepository.save(informe);
    }

    @Override
    public Informe update(Informe informe) {
        Informe informe1 =
                this.informeRepository
                        .findById(informe.getId())
                        .orElseThrow(()-> new UserNotFoundException("Informe by id " + informe.getId() + "was not found"));

        return this.informeRepository.save(informe);
    }

    @Override
    public void delete(Informe informe) {
        this.informeRepository.delete(informe);
    }

    @Override
    public void deleteAll(List<Informe> informeList) {
        this.informeRepository.deleteAll(informeList);
    }
}
