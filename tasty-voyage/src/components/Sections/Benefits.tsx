import React from 'react';
import './Benefits.scss';
import grid1 from "../../images/people/grid1.svg"

// Define the type for the column data
interface ColumnData {
  imageSrc: string;
  title: string;
  text: string;
}

const Benefits = () => {
  // Sample data for demonstration
  const columnData: ColumnData[] = [
    { imageSrc: grid1, title: "PLANT BASED",text: 'Your Text 1' },
    { imageSrc: grid1, title: "REAL INGREDIENTS",text: 'Your Text 2' },
    { imageSrc: grid1, title: "UNREAL TEXTURE",text: 'Your Text 3' },
    { imageSrc: grid1, title: "BLAND IS BANNED",text: 'Your Text 4' },
  ];

  return (
    <div className="benefits-container">
      {columnData.map((item, index) => (
        <div key={index} className="column">
          <img src={item.imageSrc} alt={`Image ${index + 1}`}/>
          <h1>{item.title}</h1>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
