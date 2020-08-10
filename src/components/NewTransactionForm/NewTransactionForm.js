import React from "react";
import './NewTransactionForm.scss';


class NewTransactionForm extends React.Component {
    state = {
        name: '',
        amount:'',
        date:'',
        category:''
    }

    handleNameChange = e => {
        this.setState({
            name: e.target.value.toUpperCase(),
        });
    };

    handleAmountChange = e => {
        this.setState({
            amount: e.target.value,
        });
    };
    handleDateChange = e => {
        this.setState({
            date: e.target.value,
        });
    };
    handleCategoryChange = e => {
        this.setState({
            // category: e.target.value,
        });
        console.log(e)
    };

    handleOnSubmit = (e, dispatch) => {
        e.preventDefault();
        console.log('clicked')
        return (
            this.props.setNewTransaction(this.state),
            this.clearInputs()
        )
    }

    clearInputs = () => {
        const form = document.getElementById('transaction-form');
        form.reset();
    }

    render() {
        return (
            <form id='transaction-form' className='form-flexbox' onSubmit={this.handleOnSubmit}>
                <label htmlFor='name' className='hidden-label'>Transaction Name</label>
                <input id='name' className='form-input form-input--name' type='text' placeholder='Name of your transaction'
                       onChange={this.handleNameChange}/>
                <span className='input-span'>$
                    <label htmlFor='cost' className='hidden-label'>Transaction Cost</label>
                    <input id='cost' className='form-input form-input--number' type='number' onChange={this.handleAmountChange}/>
                </span>
                <label htmlFor='date' className='hidden-label'>Transaction Date</label>
                <input id='date' className='form-input' type='date' onChange={this.handleDateChange}/>
                <label htmlFor='category' className='hidden-label'>Transaction Category</label>
                <select id='category' className='form-select' name="Category" >
                    <option value="Bills">Bills</option>
                    <option value="Food">Food</option>
                    <option value="Car">Car</option>
                    <option value="School">School</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Cosmetics">Cosmetics</option>
                </select>
                <button className='form-button' type='submit'>Add transaction </button>
            </form>
        )
    }
}

export default NewTransactionForm;