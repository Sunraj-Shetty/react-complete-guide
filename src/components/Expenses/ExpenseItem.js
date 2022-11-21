import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log('Clicked!!!');
  };
  // document.getElementById('root').addEventListener()
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler/*() => {console.log('Clicked!')}*/}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

