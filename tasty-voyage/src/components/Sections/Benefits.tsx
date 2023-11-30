import React from 'react';
import './Benefits.scss';
import grid1 from "../../images/people/grid1.svg"
import grid2 from "../../images/people/grid2.svg"
import grid3 from "../../images/people/grid3.svg"

// Define the type for the column data
interface ColumnData {
  imageSrc: string;
  title: string;
  text: string;
}

const Benefits = () => {
  // Sample data for demonstration
  const columnData: ColumnData[] = [
    { imageSrc: grid1, title: "PLANT BASED",text: 'Plant-protein yuminess, suitable for everyone' },
    { imageSrc: grid2, title: "REAL INGREDIENTS",text: 'If we don´t know exactly what an ingredient is, we don´t include it' },
    { imageSrc: grid3, title: "VERY HEALTHY",text: 'Our cuisine promotes both mental and physical well-being' },
  ];

  return (
    <div className="benefits-container">
      {columnData.map((item, index) => (
        <div key={index} className="column">
          <img src={item.imageSrc} alt={`Image ${index + 1}`}/>
          <h1>{item.title}</h1>
          <p className="column-text">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
