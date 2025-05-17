import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { counterReducer } from './app/state/counter.reducer';

bootstrapApplication(AppComponent, {
  providers: [provideStore({ counter: counterReducer })],
});
