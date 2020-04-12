import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KonyvComponent } from './konyv.component';

describe('KonyvComponent', () => {
  let component: KonyvComponent;
  let fixture: ComponentFixture<KonyvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonyvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonyvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
