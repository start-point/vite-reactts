import { DvaModel } from '../types/dva';
interface StateTypes {}

const vite: DvaModel<StateTypes> = {
  namespace: 'vite',
  state: {},
  effects: {
    *user({ payload, callback }, { call, put }) {
      yield console.log(payload, callback, call, put);
    },
  },
  reducers: {},
};
export { vite };
