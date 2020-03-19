import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

// interface Konyv {
//   azon: string;
//   ...
// }

@Component({
  selector: 'client-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'konyvek';
  // konyvek:Observable<Konyv[]> = this.http.get('http://192.168.64.2/blabla/server/konyvlista.php');
  konyvek = this.http.get('http://192.168.64.2/blabla/server/konyvlista.php');
  
  constructor(private http:HttpClient) {
  }
}
