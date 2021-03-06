export interface ReduxAction {
  type: string;
  [propName: string]: any;
}

export interface ReduxSagaEffects {
  put: any;
  call: any;
  select: any;
}

export interface DvaModelReducer {
  // eslint-disable-next-line no-unused-vars
  (preState: object, action: ReduxAction): object;
}

export interface DvaModelReducers {
  [reducerName: string]: DvaModelReducer;
}

export interface DvaModelEffectFn {
  // eslint-disable-next-line no-unused-vars
  (action: ReduxAction, sagaEffects: ReduxSagaEffects): any;
}

export interface ReduxSagaTaker {
  type: string;
  [propsName: string]: any;
}
// problem
export interface DvaModelEffectWithTaker
  extends Array<ReduxSagaTaker | DvaModelEffectFn> {
  [index: number]: ReduxSagaTaker | DvaModelEffectFn;
}

export type DvaModelEffect = DvaModelEffectFn | DvaModelEffectWithTaker;

export interface DvaModelEffects {
  [effectName: string]: DvaModelEffect;
}

export interface DvaModel<T = any> {
  namespace: string;
  state?: T;
  reducers?: DvaModelReducers;
  effects?: DvaModelEffects;
  subscriptions?: object;
}

export interface DvaLoading {
  global: boolean;
  models: any;
  effects: any;
}
