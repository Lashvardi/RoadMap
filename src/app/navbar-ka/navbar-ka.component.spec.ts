import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarKaComponent } from './navbar-ka.component';

describe('NavbarKaComponent', () => {
  let component: NavbarKaComponent;
  let fixture: ComponentFixture<NavbarKaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarKaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarKaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
