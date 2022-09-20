import React from "react";

function ItemForm({ name, onNameChange, category, onNewCategoryChange, onItemFormSubmit }) {

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={onNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={onNewCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
