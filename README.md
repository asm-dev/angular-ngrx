# Aplicación de contador con NgRX

Este proyecto es una prueba de concepto (POC) desarrollada en Angular con el objetivo de explorar el funcionamiento de **NgRx**, la librería de gestión de estado basada en Redux adaptada para Angular. La aplicación implementa un contador global controlado por múltiples componentes, junto a la visualización dinámica de su evolución mediante gráficos interactivos.

## ¿Qué es NgRx y para qué se usa?

NgRx proporciona una arquitectura basada en flujos unidireccionales y gestión centralizada del estado, ideal para aplicaciones Angular de tamaño medio a grande. Está inspirado en Redux, y hace uso extensivo de `RxJS`, así como de nuevas capacidades de Angular como `signals` para acceder de forma más reactiva al estado.

Con NgRx:

- Se define una `store` global que mantiene el estado de la aplicación.
- El estado sólo puede modificarse mediante `actions`, las cuales son gestionadas por `reducers`.
- El acceso al estado se realiza a través de `selectors`, que extraen partes del estado de forma estructurada.

Esta separación de responsabilidades garantiza predictibilidad, escalabilidad y facilidad de testing.

## Estructura funcional

- **Store central**: Se define un `counterReducer` que responde a acciones como `increment`, `decrement` y `reset`.
- **Componentes**:
  - `CounterDisplay`: muestra el valor actual del contador.
  - `IncrementButton`, `DecrementButton`, `ResetButton`: modifican el estado de forma aislada.
  - `ChartLine`, `ChartBar`: renderizan la evolución del estado a lo largo del tiempo.
- **Signals**: Se utiliza `selectSignal()` de NgRx para vincular el estado global al re-renderizado automático de los componentes gráficos.
