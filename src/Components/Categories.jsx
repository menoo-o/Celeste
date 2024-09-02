import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

const Categories = () => {
  return (
    <>
      <section className="collection categories">
        <div className="list">
          {/* Scented Candles */}
          <NavLink to="/shop?category=Grains%20%26%20Flour" className="image-container grains-cereals">
            <img src="/categories/6.png" alt="grains and flour" width="200" height="200" />
            <div>
              <p>Scented Candles</p>
            </div>
          </NavLink>

          {/* Stickers */}
          <NavLink to="/shop?category=Rice" className="image-container Rice">
            <img src="/#" alt="Stickers" width="200" height="200" />
            <div>
              <p>Stickers</p>
            </div>
          </NavLink>

          {/* Cards */}
          <NavLink to="/shop?category=Lentils" className="image-container lentils-beans">
            <img src="#" alt="Cards" width="200" height="200" />
            <div>
              <p>Cards</p>
            </div>
          </NavLink>



        </div>
      </section>
    </>
  );
};

export default Categories;
