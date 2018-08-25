import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SincPageComponent } from './sinc-page.component';

describe('SincPageComponent', () => {
  let component: SincPageComponent;
  let fixture: ComponentFixture<SincPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SincPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SincPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
