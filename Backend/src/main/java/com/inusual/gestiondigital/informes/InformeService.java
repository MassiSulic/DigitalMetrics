package com.inusual.gestiondigital.informes;

import java.util.List;

public interface InformeService {

    List<Informe> getAll();
    Informe getById(int id);
    Informe getByNombre(String nombre);
    Informe add(Informe informe);
    Informe update(Informe informe);
    void delete(Informe informe);
    void deleteAll(List<Informe> informeList);

}
