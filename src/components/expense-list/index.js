import React from 'react';
import './expense-list.css'
import Card from './card';

const ExpenseList = () => {
    const list = [
        {
            title: "Made a purchase",
            logo: "Logo Here",
            createdAt: Date.now(),
            amount: 143,
        }
    ]
    return (
        <div>
            {
                list.length
                    ?
                    list.map((item) =>
                            <Card item={item} />
                    )
                    :
                    <div>No any expenses</div>
            }
        </div>
    );
}

export default ExpenseList;
