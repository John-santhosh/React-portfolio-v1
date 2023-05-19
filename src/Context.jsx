import { createContext, useContext, useEffect, useState } from "react";
import Airtable from "airtable";

const GlobalContext = createContext();

// initialize airTable
const airTable = new Airtable({
  apiKey: import.meta.env.VITE_AIRTABLE_API_KEY, //api  key
}).base(import.meta.env.VITE_AIRTABLE_BASE); //base key

const AppContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [verticalNav, setVerticalNav] = useState(false);

  const fetchData = () => {
    airTable(import.meta.env.VITE_AIRTABLE_TABLE)
      .select({ view: "Grid view" })
      .eachPage((records) => {
        const product = records.map((item) => {
          return item.fields;
        });

        setProducts(product);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider value={{ products, verticalNav, setVerticalNav }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
// custom hook
export const useGlobalContext = () => useContext(GlobalContext);
