import './ExpenseDate.css';

const ExpenseDate = (props) => {

    const { date } = props;

    const year = date.getFullYear();
    const month = date.toLocaleDateString('en-US', {month: '2-digit'});
    const day = date.toLocaleDateString('en-US', {day: '2-digit'});

    return (

        <div className="expense-date">
            <div className="expense-date_month_day">{month} - {day}</div>
            <div className="expense-date_year">{year}</div>
        </div>

    );
}

export default ExpenseDate;