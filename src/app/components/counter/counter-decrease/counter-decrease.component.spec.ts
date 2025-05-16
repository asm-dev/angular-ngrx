import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDecreaseComponent } from './counter-decrease.component';

describe('CounterDecreaseComponent', () => {
  let component: CounterDecreaseComponent;
  let fixture: ComponentFixture<CounterDecreaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterDecreaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterDecreaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
