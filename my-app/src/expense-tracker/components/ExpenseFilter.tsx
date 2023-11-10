import React from "react";
import categories from "../categories";
interface Props {
  onSelection: (category: string) => void;
}
const ExpenseFilter = ({ onSelection }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelection(event.target.value)}
    >
      <option>All categories</option>
      {categories.map((category) => (
        <option value={category}>{category}</option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
