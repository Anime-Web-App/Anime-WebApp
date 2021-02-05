import React from 'react';
import TopSlider from './Component/TopSlider';
import './Static/TopRated.css';

function TopRated(props) {
    return (
        <div className="container">
            <h1 className="Top_Anime">Top 5 Anime</h1>
            <TopSlider />
        </div>
    );
}

export default TopRated;