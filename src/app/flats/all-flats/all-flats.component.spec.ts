import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFlatsComponent } from './all-flats.component';

describe('AllFlatsComponent', () => {
  let component: AllFlatsComponent;
  let fixture: ComponentFixture<AllFlatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFlatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
