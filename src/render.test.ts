import { counterActions } from "./render";

test("counterActions.up", () => {
  expect(counterActions.up({ count: 0 })).toEqual({ count: 1 });
});
