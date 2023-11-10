import React, { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

const App = () => {
  const [expense, setExpense] = useState([
    {
      id: 1,
      description: "aaa",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 2,
      description: "bbb",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 3,
      description: "ccc",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 4,
      description: "ddd",
      amount: 10,
      category: "Utilities",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");
  let visibleCategory = selectedCategory
    ? expense.filter((a) => a.category == selectedCategory)
    : expense;
  return (
    <div>
      <div className="mb-3">
        <ExpenseForm
          onSubmit={(exp) =>
            setExpense([...expense, { ...exp, id: expense.length + 1 }])
          }
        ></ExpenseForm>
      </div>
      <div className="mb-3"></div>
      <ExpenseFilter
        onSelection={(selectedCategory) =>
          setSelectedCategory(selectedCategory)
        }
      ></ExpenseFilter>
      <ExpenseList
        expenses={visibleCategory}
        onDelete={(id) => setExpense(expense.filter((a) => a.id !== id))}
      ></ExpenseList>
    </div>
  );
};

export default App;
