import ExpenseFilter from '../components/ExpenseFilter';
import ExpenseList from '../components/ExpenseList';
import ExpenseForm from '../components/ExpenseForm';
import { useState } from "react";

function App() {
  const [SelectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaa', amount: 10, category: 'Utilities' },
    { id: 2, description: 'bbb', amount: 10, category: 'Utilities' },
    { id: 3, description: 'ccc', amount: 10, category: 'Groceries' },
    { id: 4, description: 'ddd', amount: 10, category: 'Utilities' },
  ]
  )

  const visibleExpenses = SelectedCategory ? expenses.filter(e => e.category === SelectedCategory) : expenses
  return (
    <div>
      <div className='mb-3'>
        <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} />
      </div>
      <div>
        <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))} />
      </div>
      <div>
        <ExpenseForm onSubmit={expense => setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])} />
      </div>
    </div>
  )
}

export default App
