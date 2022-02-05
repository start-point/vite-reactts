import { ConfigProvider } from 'antd';
import React from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

const Layout: React.FC<RouteConfigComponentProps> = React.memo(function Layout(props) {
  // const history = useHistory()
  const { route } = props;
  // console.log(" layout", props);
  return <ConfigProvider>{renderRoutes(route?.routes)}</ConfigProvider>;
});

export const MainLayout: React.FC<RouteConfigComponentProps> = React.memo(
  function Layout(props: { route: any }) {
    // const history = useHistory()
    const { route } = props;
    return (
      <div className="basic-layout flex-row">
        <div className="left" style={{ flex: '0 0 240px' }}>
          left
        </div>
        <div className="Fill right-container">{renderRoutes(route?.routes)}</div>
      </div>
    );
  },
);

export default Layout;
