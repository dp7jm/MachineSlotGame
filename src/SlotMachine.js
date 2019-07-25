import React from 'react';

class SlotMachine extends React.Component {
    render() {
        const randomNumber = Math.floor(Math.random() * 3);
        const slotSigns = ["x" , "y" , "z"];
        return (
            <div>              
              
                {slotSigns[randomNumber]}
                
            </div>

        );
    }
}

export default SlotMachine;