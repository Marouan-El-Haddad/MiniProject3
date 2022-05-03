import { Menu } from "./menu";

import { Productlist } from "./productlist";
import React from "react";

export function Mainer() {
  const lis = ["cat", "dog"];

  return (
    <>
      {lis.map((el,pos) => (
        <Productlist key={pos} product={el} />
      ))}
      <h1>Who lives in my garage?</h1>

      
    </>
  );
}
