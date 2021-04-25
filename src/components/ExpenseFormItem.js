
const ExpenseFormItem = (props) => {
    
    return ( 

        <div className="expense-form-item">
            <label>
                {props.title}:
                <input type={props.type} value={props.value} onChange={props.func}/>
            </label>
        </div>

    );

}

export default ExpenseFormItem;