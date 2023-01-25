import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKaComponent } from './home-ka.component';

describe('HomeKaComponent', () => {
  let component: HomeKaComponent;
  let fixture: ComponentFixture<HomeKaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeKaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeKaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
