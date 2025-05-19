import { CommonModule } from '@angular/common';
import {
  Component,
  Injector,
  computed,
  effect,
  inject,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartConfiguration } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { selectCounter } from '../../../state/counter.selectors';

@Component({
  selector: 'app-chart-bar',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss'],
})
export class ChartBarComponent {
  private labels = signal<string[]>([]);
  private values = signal<number[]>([]);
  private lastValue: number | null = null;

  barChartData = computed<ChartConfiguration<'bar'>['data']>(() => ({
    labels: this.labels(),
    datasets: [
      {
        data: this.values(),
        label: 'Histórico del contador',
        backgroundColor: '#42a5f5',
        borderRadius: 4,
      },
    ],
  }));

  constructor() {
    const injector = inject(Injector);
    const store = inject(Store);
    const counter = store.selectSignal(selectCounter);

    runInInjectionContext(injector, () => {
      effect(() => {
        const value = counter();
        if (value !== this.lastValue) {
          this.lastValue = value;
          this.labels.set([...this.labels(), new Date().toLocaleTimeString()]);
          this.values.set([...this.values(), value]);
        }
      });
    });
  }
}
