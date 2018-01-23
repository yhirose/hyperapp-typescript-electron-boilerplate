import { h, app, ActionsType, View } from "hyperapp";
const isDev = require("electron-is-dev");

let App = app;

if (isDev) {
  document.write(
    '<script src="http://' +
      (location.host || "localhost").split(":")[0] +
      ':35729/livereload.js?snipver=1"></' +
      "script>"
  );

  const devtools = require("hyperapp-redux-devtools");
  App = devtools(app);
}

interface CounterState {
  count: number;
}

interface CounterActions {
  down(): CounterState;
  up(): CounterState;
}

interface State {
  isDev: boolean;
  counter: CounterState;
}

interface Actions {
  counter: CounterActions;
}

export const main = App(
  // State
  {
    isDev,
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
        <h1>[{state.isDev ? "Development" : "Productoin"}]</h1>
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
