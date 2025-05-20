import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { increase } from '../../../state/counter.actions';

@Component({
  selector: 'app-counter-increase',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './counter-increase.component.html',
  styleUrls: ['./counter-increase.component.scss'],
})
export class CounterIncreaseComponent {
  constructor(private store: Store) {}

  add() {
    this.store.dispatch(increase());
  }
}
