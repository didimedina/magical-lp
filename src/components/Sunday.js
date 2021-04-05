import React from 'react';

const Sunday = () => {

    return (
        <div className="DAY-EVENTS-CONTAINER grid grid-rows-40 relative h-80vh mx-1">

            {/* <div className="EVENT-CONTAINER bg-transparent row-span-1"></div> */}

            <div className="EVENT-CONTAINER bg-transparent row-span-12"></div>
            <div className="EVENT-CONTAINER bg-transparent row-span-10"></div>
            
            <div className="EVENT-CONTAINER bg-cal-yellow row-span-12">
                <div className="EVENT-TITLE">📆 Review and Plan Week</div>
            </div>                                  
        
        </div>
    );
}

export default Sunday;