import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items, onItemFormSubmit, onNameChange, onNewCategoryChange }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && search !== ""){
      return item.name.includes(search);
    } else if (selectedCategory !== "All" && search === "") {
      return item.category === selectedCategory;
    } else if (selectedCategory !== "All" && search !== "") {
      return item.name.includes(search) && item.category === selectedCategory;
    } else {
      return true;
    }
  });

  function onCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  function onSearchChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} onNameChange={onNameChange} onNewCategoryChange={onNewCategoryChange} />
      <Filter onCategoryChange={onCategoryChange} onSearchChange={onSearchChange} search={search} selectedCategory={selectedCategory}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
