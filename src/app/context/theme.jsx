'use client';

import { createContext, useContext, useState } from "react";
const RatingContext = createContext({});

export const RatingContextProvider = ({ children }) => {
  const [ratings, setRatings] = useState({});

  const addRating = (id, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [id]: rating
    }));
  };

  const getRating = (id) => {
    return ratings[id] || 0;
  };

  return (
    <RatingContext.Provider value={{ ratings, addRating, getRating }}>
      {children}
    </RatingContext.Provider>
  );
};

export const useRatingContext = () => useContext(RatingContext);