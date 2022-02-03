import * as React from 'react';

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  console.log(props, 'home');

  return (
    <>
      <p>我是主页面</p>
    </>
  );
};

export default Home;
