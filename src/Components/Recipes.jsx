import React from 'react';
import Button from './Button';
import '../App.css'; // CSS file for styling



const Recipes = () => {
  const recipes = [
    {
      imgSrc: '/recipes/01.png',
      title: 'Candle of the Month',
      link: '#',
    },
    {
      imgSrc: '/recipes/02.png',
      title: 'How to Care for your Candles',
      link: '#',
    },
    {
      imgSrc: '/recipes/03.png',
      title: 'The Candle Club',
      link: '#',
    },
  ];

  return (
    <div className="recipes-section">
      <div className="recipes-heading">
        <h1>BLOGS</h1>
        <Button />
      </div>

      
      <section className="recipes">
        <div className="recipe-container">
          {recipes.map((recipe, index) => (
            <div key={index} className="article">
              <img src={recipe.imgSrc} alt="recipes" />
              
              <div className="recipe-descrp">
                <p className="recipe-title">{recipe.title}</p>
                <p><a href={recipe.link} className="recipe-link">READ MORE</a></p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default Recipes;
