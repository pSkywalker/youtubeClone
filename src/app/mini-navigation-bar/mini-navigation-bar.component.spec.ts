import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniNavigationBarComponent } from './mini-navigation-bar.component';

describe('MiniNavigationBarComponent', () => {
  let component: MiniNavigationBarComponent;
  let fixture: ComponentFixture<MiniNavigationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniNavigationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
