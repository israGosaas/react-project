import React, { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

const App = () => {
  const [expense, setExpense] = useState([
    {
      id: 1,
      description: "aaa",
      amount: 10,
      category: "utilities",
    },
    {
      id: 2,
      description: "bbb",
      amount: 10,
      category: "utilities",
    },
    {
      id: 3,
      description: "ccc",
      amount: 10,
      category: "utilities",
    },
    {
      id: 4,
      description: "ddd",
      amount: 10,
      category: "utilities",
    },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expense}
        onDelete={(id) => setExpense(expense.filter((a) => a.id !== id))}
      ></ExpenseList>
    </div>
  );
};

export default App;
