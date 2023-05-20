import React, { useState } from "react";
import ListContext from "./ListContext";

const ListProvider = (props) => {
  const [medicines, setMedicines] = useState([]);
  const addMedicine = (newMedicine) => {
    setMedicines((prevMedicines) => [...prevMedicines, newMedicine]);
  };

  const removeMedicine = () => {};

  const listContext = {
    medicines: medicines,
    addMedicine: addMedicine,
    removeMedicine: removeMedicine,
  };

  return (
    <ListContext.Provider value={listContext}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListProvider;
