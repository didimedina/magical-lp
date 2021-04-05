import React from 'react';

const Friday = () => {

    return (
        <div className="DAY-EVENTS-CONTAINER grid grid-rows-40 relative h-80vh mx-1">

            
            <div className="EVENT-CONTAINER bg-gray-800 row-span-2">
                <div className="EVENT-TITLE">🚌 Commute</div>
            </div>   


            <div className="EVENT-CONTAINER bg-cal-blue row-span-4">
                <div className="EVENT-TITLE">Client Meetings</div>
            </div>

            <div className="EVENT-CONTAINER bg-cal-yellow my-1 row-span-2">
                <div className="EVENT-TITLE">💭 Stand Up</div>
            </div>
            
            <div className="EVENT-CONTAINER bg-cal-blue row-span-4">
                <div className="EVENT-TITLE">Executive Team: Review Budget</div>
            </div>

            <div className="EVENT-CONTAINER bg-cal-blue row-span-5">
                <div className="EVENT-TITLE">Kickoff meeting re:new campaign</div>
            </div>           

            <div className="EVENT-CONTAINER bg-cal-purple row-span-4">
                <div className="EVENT-TITLE">Call with Ben's Teacher</div>
            </div>

            <div className="EVENT-CONTAINER bg-gray-800 row-span-4">
                <div className="EVENT-TITLE">Lunch</div>
            </div>

            <div className="EVENT-CONTAINER bg-cal-purple row-span-5">
                <div className="EVENT-TITLE">🏝 Plan family vacation</div>
            </div> 

            <div className="EVENT-CONTAINER bg-gray-800 row-span-2">
                <div className="EVENT-TITLE">🚌 Commute</div>
            </div> 
            
            <div className="EVENT-CONTAINER bg-cal-purple row-span-8">
                <div className="EVENT-TITLE">Movie Night</div>
            </div>              
                                             
        </div>
    );
}

export default Friday;