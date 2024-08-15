import React from 'react';
import BarChart from './BarChart';
import BubbleChart from './BubbleChart';
import SalesCard from './SalesCard'; // Import the SalesCard component

function Dashhome() {
    return (
        <div className="wrap homebarFont">
            <div className="sales-cards">
                <SalesCard />
                <SalesCard />
                <SalesCard />
                <SalesCard />
            </div>

            <h4 className='my-md-4'>Sales Performance (Horizontal Bar Chart)</h4>
            <BarChart />

            <h4 className='my-md-5'>Sales Channels Distribution (Bubble Chart)</h4>
            <BubbleChart />
        </div>
    );
}

export default Dashhome;
