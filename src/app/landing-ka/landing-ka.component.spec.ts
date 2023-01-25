import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingKaComponent } from './landing-ka.component';

describe('LandingKaComponent', () => {
  let component: LandingKaComponent;
  let fixture: ComponentFixture<LandingKaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingKaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingKaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
