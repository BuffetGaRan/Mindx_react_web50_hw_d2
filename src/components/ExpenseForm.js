import { useState } from 'react';
import ExpenseFormItem from './ExpenseFormItem.js';
import './ExpenseForm.css';

const ExpenseForm = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');

    const onNameChange = (event) => {
        setName(event.target.value);
    }
    
    const onPriceChange = (event) => {
        setPrice(event.target.value);
    }

    const onDateChange = (event) => {
        setDate(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name);
        console.log(price);
        console.log(date);
    }

    const expenseFormData = [
        {title: 'Name', type: 'text'},
        {title: 'Price', type: 'number'},
        {title: 'Date', type: 'date'},
    ];

    return (

        <div className="expense-form">

            <form onSubmit={handleSubmit}>

                <div className="expense-form-title">
                    Update Expense
                </div>

                <ExpenseFormItem title={expenseFormData[0].title} type={expenseFormData[0].type} value={name} func={onNameChange}/>
                <ExpenseFormItem title={expenseFormData[1].title} type={expenseFormData[1].type} value={price} func={onPriceChange}/>
                <ExpenseFormItem title={expenseFormData[2].title} type={expenseFormData[2].type} value={date} func={onDateChange}/>
                
                <div className="btn-form">

                    <button id="btn-submit" type="submit">Add</button>
                    <button id="btn-cancel" type="button">Cancel</button>

                </div>
            </form>
        </div>

    );
}

export default ExpenseForm;