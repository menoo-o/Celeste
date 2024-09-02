// NewArrivals.jsx
import React from 'react';
import CarouselComponent from './CarouselComponent';
import Button from './Button';

const newArrivals = [
    { imgSrc: '/new-items/bella.png', title: 'BellaTrix' },
    { imgSrc: '/new-items/flame.png', title: 'Aurora Flame' },
    { imgSrc: '/new-items/luna.png', title: 'Luna Night' },
    { imgSrc: '/new-items/lyra.png', title: "Lyra's Light" },
    { imgSrc: '/new-items/pulse.png', title: "Polaris Pulse " },
    
    // Add more items
];

const NewArrivals = () => {
    return (
        <section>
            <div className="heading-items">
                <h1>NEW ARRIVALS</h1>
                <Button />
            </div>
            <CarouselComponent items={newArrivals} />
        </section>
    );
};

export default NewArrivals;
