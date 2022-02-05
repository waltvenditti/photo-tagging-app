import React from 'react';

const ClickMenu = (props) => {
    const divStyle = {
        display: props.display,
        width: props.width
    }
    return (
        <div className="ClickMenu"
        style={
            divStyle
        }>
            <button className="ClickMenuBtn">GLaDOS</button>
            <button className="ClickMenuBtn">SCP-173</button>
            <button className="ClickMenuBtn">Judge Dredd</button>
        </div>
    )
}

export default ClickMenu;

/*
            <div>GLaDOS</div>
            <div>SCP-173</div>
            <div>Jude Dredd</div>

*/