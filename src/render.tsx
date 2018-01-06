import { app, h } from "hyperapp";
const devtools = require("hyperapp-redux-devtools");

interface State {
  count: number;
}

interface Actions {
  down(): Partial<State>;
  up(): Partial<State>;
}

export const main = devtools(app)(
  {
    count: 0
  },
  {
    down: () => (state: State) => ({ count: state.count - 1 }),
    up: () => (state: State) => ({ count: state.count + 1 })
  },
  (state: State, actions: Actions) => {
    return (
      <div>
        <h1>{state.count}</h1>
        <button onclick={actions.down}>-</button>
        <button onclick={actions.up}>+</button>
      </div>
    );
  },
  document.body
);

(window as any).main = main;
