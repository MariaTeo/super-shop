import { collection, getDocs, limit, query } from 'firebase/firestore';
import { NextPage } from 'next';
import Link from 'next/link';
import { db } from '../../firebase.config';

const Home: NextPage = ({ item }: any) => {
  console.log(item, ' ce e asta');
  return (
    <div>
      <h1>This is the dashboard where you will see the items upon creation</h1>

      {item.reverse().map(({ title }: any, key: any) => {
        return (
          <div key={key}>
            <h1>{title}</h1>
          </div>
        );
      })}

      <Link href="/">Go back home</Link>
    </div>
  );
};

export const getServerSideProps = async () => {
  const result = await getDocs(query(collection(db, 'item'), limit(10)));
  const item: any = [];

  result.forEach((doc) => {
    item.push(doc.data());
  });

  return { props: { item } };
};

export default Home;
