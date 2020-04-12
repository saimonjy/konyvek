import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'client-konyv',
  templateUrl: './konyv.component.html',
  styleUrls: ['./konyv.component.css']
})
export class KonyvComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  public konyv: any;
  public vanKonyv = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {
    this.subscription.add(route
      .params
      .subscribe((param) => {
        this.subscription.add(this.http
          .get(environment.appRoot + '/server/konyv.php?azon=' + param.azon)
          .subscribe((konyv) => {
            this.konyv = konyv;
            this.vanKonyv = true;
          }));
      }));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
