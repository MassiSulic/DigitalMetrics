import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ReportesService } from 'src/app/services/reportes.service';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit{
  reportUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private reportService: ReportesService) {}

  ngOnInit(): void {
    this.reportService.reportUrl$.subscribe(url => {
      this.reportUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);;
    });
      // this.switchToReport(this.reportService.reportUrl$)
  }

  switchToReport(reportUrl: string) {
    this.reportUrl = this.sanitizer.bypassSecurityTrustResourceUrl(reportUrl);
  }
}
