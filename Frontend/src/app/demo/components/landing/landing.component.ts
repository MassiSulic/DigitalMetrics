import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit{



    constructor(public layoutService: LayoutService, public router: Router) { }

    ngOnInit(): void {
      this.changeTheme( 'mdc-dark-deeppurple', 'dark')
    }

    changeTheme(theme: string, colorScheme: string) {

      const themeLink = <HTMLLinkElement>document.getElementById('theme-css');
      const newHref = themeLink.getAttribute('href')!.replace(this.layoutService.config.theme, theme);
      this.layoutService.config.colorScheme
      this.replaceThemeLink(newHref, () => {
          this.layoutService.config.theme = theme;
          this.layoutService.config.colorScheme = colorScheme;
          this.layoutService.onConfigUpdate();
      });
    }

    replaceThemeLink(href: string, onComplete: Function) {
        const id = 'theme-css';
        const themeLink = <HTMLLinkElement>document.getElementById('theme-css');
        const cloneLinkElement = <HTMLLinkElement>themeLink.cloneNode(true);

        cloneLinkElement.setAttribute('href', href);
        cloneLinkElement.setAttribute('id', id + '-clone');

        themeLink.parentNode!.insertBefore(cloneLinkElement, themeLink.nextSibling);

        cloneLinkElement.addEventListener('load', () => {
            themeLink.remove();
            cloneLinkElement.setAttribute('id', id);
            onComplete();
        });
    }

    toLogin(){
      this.changeTheme( 'mdc-light-deeppurple', 'light')
      this.router.navigate(["/auth/login"])
    }

}
