import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignupResponse } from '../types/signup-response.type';
import { tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RegisterService {
    constructor(private httpClient: HttpClient) {}

    signup(username: string, email: string, password: string) {
        return this.httpClient
            .post<SignupResponse>('http://localhost:8080/user/create', {
                username,
                email,
                password,
            })
            .pipe(
                tap((value) => {
                    sessionStorage.setItem(
                        'username and email',
                        value.username && value.email
                    );
                })
            );
    }
}
