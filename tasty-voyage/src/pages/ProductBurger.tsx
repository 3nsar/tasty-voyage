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
            `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Sed perspiciatis excepturi quod mollitia, commodi aliquid quidem 
            ipsum unde earum sint autem odit atque. Modi aut hic amet perferendis, id nihil?`
        },
        {
            "title":"COOKING INSTRUCTIONS",
            "content": 
            `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Sed perspiciatis excepturi quod mollitia, commodi aliquid quidem 
            ipsum unde earum sint autem odit atque. Modi aut hic amet perferendis, id nihil?`
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