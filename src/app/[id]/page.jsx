"use client"
import React, { useEffect, useState } from 'react';
import styles from "/styles/styles.module.css"
import { useRatingContext } from '../context/theme';
const getUser = async (id) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return await res.json();
  } catch (e) {
    console.log("error", e);
    return null;
  }
}

const Deneme = ({ params }) => {
 
  const { getRating } = useRatingContext();

  const [data, setData] = useState(null);



  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUser(params.id);
      setData(userData);
    };

    fetchData();
  }, [params.id]);

  if (!data) {
    return <div>Loading...</div>;
  }
  const rate = getRating(params.id)
  return (
    <div className={styles.title2}>
      <div className={styles.detailContain}>
        <p className={styles.title}>{data.name}</p>
        <p>E-mail: {data.email}</p>
        <p>Website: {data.website}</p>
        <p>Addres: {data.address.street}, {data.address.suite}, {data.address.city}</p>
        <p>Number: {data.phone}</p>
        <p>Compony Name: {data.company.name}</p>
       <p>★ {rate}</p>
      </div>
    </div>
  );
}

export default Deneme;
