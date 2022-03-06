import React from 'react';
import AddForm from '../../components/add-form';
import Topfold from '../../components/Topfold';
import './add-expense.css'

const AddExpense = () => {
    return (
        <div className='add-expense'>
            <Topfold />
            <AddForm />
            This is expenses
        </div>
    );
}

export default AddExpense;
