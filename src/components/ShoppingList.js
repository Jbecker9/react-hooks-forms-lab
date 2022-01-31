import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function handleSearchChange(event){
    const eTarget = event.target.value
    // console.log(eTarget)
    setSearch(eTarget)
  }

  function onItemFormSubmit(newItem){
    setItems([...items, newItem])
  }

  const filteredDisplayedItems = items
  .filter((item) => selectedCategory === "All" || item.category === selectedCategory)
  .filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase()))

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // console.log(search)

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange}
      onSearchChange={handleSearchChange}
      search={search} />
      <ul className="Items">
        {filteredDisplayedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
