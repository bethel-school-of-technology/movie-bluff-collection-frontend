import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private httpClient: HttpClient) { }

  public sendUserInfo(): void {
    alert('Button Pushed');
  }


  submit() {
    console.log('I am working!');
  }
}
