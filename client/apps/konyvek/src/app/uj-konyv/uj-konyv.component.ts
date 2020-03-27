import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'client-uj-konyv',
  templateUrl: './uj-konyv.component.html',
  styleUrls: ['./uj-konyv.component.css']
})
export class UjKonyvComponent {

  konyvForm = new FormGroup({
    azon: new FormControl(''),
    szerzo: new FormControl(''),
    cim: new FormControl(''),
    kiadasev: new FormControl(''),
    mennyiseg: new FormControl(''),
    ar: new FormControl(''),
    kolcsonozheto: new FormControl(''),
  });

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http
      .post<any>('http://192.168.64.2/blabla/server/ujkonyv.php', this.konyvForm.value)
      .subscribe(console.log);
  }
}
