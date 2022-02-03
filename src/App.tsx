import React, { Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { Loading } from '@/component/loading';
import type { IRoute } from '@/routes';
import { layoutRouteList } from '@/routes/utils';
const App = () => {
  console.log(layoutRouteList);

  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          {/* 根路径重定向 */}
          <Route exact path="/" component={() => <Redirect to="/manage" />}></Route>
          {layoutRouteList.map((route: IRoute) => (
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              component={
                route.component
                  ? route.component
                  : () => <Redirect to={route.redirect!} />
              }></Route>
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
