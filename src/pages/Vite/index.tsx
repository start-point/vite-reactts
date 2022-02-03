import * as React from 'react';
interface IViteProps {}

const Vite: React.FunctionComponent<IViteProps> = (props) => {
  console.log(1222, props);

  return (
    <>
      <p>hello word</p>
    </>
  );
};

export default Vite;
