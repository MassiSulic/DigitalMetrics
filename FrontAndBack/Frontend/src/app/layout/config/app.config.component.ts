import { Component, Input, OnInit } from '@angular/core';
import { LayoutService } from "../service/app.layout.service";
import { MenuService } from "../app.menu.service";

@Component({
    selector: 'app-config',
    templateUrl: './app.config.component.html'
})
export class AppConfigComponent implements OnInit{

    @Input() minimal: boolean = false;

    scales: number[] = [12, 13, 14, 15, 16];

    constructor(public layoutService: LayoutService, public menuService: MenuService) { }

    get visible(): boolean {
        return this.layoutService.state.configSidebarVisible;
    }

    set visible(_val: boolean) {
        this.layoutService.state.configSidebarVisible = _val;
    }

    get scale(): number {
        return this.layoutService.config.scale;
    }

    set scale(_val: number) {
        this.layoutService.config.scale = _val;
    }

    get menuMode(): string {
        return this.layoutService.config.menuMode;
    }

    set menuMode(_val: string) {
        this.layoutService.config.menuMode = _val;
    }

    get inputStyle(): string {
        return this.layoutService.config.inputStyle;
    }

    set inputStyle(_val: string) {
        this.layoutService.config.inputStyle = _val;
    }

    get ripple(): boolean {
        return this.layoutService.config.ripple;
    }

    set ripple(_val: boolean) {
        this.layoutService.config.ripple = _val;
    }

    tema:string = 'mdc-light-deeppurple';
    color: string = 'light';

    TEMA_KEY: string = "IN-THEME"

    ngOnInit(): void {
      const savedTema = localStorage.getItem(this.TEMA_KEY)
        if(savedTema){
          this.color = savedTema;
          this.onConfigButtonClick();
        }
    }

    onConfigButtonClick() {
      window.localStorage.removeItem(this.TEMA_KEY);
        if(this.color == 'light'){
          this.changeTheme( 'mdc-dark-deeppurple', 'dark')
          window.localStorage.setItem(this.TEMA_KEY, 'light');
        }else{
          this.changeTheme( 'mdc-light-deeppurple', 'light')
          window.localStorage.setItem(this.TEMA_KEY, 'dark');
        }
        //this.layoutService.showConfigSidebar();

    }

    changeTheme(theme: string, colorScheme: string) {
        this.tema = theme;
        this.color = colorScheme;

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

    decrementScale() {
        this.scale--;
        this.applyScale();
    }

    incrementScale() {
        this.scale++;
        this.applyScale();
    }

    applyScale() {
        document.documentElement.style.fontSize = this.scale + 'px';
    }
}