import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-notfound',
    templateUrl: './notfound.component.html',
})
export class NotfoundComponent {
  constructor(
    public layoutService: LayoutService,
    ) { }
}
