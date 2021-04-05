import React from 'react';

const Monday = () => {

    return (
        <div className="DAY-EVENTS-CONTAINER grid grid-rows-40 relative h-80vh mx-1">

            
            <div className="EVENT-CONTAINER bg-gray-800 row-span-4">
                <div className="EVENT-TITLE">💪 Exercise</div>
            </div>
            
            <div className="EVENT-CONTAINER bg-gray-800 row-span-2">
                <div className="EVENT-TITLE">🚌 Commute</div>
            </div>   

            <div className="EVENT-CONTAINER bg-cal-yellow row-span-2">
                <div className="EVENT-TITLE">💭 Stand Up</div>
            </div>           

            <div className="EVENT-CONTAINER bg-cal-blue row-span-4">
                <div className="EVENT-TITLE">Interview with Dina</div>
            </div>

            <div className="EVENT-CONTAINER bg-cal-green row-span-4">
                <div className="EVENT-TITLE">💭 Thinking Time</div>
            </div>
            
            <div className="EVENT-CONTAINER bg-gray-800 row-span-3">
                <div className="EVENT-TITLE">Lunch</div>
            </div>

            <div className="EVENT-CONTAINER bg-cal-yellow row-span-3">
                <div className="EVENT-TITLE">📭 Inbox Zero</div>
            </div>   

            <div className="EVENT-CONTAINER bg-gray-800 row-span-2">
                <div className="EVENT-TITLE">⛩ Buffer Time</div>
            </div>

            <div className="EVENT-CONTAINER bg-cal-blue row-span-4">
                <div className="EVENT-TITLE">Fiancials with Adam</div>
            </div>            

            <div className="EVENT-CONTAINER bg-cal-green row-span-8">
                <div className="EVENT-TITLE">👨🏻‍💻 Investor Deck</div>
            </div>                         

            <div className="EVENT-CONTAINER bg-gray-800 row-span-2">
                <div className="EVENT-TITLE">🚌 Commute</div>
            </div>            
                                          
        
        </div>
    );
}

export default Monday;