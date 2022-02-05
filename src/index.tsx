import dva from 'dva';
import React from 'react';

import App from '@/layout/layout';
import models from '@/models';

//@ts-ignore
let test = dva.default || dva;
const app = test();

models.map((model: any) => {
  app.model(model);
});

app.router((obj: any) => (
  <App
    history={obj.history}
    match={obj.match}
    location={obj.location}
    getState={obj.app._store.getState}
    dispatch={obj.app._store.dispatch}
  />
));
app.start('#root');
