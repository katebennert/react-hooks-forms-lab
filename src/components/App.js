import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import { v4 as uuid } from "uuid";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [items, setItems] = useState(itemData);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name,
      category
    }
    setItems([...items, newItem]);
  }

  function onNameChange(e) {
    setName(e.target.value);
  }

  function onNewCategoryChange(e) {
    setCategory(e.target.value);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onItemFormSubmit={handleFormSubmit} name={name} category={category} onNameChange={onNameChange} onNewCategoryChange={onNewCategoryChange} />
    </div>
  );
}

export default App;
