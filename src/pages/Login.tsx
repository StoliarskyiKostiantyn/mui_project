import axios from 'axios';
import {useEffect} from 'react';

async function fetchMovie() {
  const response = await axios(
    `https://www.wangchenga.cn/xcx/?id=AKSJ00002471`,
  );
  console.log(response);
}

export const Login = () => {
  useEffect(() => {
    const res = fetchMovie();
    console.log(res);
  }, []);

  return (
    <>
      <p>HERE GONNA BE MAIN CONTENT OF HOME PAGE</p>
    </>
  );
};
