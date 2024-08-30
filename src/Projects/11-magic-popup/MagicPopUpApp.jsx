import React, { useState, useEffect } from 'react';
import PopUpComp from '../../Components/PopUpComp';
import Buttons from '../../Components/Buttons';
import Title from '../../Components/Title';

function MagicPopUpApp() {
    const [trigger, setTrigger] = useState(false);
    const [timeTrigger, setTimeTrigger] = useState(false);

    const triggerPopup = () => {
        console.log("Trigger popup");
        setTrigger(true);
    };

    useEffect(() => {
       
         setTimeout(() => {
            setTimeTrigger(true);
        }, 3000);


        
    }, []); 

    return (
        <div className='text-center'>
            <Title text={"Click for popup or wait for 3 seconds"} />
            <Buttons btnclass={"btn-primary"} onClick={triggerPopup} />

            {trigger && (
                <PopUpComp
                    handleClose={() => setTrigger(false)}
                    trigger={trigger}
                    type={"alert-info"}
                    text={"This popup was triggered by a button"}
                    title={"Triggered Popup"}
                />
            )}

            {timeTrigger && (
                <PopUpComp
                    handleClose={() => setTimeTrigger(false)}
                    trigger={timeTrigger}
                    type={"danger-info"}
                    text={"This popup was triggered by a delay"}
                    title={"Time Triggered Popup"}
                />
            )}
        </div>
    );
}

export default MagicPopUpApp;
