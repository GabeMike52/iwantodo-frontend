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
import { ToastrService } from 'ngx-toastr';

interface SignupForm {
    username: FormControl;
    email: FormControl;
    password: FormControl;
}

@Component({
    selector: 'app-signup',
    imports: [
        DefaultFormLayoutComponent,
        ReactiveFormsModule,
        PrimaryInputComponent,
    ],
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.scss',
})
export class SignupComponent {
    singupForm!: FormGroup<SignupForm>;

    constructor(private router: Router, private toastService: ToastrService) {
        this.singupForm = new FormGroup({
            username: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(8),
            ]),
        });
    }

    navigate() {
        this.router.navigate(['signin']);
    }
}
