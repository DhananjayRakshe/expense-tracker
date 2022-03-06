import React from 'react';
import ExpenseList from '../../components/expense-list';
import Topfold from '../../components/Topfold';
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <Topfold />
        <ExpenseList />
    </div>
  );
};

export default Home;
