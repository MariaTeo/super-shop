import { LoginSignUp } from '../../component';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from 'firebase/auth';
import { auth } from '../../firebase.config';

const Home = () => {
  const addToDatabase = async (values: any) => {
    const { email, password } = values;
    if (email) {
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        return { user };
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <h1>Sign up page</h1>
      <p>Create your account</p>
      <LoginSignUp submit={addToDatabase} />
    </div>
  );
};

export default Home;
