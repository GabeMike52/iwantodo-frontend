import { Component } from '@angular/core';
import { DefaultFormLayoutComponent } from '../../components/default-form-layout/default-form-layout.component';

@Component({
    selector: 'app-login',
    imports: [DefaultFormLayoutComponent],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {}
