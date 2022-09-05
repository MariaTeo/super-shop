import * as S from './main.style';
import Link from 'next/link';
import { auth } from '../../firebase.config';
import { LoginSignUp } from '../login-signup-form';

const Main = () => {
  return (
    <div>
      <h1>hello</h1>
      <h2>let`s begin having fun</h2>

      <LoginSignUp auth={auth} />

      <S.Flex>
        <Link href="/admin">Create articles</Link>
        <Link href="/dashboard">Go to dashboard</Link>
      </S.Flex>

      {/* <S.Flex>
        <label htmlFor="email">Type in your email</label>
        <input
          name="email"
          ref={emailRef}
          type="email"
          placeholder="Type in your email"
        />
      </S.Flex>
      <S.Flex>
        <label htmlFor="password">Type in your password</label>
        <input
          name="password"
          type="password"
          ref={passRef}
          placeholder="Type in your password"
        />
      </S.Flex> */}
    </div>
  );
};

export default Main;
