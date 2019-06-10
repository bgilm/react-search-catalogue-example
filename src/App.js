import React, { useState, useEffect } from "react";
import AppStyle from "./App.style";
import { SearchBar, GlobalStyles, Item } from "./Components";
import json from "./static/products.json";

function App() {
  const [searchText, setSearchText] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const dummyFetch = async query => json;

  const filterResults = (results, query) => {
    return results.filter(r => {
      const regex = new RegExp(query, "i");
      const { code, description } = r;
      return code.search(regex) >= 0 || description.search(regex) >= 0;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await dummyFetch(searchText);
      if (searchText.length > 0) {
        const arr = filterResults(result.products, searchText);
        setFilteredArray(arr);
      } else {
        setFilteredArray(result.products);
      }
    };
    fetchData();
  }, [searchText]);

  return (
    <AppStyle.Container>
      <GlobalStyles />
      <AppStyle.Header>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
      </AppStyle.Header>
      <AppStyle.Body>
        <AppStyle.Title>Products</AppStyle.Title>
        <AppStyle.List>
          {filteredArray.map(item => (
            <Item
              key={item.code}
              title={item.code}
              description={item.description}
              img={item.image}
            />
          ))}
        </AppStyle.List>
      </AppStyle.Body>
    </AppStyle.Container>
  );
}

export default App;
