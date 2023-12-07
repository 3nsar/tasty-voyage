import React from 'react'
import './ProductBurger.scss';
import burger from "../images/food/burger.jpg"
import Accordian from '../components/Accordian/Accordian';

const ProductBurger = () => {

    const accordianData= [
        {
            "title":"INGREDIENTS",
            "content": 
            `Water, Textured Vegetable Protein (28%) (Pea Protein Concentrate, Salt).`
        },
        {
            "title":"STORAGE",
            "content": 
            `Keep frozen at -18°C or cooler. Important: If food has thawed, do not refreeze.`
        },
        {
            "title":"COOKING INSTRUCTIONS",
            "content": 
            `Cooking Guidelines from Frozen: Remove all packaging. Hob: Place a small amount of cooking oil into pan. Once oil is hot add mince to pan and fry over a medium heat for 3-4 minutes. Cooking times may vary. Cook throughout to a minimum temperature of 75°C for 30 seconds or apply national standards.`
        },

    ]


  return (
    <div className='product-burger-container'>
        <div className="product-burger-text">
            <ul>
                <li>SMOKEY</li>
                <li>OPEN</li>
                <li>JAJA</li>
            </ul>
            <h1>SPICEY<br />BURGER</h1>
              <p>Introducing our signature burger, made from plants and is allergen free! This mouth-watering Eat Curious burger is packed with flavour, a must for your next BBQ. Fancy being creative…simply grill, smash, and serve on a bun with your favorite toppings for an unforgettable smashed burger experience!</p>           
              <button>ENQUIRE NOW </button>
        </div>
        <div className="product-burger-image">
            <img src={burger} alt="ee" />
        </div>
        <div className="product-burger-faq">
            <Accordian sections={accordianData}/>
        </div>
    </div>
  )
}

export default ProductBurger