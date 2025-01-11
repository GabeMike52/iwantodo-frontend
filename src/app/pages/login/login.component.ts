import { Component } from '@angular/core';
import { DefaultFormLayoutComponent } from '../../components/default-form-layout/default-form-layout.component';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface LoginForm {
    username: FormControl;
    password: FormControl;
}

@Component({
    selector: 'app-login',
    imports: [
        DefaultFormLayoutComponent,
        ReactiveFormsModule,
        PrimaryInputComponent,
    ],
    providers: [LoginService],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    loginForm!: FormGroup<LoginForm>;

    constructor(
        private router: Router,
        private loginService: LoginService,
        private toastService: ToastrService
    ) {
        this.loginForm = new FormGroup({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(8),
            ]),
        });
    }

    submit() {
        this.loginService
            .login(this.loginForm.value.username, this.loginForm.value.password)
            .subscribe({
                next: () => this.toastService.success('Signed in successfully'),
                error: () =>
                    this.toastService.error(
                        'Unexpected Error! Try again later'
                    ),
            });
    }

    navigate() {
        this.router.navigate(['signup']);
    }
}
