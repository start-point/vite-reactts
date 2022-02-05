import { connect } from 'dva';
import * as React from 'react';

export interface IHomeProps {
  history: any;
}

const Home = (props: IHomeProps) => {
  console.log(props, 'props');

  const clickAction = () => {
    const { history } = props;
    history.push('/vite');
  };

  return <button onClick={clickAction}>点我进入vite页面</button>;
};

export default connect(({ vite }: { vite: string }) => vite)(Home);
