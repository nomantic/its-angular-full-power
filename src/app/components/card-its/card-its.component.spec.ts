import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItsComponent } from './card-its.component';

describe('CardItsComponent', () => {
  let component: CardItsComponent;
  let fixture: ComponentFixture<CardItsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardItsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardItsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
