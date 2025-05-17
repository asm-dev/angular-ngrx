import { createAction } from '@ngrx/store';

export const increase = createAction('[Counter] Increase by 5');
export const decrease = createAction('[Counter] Decrease by 5');
export const reset = createAction('[Counter] Reset');
