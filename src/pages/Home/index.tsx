import { connect } from 'dva';
import * as React from 'react';

export interface IHomeProps {
  history: any;
}

const Home = (props: IHomeProps) => {
  console.log(props, 'props');

  return <button>点我</button>;
};

export default connect(({ vite }: { vite: string }) => vite)(Home);
