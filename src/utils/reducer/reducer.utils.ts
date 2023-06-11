import { AnyAction } from "redux";

/** Matchable types
 * extension of action creator reducer
 */
type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>["type"];
  match(action: AnyAction): action is ReturnType<AC>;
};

/** Overload function
 * the main idea is to extract
 * the type of the action which comes out
 * from actionCreator, we are using this to do double duty
 * so that actionCreator function can also match action inside reducer */
export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function){
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction){
      return action.type === type;
    }
  })
}

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

/** Overload function
 * its Object Oriented Feature in JS
 * where multiple function with the same names 
 * can have different implementation/parameters */ 
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;

export function createAction<T extends string>(
  type: T,
  payload: void // we use void since we're not passing any value
): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
