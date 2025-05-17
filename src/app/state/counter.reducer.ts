import { createReducer, on } from '@ngrx/store';
import { decrease, increase, reset } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increase, (state) => state + 5),
  on(decrease, (state) => state - 5),
  on(reset, () => 0)
);
