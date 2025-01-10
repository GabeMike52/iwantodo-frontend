import { Component } from '@angular/core';
import { DefaultFormLayoutComponent } from '../../components/default-form-layout/default-form-layout.component';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'app-login',
    imports: [DefaultFormLayoutComponent, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    loginForm!: FormGroup;

    constructor() {
        this.loginForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(8),
            ]),
        });
    }
}
