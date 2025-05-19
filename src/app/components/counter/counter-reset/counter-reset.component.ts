import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { reset } from '../../../state/counter.actions';
@Component({
  selector: 'app-counter-reset',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-reset.component.html',
  styleUrls: ['./counter-reset.component.scss'],
})
export class CounterResetComponent {
  constructor(private store: Store) {}

  reset() {
    this.store.dispatch(reset());
  }
}
