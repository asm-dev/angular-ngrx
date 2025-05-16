import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterIncreaseComponent } from './counter-increase.component';

describe('CounterIncreaseComponent', () => {
  let component: CounterIncreaseComponent;
  let fixture: ComponentFixture<CounterIncreaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterIncreaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterIncreaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
