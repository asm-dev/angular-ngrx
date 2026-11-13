# Counter application with NgRX

This project is a proof of concept (POC) developed in Angular with the goal of exploring how **NgRx** works, the Redux-based state management library adapted for Angular. The application implements a global counter controlled by multiple components, along with a dynamic visualization of its evolution through interactive charts.

![image](https://github.com/user-attachments/assets/a4a22866-3a83-4a6d-ac03-436cbb0c47fb)


## What is NgRx and what is it used for?

NgRx provides an architecture based on unidirectional data flows and centralized state management, ideal for medium to large Angular applications. It is inspired by Redux, and makes extensive use of `RxJS`, as well as newer Angular capabilities such as `signals` to access the state in a more reactive way.

- A global `store` is defined that holds the application state.
- The state can only be modified through `actions`, which are handled by `reducers`.
- The state is accessed through `selectors`, which extract parts of the state in a structured way.

This separation of concerns guarantees predictability, scalability and ease of testing. The **NgRX implementation in the functional structure** of this POC is based on the use of:

- A central store: A `counterReducer` is defined that responds to actions such as `increment`, `decrement` and `reset`.
- Use of standalone components:
  - `CounterDisplay`: shows the current value of the counter.
  - `IncrementButton`, `DecrementButton`, `ResetButton`: modify the state in isolation.
  - `ChartLine`, `ChartBar`: render the evolution of the state over time.
- Use of _signals_: NgRx's `selectSignal()` is used to bind the global state to the automatic re-rendering of the chart components.
