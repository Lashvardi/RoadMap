import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson1BasicsComponent } from './lesson1-basics.component';

describe('Lesson1BasicsComponent', () => {
  let component: Lesson1BasicsComponent;
  let fixture: ComponentFixture<Lesson1BasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lesson1BasicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson1BasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
