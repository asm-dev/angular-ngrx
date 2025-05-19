import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCounter } from '../../../state/counter.selectors';

@Component({
  selector: 'app-counter-value',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-value.component.html',
  styleUrls: ['./counter-value.component.scss'],
})
export class CounterValueComponent {
  counter$: Observable<number>;

  constructor(private store: Store) {
    this.counter$ = this.store.select(selectCounter);
  }
}
