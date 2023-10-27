import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2023, 10, 24)
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 899.02,
      date: new Date(2023, 10, 24)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2023, 10, 24)
    },
    {
      id: 'e4',
      title: 'New Desk',
      amount: 2367.1,
      date: new Date(2023, 10, 24)
    }

  ];

  return (
    
    <div>
      <ExpenseItem
        expense={expenses[0]}
      />
      
      <ExpenseItem
        expense={expenses[1]}
      />

      <ExpenseItem
        expense={expenses[2]}
      />

      <ExpenseItem
        expense={expenses[3]}
      />

    </div>
  );
}

export default App;
