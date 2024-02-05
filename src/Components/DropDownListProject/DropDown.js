import React, { useState } from "react";

const DropDown = () => {
  // hooks
  const [categories, setCategories] = useState("");
  const [subCategories, setSubCategories] = useState("");
  const [isCategoryEnabled, setIscategoryEnabled] = useState(false);

  // array for categoris

  const category = ["Fruits", "Vegetables", "Dairy"];

  const subCategory = {
    Fruits: [
      "Apple",
      "Banana",
      "Orange",
      "Strawberry",
      "Mango",
      "Pineapple",
      "Grapes",
      "Watermelon",
      "Kiwi",
      "Peach",
      "Pear",
      "Cherry",
      "Avocado",
      "Lemon",
      "Blueberry",
    ],

    Vegetables: [
      "Carrot",
      "Tomato",
      "Potato",
      "Spinach",
      "Broccoli",
      "Bell pepper",
      "Cucumber",
      "Lettuce",
      "Onion",
      "Garlic",
    ],
    Dairy: [
      "Milk",
      "Cheese",
      "Yogurt",
      "Butter",
      "Cream",
      "Cottage cheese",
      "Sour cream",
      "Ice cream",
      "Ghee",
      "Paneer",
    ],
  };

  const handleCategoryChange = (category) => {
    setCategories(category);
    setSubCategories("");
    setIscategoryEnabled(true);
  };

  return (
    <>
      <label htmlFor="category">Select Category</label>

      <select
        name="category"
        id="category"
        onChange={(e) => handleCategoryChange(e.target.value)}
        value={categories}
      >
        <option value="" disabled>
          Select
        </option>

        {category.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>

      <br />

      <label htmlFor="subcategory">Select subCategory</label>

      <select
        name="subcategory"
        id="subcategory"
        onChange={(e) => setSubCategories(e.target.value)}
        value={subCategories}
        disabled={!isCategoryEnabled}
      >
        <option value="">Select</option>

        {isCategoryEnabled &&
          subCategory[categories].map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
      </select>
    </>
  );
};

export default DropDown;
