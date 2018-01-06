import { main } from "./render";

test("counterActions.up", () => {
  expect(main.up({ count: 0 })).toEqual({ count: 1 });
});
