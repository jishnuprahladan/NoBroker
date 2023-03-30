import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFlatsComponent } from './single-flats.component';

describe('SingleFlatsComponent', () => {
  let component: SingleFlatsComponent;
  let fixture: ComponentFixture<SingleFlatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleFlatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleFlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
