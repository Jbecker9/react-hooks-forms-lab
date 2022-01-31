import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, onSetItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  const [formData, setFormData] = useState([])
  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("")

  function handleNewName(event){
    setItemName(event.target.name.value)
  }

  function handleNewCategory(event){
    setItemCategory(event.target.category.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    const newUserData = {
      id: uuid(),
      name: itemName,
      category: itemCategory
    }
    const dataArray = [...items, newUserData]
    setFormData(dataArray)
    setItemName("")
    setItemCategory("")
  }

  function handleSearchChange(event){
    const eTarget = event.target.value
    // console.log(eTarget)
    setSearch(eTarget)
  }

  const filteredDisplayedItems = items.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase()))

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = filteredDisplayedItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  // console.log(search)

  return (
    <div className="ShoppingList">
      <ItemForm items={items} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}
      handleNewName={handleNewName}
      handleNewCategory={handleNewCategory}/>
      <Filter onCategoryChange={handleCategoryChange}
      onSearchChange={handleSearchChange}
      search={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
