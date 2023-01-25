import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocbarComponent } from './docbar.component';

describe('DocbarComponent', () => {
  let component: DocbarComponent;
  let fixture: ComponentFixture<DocbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
