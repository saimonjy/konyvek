import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KonyvlistaComponent } from './konyvlista.component';

describe('KonyvlistaComponent', () => {
  let component: KonyvlistaComponent;
  let fixture: ComponentFixture<KonyvlistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonyvlistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonyvlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
