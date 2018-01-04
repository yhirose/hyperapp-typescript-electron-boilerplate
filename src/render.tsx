import { h, app, ActionsType, View } from "hyperapp";
const devtools = require("hyperapp-redux-devtools");

export interface State {
  count: number;
}

export interface Actions {
  down(): Partial<State>;
  up(): Partial<State>;
}

export const counterActions: ActionsType<State, Actions> = {
  down: () => (state: State) => ({ count: state.count - 1 }),
  up: () => (state: State) => ({ count: state.count + 1 })
};

const initialState: State = {
  count: 0
};

const view: View<State, Actions> = (state, actions) => {
  return (
    <div>
      <h1>{state.count}</h1>
      <button onclick={actions.down}>-</button>
      <button onclick={actions.up}>+</button>
    </div>
  );
};

(window as any).main = devtools(app)(
  initialState,
  counterActions,
  view,
  document.body
);
