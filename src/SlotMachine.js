import React from 'react';
import './SlotMachine.css';

const randomNumber = () => {
    return Math.floor(Math.random() * 3);
};
class SlotMachine extends React.Component {
    render() {
        
        const slotSigns = ["x" , "y" , "z"];
        return (
            <div>              
            <div className = "Machine-Row">
                <div>{slotSigns[randomNumber()]}</div> 
                <div>{slotSigns[randomNumber()]}</div> 
                <div>{slotSigns[randomNumber()]}</div>
            </div>

                {this.props.s1}
                
            </div>

        );
    }
}

export default SlotMachine;