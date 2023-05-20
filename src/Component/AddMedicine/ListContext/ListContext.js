import React, { createContext } from "react";

const ListContext = React.createContext({
  medicines: [],
  addMedicine: (item) => {},
  removeMedicine: (item) => {},
});

export default ListContext;
