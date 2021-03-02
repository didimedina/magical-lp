import React from 'react';

const Sunday = () => {

    return (
        <div className="DAY-EVENTS-CONTAINER grid grid-rows-40 relative h-80vh mx-1">

            <div className="EVENT-CONTAINER bg-transparent row-span-1"></div>
            
            <div className="EVENT-CONTAINER bg-cal-blue row-span-5">
                <div className="EVENT-TITLE">Meeting with Jeff</div>
            </div>
            
            <div className="EVENT-CONTAINER bg-cal-yellow row-span-2">
                <div className="EVENT-TITLE">Stand Up</div>
            </div>

            <div className="EVENT-CONTAINER bg-cal-blue row-span-4">
                <div className="EVENT-TITLE">First interview with Shai</div>
            </div>

            <div className="EVENT-CONTAINER bg-cal-blue row-span-4">
                <div className="EVENT-TITLE">1:1 with Jane</div>
            </div>
            
            <div className="EVENT-CONTAINER bg-gray-800 row-span-4">
                <div className="EVENT-TITLE">Lunch</div>
            </div>


            <div className="EVENT-CONTAINER bg-cal-blue row-span-4">
                <div className="EVENT-TITLE">Design Review with Tim</div>
            </div>            

            <div className="EVENT-CONTAINER bg-cal-blue row-span-4">
                <div className="EVENT-TITLE">Status Update with Jen</div>
            </div>            
      
            <div className="EVENT-CONTAINER bg-cal-blue row-span-8">
                <div className="EVENT-TITLE">Hold for client meetings</div>
            </div>            

            <div className="EVENT-CONTAINER bg-gray-800 row-span-3">
                <div className="EVENT-TITLE">🚌 Commute home</div>
            </div>            
                                          
        
        </div>
    );
}

export default Sunday;