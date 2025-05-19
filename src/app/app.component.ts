import { Component } from '@angular/core';
import { CounterDecreaseComponent } from './components/counter/counter-decrease/counter-decrease.component';
import { CounterIncreaseComponent } from './components/counter/counter-increase/counter-increase.component';
import { CounterResetComponent } from './components/counter/counter-reset/counter-reset.component';
import { CounterValueComponent } from './components/counter/counter-value/counter-value.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CounterValueComponent,
    CounterIncreaseComponent,
    CounterDecreaseComponent,
    CounterResetComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
