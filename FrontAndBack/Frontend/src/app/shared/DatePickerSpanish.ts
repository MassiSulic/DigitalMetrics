import { NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';


@Injectable()
export class DatePickerSpanish extends NgbDatepickerI18n {
  public getWeekdayShortName(weekday: number): string {
      return [
        'Lu',
        'Ma',
        'Mi',
        'Ju',
        'Vi',
        'Sa',
        'Do'
      ][weekday - 1];
  }
  getWeekdayLabel(weekday: number): string {
    switch (weekday) {
      case 0:
        return 'Dom';
      case 1:
        return 'Lun';
      case 2:
        return 'Mar';
      case 3:
        return 'Mié';
      case 4:
        return 'Jue';
      case 5:
        return 'Vie';
      case 6:
        return 'Sáb';
      default:
        return '';
    }
  }
  public getMonthShortName(month: number): string {
      return [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic'
      ][month - 1];
  }
  public getMonthFullName(month: number): string {
    return [
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
      ][month - 1];
  }
  public getDayAriaLabel(date: NgbDateStruct): string {
      return date.day + ' de ' + this.getMonthFullName(date.month) + ', ' + date.year;
  }
}
