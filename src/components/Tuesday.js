import React from 'react';

const Tuesday = () => {

    return (
        <div className="DAY-EVENTS-CONTAINER grid grid-rows-40 relative h-80vh mx-1">
            
            <div className="EVENT-CONTAINER bg-cal-green row-span-6">
                <div className="EVENT-TITLE">👨🏻‍💻 Investor Deck</div>
            </div>

            <div className="EVENT-CONTAINER bg-cal-yellow row-span-2">
                <div className="EVENT-TITLE">Stand Up</div>
            </div>  
            
            <div className="EVENT-CONTAINER bg-cal-yellow row-span-2">
                <div className="EVENT-TITLE">📭 Inbox Zero</div>
            </div>          

            <div className="EVENT-CONTAINER bg-cal-blue row-span-6">
                <div className="EVENT-TITLE">Design Review Landing Page</div>
            </div>
            
            <div className="EVENT-CONTAINER bg-gray-800 row-span-4">
                <div className="EVENT-TITLE">Lunch with Demi</div>
            </div>

            <div className="EVENT-CONTAINER bg-gray-800 row-span-4">
                <div className="EVENT-TITLE">⛩ Buffer Time</div>
            </div>

            <div className="EVENT-CONTAINER bg-cal-green row-span-6">
                <div className="EVENT-TITLE">👨🏻‍💻 Investor Deck</div>
            </div>          

            <div className="EVENT-CONTAINER bg-cal-blue row-span-8">
                <div className="EVENT-TITLE">Board Meeting Prep Brainstorm</div>
            </div>                                    
                                          
        </div>
    );
}

export default Tuesday;