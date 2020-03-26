import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// interface Konyv {
//   azon: string;
//   ...
// }

@Component({
  selector: 'client-konyvlista',
  templateUrl: './konyvlista.component.html',
  styleUrls: ['./konyvlista.component.css']
})
export class KonyvlistaComponent implements OnInit {
  // konyvek:Observable<Konyv[]> = this.http.get('http://192.168.64.2/blabla/server/konyvlista.php');
  konyvek = this.http.get('http://192.168.64.2/blabla/server/konyvlista.php');

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

}
