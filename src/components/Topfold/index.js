import React, { useState } from 'react';
import './Topfold.css'
import { Link } from 'react-router-dom'

const Topfold = () => {
    const [query, setQuery] = useState("")
    const handleQuery = (e) => {
        setQuery(e.target.value)
    }

    return (
        <div className='topfold'>
            {window.location.pathname === '/'
                ?
                <div className='home-topfold'>
                    <div className='searchbar'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder='Search Expenses' value={query} onChange={(e) => handleQuery(e)} />
                    </div>

                    <Link to="/add-expense">
                        <div className="add-button">
                            <i class="fa-solid fa-circle-plus"></i>
                            <label>Add</label>
                        </div>
                    </Link>

                </div>
                :
                <div className='add-topfold'>
                    <Link to="/">
                        <div className="add-topfold-button">
                            <i class="fa-solid fa-arrow-left"></i>
                            <label>Back</label>
                        </div>
                    </Link>

                    <Link to="/">
                        <div className="add-topfold-button">
                            <i class="fa-solid fa-xmark"></i>
                            <label>Cancel</label>
                        </div>
                    </Link>

                </div>

            }

        </div>
    );
}

export default Topfold;
