import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  private reportUrlSubject = new BehaviorSubject<string>('');

  get reportUrl$() {
    return this.reportUrlSubject.asObservable();
  }

  updateReportUrl(url: string) {
    this.reportUrlSubject.next(url);
  }
}
