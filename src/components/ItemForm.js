import React from "react";
import { useState } from "react/cjs/react.development";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setItemName] = useState("")
  const [category, setItemCategory] = useState("Produce")
  
  function handleNewName(event){
    setItemName(event.target.value)
  }

  function handleNewCategory(event){
    setItemCategory(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    const newUserData = {
      id: uuid(),
      name,
      category
    }
    onItemFormSubmit(newUserData)
    console.log(newUserData)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNewName} value={name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleNewCategory} value={category}>
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
