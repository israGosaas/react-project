import React from "react";
import { categories } from "../../App";
function ExpenseForm() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input type="text" id="description" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input id="amount" type="number" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category" className="form-select">
          <option></option>
          {categories.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>
        <div className="mb-3"></div>
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
