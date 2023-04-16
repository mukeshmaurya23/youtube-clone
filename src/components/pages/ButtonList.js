import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="React" />
      <Button name="Angular" />
      <Button name="Trending" />
      <Button name="Svelte" />
      <Button name="Ember" />
      <Button name="Gaming" />
      <Button name="Music" />
      <Button name="Sports" />
      <Button name="Dance" />
    </div>
  );
};

export default ButtonList;
