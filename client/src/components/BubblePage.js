import React, { useState, useEffect } from "react";
import axios from "axios";
import { AxiosWithAuth } from "../utils/AxiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const getColors = () => {
    AxiosWithAuth()
      .get("/colors")
      .then(res => {
        setColorList(res.data);
      })
      .catch(err => console.log("Get Error: ", err));
  };

  useEffect(() => {
    getColors();
  }, []);

  return (
    <>
      <ColorList
        colors={colorList}
        updateColors={setColorList}
        getColors={getColors}
      />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
