import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "pymes-frontend";
  constructor(private config: PrimeNGConfig) {}

    ngOnInit() {
        this.config.setTranslation({

          startsWith: 'Comience con',
          contains: 'Contenga',
          notContains: 'No contenga',
          endsWith: 'Termine con',
          equals: 'Igual a',
          notEquals: 'Diferente a',
          noFilter: 'Sin filtro',
          lt: 'Menor que',
          lte: 'Menor o igual a',
          gt: 'Mayor que',
          gte: 'Mayor o igual a',
          dateIs: 'Fecha igual a',
          dateIsNot: 'Fecha diferente a',
          dateBefore: 'Fecha antes de',
          dateAfter: 'Fecha después de',
          // custom: "Personalizar",
          clear: 'Limpiar',
          apply: 'Aplicar',
          matchAll: 'Coincidir todo',
          matchAny: 'Coincidir con cualquiera',
          addRule: 'Agregar regla',
          removeRule: 'Eliminar regla',
          accept: 'Sí',
          reject: 'No',
          choose: 'Escoger',
          upload: 'Subir',
          cancel: 'Cancelar',
          dayNames: [
            'Domingo',
            'Lunes',
            'Martes',
            'Miércoles',
            'Jueves',
            'Viernes',
            'Sábado'
          ],
          dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
          dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
          monthNames: [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre'
            ],
          monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
          today: 'Hoy',
          weekHeader: 'Sem',
          firstDayOfWeek: 1,
          dateFormat: 'dd/mm/yy',
          weak: 'Débil',
          medium: 'Medio',
          strong: 'Fuerte',
          passwordPrompt: 'Escriba una contraseña',
          emptyFilterMessage: 'Sin opciones disponibles',
          emptyMessage: 'No se han encontrado resultados',
        //   aria: {
        //     trueLabel: 'Verdadero',
        //     falseLabel: 'Falso',
        //     nullLabel: 'No seleccionado',
        //     star: '1 estrella',
        //     stars: '{star} estrellas',
        //     selectAll: 'Seleccionar todos',
        //     unselectAll: 'Deseleccionar todos',
        //     close: 'Cerrar',
        //     previous: 'Anterior',
        //     next: 'Siguiente',
        //     navigation: 'Navegación',
        //     scrollTop: 'Desplazarse arriba',
        //     moveTop: 'Mover arriba',
        //     moveUp: 'Subir',
        //     moveDown: 'Bajar',
        //     moveBottom: 'Desplazarse abajo',
        //     moveToTarget: 'Mover al objectivo',
        //     moveToSource: 'Mover al fuente',
        //     moveAllToTarget: 'Mover todo al objetivo',
        //     moveAllToSource: 'Mover todo al fuente',
        //     pageLabel: '{page}',
        //     firstPageLabel: 'Primera Página',
        //     lastPageLabel: 'Última Página',
        //     nextPageLabel: 'Siguiente Página',
        //     previousPageLabel: 'Página Anterior',
        //     rowsPerPageLabel: 'Filas por página',
        //     jumpToPageDropdownLabel: 'Ir al menú desplegable de página',
        //     jumpToPageInputLabel: 'Ir a la entrada de página',
        //     selectRow: 'Seleccionar fila',
        //     unselectRow: 'Desmarcar fila',
        //     expandRow: 'Expandir Fila',
        //     collapseRow: 'Reducir Fila',
        //     showFilterMenu: 'Mostrar menú del filtro',
        //     hideFilterMenu: 'Ocultar menú del filtro',
        //     filterOperator: 'Operador de filtro',
        //     filterConstraint: 'Restricción de filtro',
        //     editRow: 'Editar fila',
        //     saveEdit: 'Guardar editado',
        //     cancelEdit: 'Cancelar editado',
        //     listView: 'Vista de lista',
        //     gridView: 'Vista de cuadrícula',
        //     slide: 'Deslizar',
        //     slideNumber: '{slideNumber}',
        //     zoomImage: 'Ampliar imagen',
        //     zoomIn: 'Ampliar',
        //     zoomOut: 'Reducir',
        //     rotateRight: 'Girar derecha',
        //     rotateLeft: 'Girar izquierda'
        //  }

            //translations
        });
    }
}
