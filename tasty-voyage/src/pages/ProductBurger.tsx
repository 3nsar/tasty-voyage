import React from 'react'
import './ProductBurger.scss';
import bowl from "../images/food/bowl.jpg"

const ProductBurger = () => {
  return (
    <div className='product-burger-container'>
        <div className="product-burger-text">
            <ul>
                <li>SMOKEY</li>
                <li>OPEN</li>
                <li>JAJA</li>
            </ul>
            <h1>CHICKEN<br />TERIYKAI</h1>
                <p>Tender delicious juicy protein pieces coated in a smokey BBQ glaze. Perfect for those with dietary restrictions, our pieces contain no allergens such as dairy, gluten, soy, and nuts. Our versatile Eat Curious pieces are perfect for a variety of culinary applications including pizza toppings, pies, salad bowls, stir-fry, pasta dishes, curries and more!</p>            
           <button>ENQUIRE NOW </button>
        </div>
        <div className="product-burger-image">
            <img src={bowl} alt="ee" />
        </div>
    </div>
  )
}

export default ProductBurger