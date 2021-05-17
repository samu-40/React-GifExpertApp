import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";
// import PropTypes from "prop-types";

function GifExpertApp() {
  const [categories, setCatergories] = useState(["Ironman"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCatergories={setCatergories} />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
}

// GifExpertApp.propTypes = {};

export default GifExpertApp;
