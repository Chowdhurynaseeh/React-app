import React from 'react';

const CardComponent = (props) => {
    console.log(props);
    return (
        <div className = "ui card">
            
            <div className="card">
                <div className="header">
                    Alex
                </div>
                <div className="description">
                    {props.children}
                </div>
                <div className="ui bottom attached button">
                    <i className="add icon"></i> 
                    Add friend
                </div>
            </div>
        </div>
    );
}

export default CardComponent;