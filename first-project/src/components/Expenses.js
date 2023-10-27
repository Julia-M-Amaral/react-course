import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

export default function Expenses(props) {
  return <div className="expenses">
<ExpenseItem expense={props.items[0]} />
<ExpenseItem expense={props.items[1]} />
<ExpenseItem expense={props.items[2]} />
<ExpenseItem expense={props.items[3]} />


  </div>;
}