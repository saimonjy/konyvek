import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

  constructor() { }

  onSubmit() {
    console.log(this.konyvForm.value);
  }
}
