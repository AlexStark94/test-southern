import React, { useContext, useEffect, useState } from 'react';
import { getItemFromLocalStorage, useLocalStorage } from '../../hooks/useLocalStorage';

export const DataContext = React.createContext({
  rover: 'CURIOSITY',
  photos: [],
  page: 1,
  setPhotos: () => {},
  setRover: (rover) => {},
  setPage: (page) => {},
});

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [photos, setPhotos] = useState();
  const currentRover = getItemFromLocalStorage('rover');
  const [rover, setRover] = useLocalStorage('rover', currentRover ?? 'CURIOSITY');
  const [page, setPage] = useState(1);

  console.log(rover)

  const value = {
    rover,
    setRover,
    photos,
    setPhotos,
    page,
    setPage
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}

