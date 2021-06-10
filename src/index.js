import React from 'react';
import ReactDOM from 'react-dom';
import propic1 from './img/pic_1.jpg';
import propic2 from './img/pic_2.png';
import propic3 from './img/pic_3.jpeg';
import SingleComponent from './SingleComponent';

const App = () => {
    return (
        <div className='ui comments'>
            <SingleComponent 
                name='Alex' 
                propic = { propic1 } 
                date = 'today at 5:00 pm' 
                text='This is amazing' 
            /> 
            <SingleComponent 
                name='Babul' 
                propic = { propic2 } 
                date = 'yesterday at 3:00 pm' 
                text='wow, wonderful!!' 
            />
            <SingleComponent 
                name='Kabul' 
                propic = { propic3 } 
                date = 'today at 10:00 pm' 
                text='Awesome!!' 
            />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)