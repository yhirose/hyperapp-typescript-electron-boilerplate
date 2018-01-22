import { h, app, ActionsType, View } from "hyperapp";
const devtools = require("hyperapp-redux-devtools");

interface CounterState {
  count: number;
}

interface CounterActions {
  down(): CounterState;
  up(): CounterState;
}

interface State {
  counter: CounterState;
}

interface Actions {
  counter: CounterActions;
}

export const main = devtools(app)(
  // State
  {
    counter: {
      count: 0
    }
  },
  // Actions
  {
    counter: {
      down: () => state => ({ count: state.count - 1 }),
      up: () => state => ({ count: state.count + 1 })
    }
  } as ActionsType<State, Actions>,
  // View
  ((state, actions) => {
    return (
      <div>
        <h1>{state.counter.count}</h1>
        <button onclick={actions.counter.down}>-</button>
        <button onclick={actions.counter.up}>+</button>
      </div>
    );
  }) as View<State, Actions>,
  // DOM Element
  document.body
);

(window as any).main = main;
