import React from "react";
import './NewTransactionForm.scss';

const NewTransactionForm = () => {
    return (
        <form className='form-flexbox'>
            <input className='form-input form-input--name' type='text' placeholder='Name of your transaction'/>
            <span className='input-span'>$<input className='form-input form-input--number' type='number'/></span>
            <input className='form-input' type='date'/>
            <select className='form-select' name="Category" id="cars">
                <option value="Bills">Bills</option>
                <option value="Food">Food</option>
                <option value="Car">Car</option>
                <option value="School">School</option>
                <option value="Clothes">Clothes</option>
                <option value="Cosmetics">Cosmetics</option>
            </select>
            <button className='form-button' type='submit'>Add transaction</button>
        </form>
    )
}

export default NewTransactionForm;