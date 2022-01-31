import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onSetItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  const [addItem, setItem] = useState({})

  function onAddItem(){
    
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

  console.log(search)

  return (
    <div className="ShoppingList">
      <ItemForm />
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
