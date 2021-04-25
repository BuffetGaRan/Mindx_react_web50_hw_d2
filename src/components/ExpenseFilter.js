import { useState } from 'react';

const ExpenseFilter = (props) => {

    const [value, setValue] = useState('value');

    const onValueChange = (event) => {
        setValue('');
    }
    
    return (

        <div className="expense-filter">
            <select>
                <option value={value} onChange={onValueChange}>{value}</option>
            </select>
        </div>

    );

}

export default ExpenseFilter;