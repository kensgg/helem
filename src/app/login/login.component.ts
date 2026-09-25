import { Component, OnInit } from '@angular/core';
import { authServices } from '../service/auth.services';


// Permite a la clase ejecutarse como componente
@Component({
    selector:'login',
    templateUrl: 'login.component.html', 
})

// Declaracion
export class LoginComponent implements OnInit{
    constructor(private auth: authServices){}
    ngOnInit(): void {
        
    }
    login(){
        this.auth.login().then(console.log);
    }
}