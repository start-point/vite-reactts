import { SubscriptionAPI } from 'dva';
import { RouteComponentProps } from 'dva/router';
import React from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

import routes from '@/router';
interface Props extends RouteComponentProps {}
const App = (props: Props & SubscriptionAPI) => {
  console.log('props:', props);

  return <HashRouter>{renderRoutes(routes)}</HashRouter>;
};
export default App;
