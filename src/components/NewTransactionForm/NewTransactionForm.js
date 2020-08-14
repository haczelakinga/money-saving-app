import React from "react";
import "./NewTransactionForm.scss";
import { v4 as uuidv4 } from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class NewTransactionForm extends React.Component {
  state = {
    uuid: uuidv4(),
    name: "",
    amount: "",
    date: new Date(),
    category: "",
    categoryIcon: "",
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value.toUpperCase(),
    });
  };

  handleAmountChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };
  handleDateChange = (date) => {
    this.setState({
      date: date,
    });
    console.log(date);
  };

  handleCategoryChange = (e) => {
    let { value } = e.target;
    let categoryIcon = "";
    switch (value) {
      case "Bills":
        categoryIcon = "fas fa-lightbulb";
        break;
      case "School":
        categoryIcon = "fas fa-graduation-cap";
        break;
      case "Food":
        categoryIcon = "fas fa-utensils";
        break;
      case "Clothes":
        categoryIcon = "fas fa-tshirt";
        break;
      case "Car":
        categoryIcon = "fas fa-car";
        break;
      case "Hobby":
        categoryIcon = "fas fa-mountain";
        break;
    }
    this.setState({
      category: value,
      categoryIcon: categoryIcon,
    });
    console.log(value);
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    if (this.state.name) {
      if (this.state.amount) {
        if (this.state.category) {
          this.setState({
            uuid: uuidv4(),
          });
          console.log(this);
          return this.props.setNewTransaction(this.state) && this.clearInputs();
        } else {
          alert("Please choose category of your transaction");
        }
      } else {
        alert("Please type cost of your transaction");
      }
    } else {
      alert("Please type name of your transaction");
    }
  };

  clearInputs = () => {
    this.setState({
      name: "",
      amount: "",
      category: "",
    });
    const form = document.getElementById("transaction-form");
    form.reset();
  };

  render() {
    return (
      <form
        id="transaction-form"
        className="form-flexbox"
        onSubmit={this.handleOnSubmit}
      >
        <label htmlFor="name" className="hidden-label">
          Transaction Name
        </label>
        <input
          id="name"
          className="form-input form-input--name"
          type="text"
          placeholder="Name of your transaction"
          onChange={this.handleNameChange}
        />
        <span className="input-span">
          $
          <label htmlFor="cost" className="hidden-label">
            Transaction Cost
          </label>
          <input
            id="cost"
            className="form-input form-input--number"
            type="number"
            step="0.01"
            min="0.01"
            onChange={this.handleAmountChange}
          />
        </span>
        <label htmlFor="date" className="hidden-label">
          Transaction Date
        </label>
        <DatePicker
          className="form-input"
          selected={this.state.date}
          onSelect={(date) => this.handleDateChange(date)}
        />
        <label htmlFor="category" className="hidden-label">
          Transaction Category
        </label>
        <select
          id="category"
          className="form-select"
          name="Category"
          onChange={this.handleCategoryChange}
          defaultValue="DEFAULT"
        >
          <option value="DEFAULT" disabled>
            Category
          </option>
          <option value="Bills">Bills</option>
          <option value="Food">Food</option>
          <option value="Car">Car</option>
          <option value="School">School</option>
          <option value="Clothes">Clothes</option>
          <option value="Hobby">Hobby</option>
        </select>
        <button className="form-button" type="submit">
          Add transaction
        </button>
      </form>
    );
  }
}

export default NewTransactionForm;
