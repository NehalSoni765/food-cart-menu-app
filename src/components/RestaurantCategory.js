import React from "react";
import MenuList from "./MenuList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummyData }) => {
  const handleClick = () => {
    setShowIndex(); //callback function ()=>setshowIndex(index)
  };

  return (
    <div className="w-6/12 mx-auto bg-gray-50 shadow-md my-4 p-2 ">
      {/* accordian header */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold px-2">{`${data.title} (${data?.itemCards?.length})`}</span>
        <span>{showItems ? "\u{1F53A}" : "\u{1F53B}"}</span>
      </div>
      {/* accordian body */}
      {showItems && data?.itemCards && <MenuList itemCards={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
