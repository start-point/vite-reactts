import * as React from 'react';

interface IViteProps {
  history: any;
}

const Vite: React.FunctionComponent<IViteProps> = (props) => {
  const clickAction = () => {
    const { history } = props;
    history.push('/');
  };
  return (
    <>
      <h1>我是vite页面</h1>
      <button onClick={clickAction}>点我进入home页面</button>
    </>
  );
};

export default Vite;
