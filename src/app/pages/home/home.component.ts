import { Component } from '@angular/core';
import { HomeLayoutComponent } from '../../components/home-layout/home-layout.component';

@Component({
    selector: 'app-home',
    imports: [HomeLayoutComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {}
