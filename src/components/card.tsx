import './card.css'
    import React from 'react';

    interface CardProps {
    name: string;
    }

    const Card: React.FC<CardProps> = ({ name }) => {
    return (
        <div className="card">
        <h3 className='titulo'>{name}</h3>
        <img className='img' src="https://w7.pngwing.com/pngs/1014/126/png-transparent-pokeball-illustration-pokemon-go-pokeball-trademark-logo-nintendo-3ds-thumbnail.png" alt="" />
        </div>
    );
    };

    export default Card;
