import Link from 'next/link';
import {
  setDoc,
  collection,
  getDocs,
  query,
  limit,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase.config';
import { ItemForm } from '../../component/item-form';

const Home = () => {
  const [item, setItem] = useState([]);
  const [title, setTitle] = useState('');

  const pageRef = collection(db, 'item');

  useEffect(() => {
    let unsubscribe: any;

    const fetchItem = async () => {
      const data: any = [];

      unsubscribe = await getDocs(query(pageRef, limit(10)));
      unsubscribe.forEach((item: any) => {
        data.push(item.data());
      });

      setItem(data);
    };

    fetchItem();
  }, []);

  const addToDatabase = async (values: any) => {
    const { title } = values;

    if (title) {
      // edit
      try {
        await setDoc(doc(pageRef, title), values, { merge: true });
      } catch (error) {
        console.log(error);
      }
    } else {
      // add
      try {
        await setDoc(doc(pageRef, title), values);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const edit = (title: string) => {
    setTitle(title);
  };

  const remove = (title: string) => {
    deleteDoc(doc(pageRef, title));
  };

  console.log(item, 'caca');

  const editMe = item.filter((art: any) => art.title === title)[0] || {};

  return (
    <div>
      <h1>Article page</h1>
      <p>Create some articles</p>

      <ItemForm submit={addToDatabase} editMe={editMe} />

      {item.map(({ title }, key) => {
        return (
          <div key={key}>
            <div>{title}</div>
            <button type="button" onClick={() => edit(title || '')}>
              &#x270E;
            </button>
            <button type="button" onClick={() => remove(title)}>
              &times;
            </button>
          </div>
        );
      })}

      <Link href="/">Go back home</Link>
    </div>
  );
};

export default Home;
