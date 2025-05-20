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
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { selectCounter } from '../../../state/counter.selectors';

@Component({
  selector: 'app-chart-line',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.scss'],
})
export class ChartLineComponent {
  private labels = signal<string[]>([]);
  private values = signal<number[]>([]);
  private lastValue: number | null = null;

  // ✅ Opciones claras para gráfico de líneas
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 5,
      },
    },
  };

  public lineChartData = computed<ChartConfiguration<'line'>['data']>(() => ({
    labels: this.labels(),
    datasets: [
      {
        data: this.values(),
        label: 'Evolución del contador',
        fill: true,
        borderColor: '#1976d2',
        backgroundColor: 'rgba(25, 118, 210, 0.2)',
        pointBorderColor: '#1976d2',
        pointBackgroundColor: '#ffffff',
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
