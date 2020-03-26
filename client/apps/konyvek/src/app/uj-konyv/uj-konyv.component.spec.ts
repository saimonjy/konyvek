import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UjKonyvComponent } from './uj-konyv.component';

describe('UjKonyvComponent', () => {
  let component: UjKonyvComponent;
  let fixture: ComponentFixture<UjKonyvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UjKonyvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UjKonyvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
