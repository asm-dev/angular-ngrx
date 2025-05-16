# Aplicación de contador con NgRX

POC para comprender mejor el uso de NgRX.

## Estructura

src/
└── app/
├── components/
│ ├── counter/
│ │ ├── counter-value/ → muestra el valor
│ │ ├── counter-increase/ → suma 5
│ │ ├── counter-decrease/ → resta 5
│ │ └── counter-reset/ → reinicia estado
│ └── chart/
│ ├── chart-line/
│ └── chart-bar/
└── state/
├── counter.actions.ts
├── counter.reducer.ts
└── counter.selectors.ts
