import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftdocumentationComponent } from './leftdocumentation.component';

describe('LeftdocumentationComponent', () => {
  let component: LeftdocumentationComponent;
  let fixture: ComponentFixture<LeftdocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftdocumentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftdocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
