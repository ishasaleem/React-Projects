import React from 'react';
import Buttons from './Buttons';

function PopUpComp({ type, title,text ,handleClose,trigger}) {
    const popupContainerStyle = {
        position: "fixed", 
        top: 0,
        left: 0,
        width: "100vw", 
        height: "100vh",
        background: "rgba(0, 0, 0, 0.1)", 
        zIndex: 1000 
    };

    const popupStyle = {
        position: 'relative',
        margin: '40vh auto',
        width: '80%', 
        maxWidth: '600px', 
        backgroundColor: 'white', 
        padding: '20px',
        borderRadius: '10px',
        zIndex: 1001 
    };

    return trigger &&(
        
        <div style={popupContainerStyle}>
            <div className={type} style={popupStyle}>
                <div className='alert-close'>
                    <div className='d-flex flex-column'>
                        <h4 className='mb-1'>{title &&title}</h4>
                        <h4 className='mb-1'>{text && text} </h4>
                    <Buttons className={"btn-close"} text={"X"} onClick={() => handleClose(false)}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopUpComp;
