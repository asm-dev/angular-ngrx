import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrease } from '../../../state/counter.actions';

@Component({
  selector: 'app-counter-decrease',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-decrease.component.html',
  styleUrls: ['./counter-decrease.component.scss'],
})
export class CounterDecreaseComponent {
  constructor(private store: Store) {}

  subtract() {
    this.store.dispatch(decrease());
  }
}
