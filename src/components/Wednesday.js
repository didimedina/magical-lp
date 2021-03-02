import React from 'react';

const Wednesday = () => {

    return (
        <div className="DAY-EVENTS-CONTAINER relative grid grid-rows-40 h-80vh mx-1">
            
            <div className="POINTER absolute z-20 top-0 h-0.5 w-11/10 -ml-1/20 bg-gray-800"></div>
            
            <div className="EVENT-CONTAINER bg-transparent row-span-2"></div>
            
            <div className="EVENT-CONTAINER bg-cal-blue my-1 row-span-2">
                <div className="EVENT-TITLE">💭 Stand Up</div>
            </div>
            
            <div className="EVENT-CONTAINER bg-cal-green row-span-12">
                <div className="EVENT-TITLE">👨🏻‍💻  Prep for Board Meeting</div>
            </div>
            
            <div className="EVENT-CONTAINER bg-cal-blue  row-span-4">
                <div className="EVENT-TITLE">👨🏼‍🎨 Design Review with Eng</div>
            </div>

            <div className="GAP-CONTAINER relative z-10 overflow-hidden bg-gray-200 row-span-1">
                <div className="GAP-FILL w-full h-full bg-cal-red"></div>
            </div>

            <div className="EVENT-CONTAINER bg-cal-red truncate row-span-4">
                <div className="EVENT-TITLE">📥 Inbox Zero</div>
            </div>
        
            <div className="EVENT-CONTAINER bg-cal-blue truncate row-span-2">
                <div className="EVENT-TITLE">John + Mary: OKRs Sync</div>
            </div>
        
            <div className="EVENT-CONTAINER bg-cal-blue truncate row-span-2">
                <div className="EVENT-TITLE">John + Tommy: Monthly</div>
            </div>
            
            <div className="EVENT-CONTAINER bg-cal-yellow truncate row-span-2">
                <div className="EVENT-TITLE">Pick up kids from school</div>
            </div>

            <div className="EVENT-CONTAINER bg-cal-green row-span-4">
                <div className="EVENT-TITLE">Deep Work Buffer</div>
            </div>  
                
            <div className="EVENT-CONTAINER bg-cal-red truncate row-span-2">
                <div className="EVENT-TITLE">Wrap Up Day</div>
            </div>                                            
        
        </div>
    );
}

export default Wednesday;