import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegesSettingComponent } from './colleges-setting.component';

describe('CollegesSettingComponent', () => {
  let component: CollegesSettingComponent;
  let fixture: ComponentFixture<CollegesSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegesSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegesSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
