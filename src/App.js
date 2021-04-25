import React from 'react';
import Card from './components/Card.js';
import './App.css';
import ExspenItem from './components/ExspenItem';
import ExpenseForm from './components/ExpenseForm';


function App() {

  const expenseData = [
    {price: 1000, name: "New Butterfly Shappire", date: new Date(2020, 9, 25)},
    {price: 2000, name: "New Bayonet Fade", date: new Date(2020, 9, 20)},
    {price: 3000, name: "New Dragon Lore Suvournie", date: new Date(2020, 5, 1)},
    {price: 4000, name: "New DE Print Stream Statrak", date: new Date(2020, 0, 1)},
  ];

  return (
    <>
      <ExpenseForm/>

      

      <Card>
        <ExspenItem date={expenseData[0].date} name={expenseData[0].name} price={expenseData[0].price}>
          {/* <button>Clickme</button> */}
        </ExspenItem>
        <ExspenItem date={expenseData[1].date} name={expenseData[1].name} price={expenseData[1].price}/>
        <ExspenItem date={expenseData[2].date} name={expenseData[2].name} price={expenseData[2].price}/>
        <ExspenItem date={expenseData[3].date} name={expenseData[3].name} price={expenseData[3].price}/>
      </Card>
    </>
  );
}

export default App;

// Viết các input trong formExpense thành các component và xử lý các kiểu dữ liệu string, number, date
// Thêm mới một component tên là ExpenseFilter
// Bên trong ExpenseFilter, tạo ra một thẻ select. Sử dụng state để điều khiển giá trị của thẻ select đó