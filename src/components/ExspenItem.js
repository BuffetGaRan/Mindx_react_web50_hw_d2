import { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';

const ExspenItem = (props) => {
    
    const [name, setName] = useState(props.name);
    const [style, setStyle] = useState('');

    const changeName = () => {
        // setName('new Name');
        setStyle(['red', 'white']);
    }

    return (

        <div className="expense-item" style={{backgroundColor: style[0]}}>
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2 style={{color: style[1]}}>{name}</h2>
                <div className="expense-item__price">${props.price}</div>
                {props.children}
                <button onClick={changeName}>Change</button>
            </div>
        </div>

    );
};

export default ExspenItem;