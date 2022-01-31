import React from "react";
import { useState } from "react/cjs/react.development";
import { v4 as uuid } from "uuid";

function ItemForm({items, handleSubmit}) {
  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("")

  function handleNewName(event){
    setItemName(event.target.name.value)
  }

  function handleNewCategory(event){
    setItemCategory(event.target.category.value)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNewName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleNewCategory}>
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
