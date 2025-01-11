import { Component } from '@angular/core';
import { PrimaryInputComponent } from '../primary-input/primary-input.component';

@Component({
    selector: 'app-home-layout',
    imports: [PrimaryInputComponent],
    templateUrl: './home-layout.component.html',
    styleUrl: './home-layout.component.scss',
})
export class HomeLayoutComponent {}
