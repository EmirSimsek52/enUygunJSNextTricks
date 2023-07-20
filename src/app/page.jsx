"use client"

import styles from "/styles/styles.module.css"
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import { useRatingContext } from "./context/theme"
import Link from 'next/link';

const Page = () => {
 
  const { ratings, addRating, getRating } = useRatingContext();
  const [loader, setLoader] = useState(true);
  const [users, setUsers] = useState([]);
  const [keyword , setKeyword] = useState('')
  const [searchArray, setSearchArray] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setLoader(false);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleRating = (id, rating) => {
    addRating(id, rating);
  };

  const searchFunc = (e) => {
    e.key === "Enter" && keyword.length >= 3
    return keyword
  }

  useEffect(() => {
    const searchResults = users.filter((user) => user.name.toLowerCase().startsWith(keyword.toLowerCase()));
    setSearchArray(searchResults);
  }, [keyword, users]);

  const sortedUsers = [...users].sort((a, b) => getRating(b.id) - getRating(a.id));

  return (
    <div className="justify-center items-center m-16">
      <div>
        <input
          onKeyDown={searchFunc}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search'
          className={styles.search}
        />
      </div>
      <h2 className={styles.title}>User List</h2>
      {loader ? (
        <span>Yükleniyor...</span>
      ) : (
        <div className={styles.cardContainer}>
          {keyword && searchArray.length > 0 ? (
            searchArray.map((user) => (
              <div className={styles.card} key={user.id}>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{user.name}</h3>
                  <p className={styles.cardDescription}>{user.email}</p>
                  <p className={styles.cardDescription}>{user.website}</p>
                  <h1 className={styles.starScorer}>★ {getRating(user.id)}</h1>
                  <button
                    className={styles.buttonBoxs}
                    onClick={() => handleRating(user.id, getRating(user.id) + 1)}
                  >
                    ★
                  </button>
                  <Link href={`/${user.id}`}>Go Detail</Link>
                </div>
              </div>
            ))
          ) : (
            sortedUsers.map((user) => (
              <div className={styles.card} key={user.id}>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{user.name}</h3>
                  <p className={styles.cardDescription}>{user.email}</p>
                  <p className={styles.cardDescription}>{user.website}</p>
                  <h1 className={styles.starScorer}>★ {getRating(user.id)}</h1>
                  <button
                    className={styles.buttonBoxs}
                    onClick={() => handleRating(user.id, getRating(user.id) + 1)}
                  >
                    ★
                  </button>
                  <Link href={`/${user.id}`}>Go Detail</Link>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
