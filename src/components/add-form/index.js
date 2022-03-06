import React from 'react';
import './add-form.css'
const AddForm = () => {
    return (
        <div className='add-form'>
            <div className="form-item">
                <label>Title</label>
                <input type="text"
                    placeholder='Enter your expenditure'
                    value=""
                    onChange={() => console.log("Hello")
                     }
                />
            </div>
            <div className="form-item">
                <label>Amount</label>
                <input type="text"
                    placeholder='Enter Amount'
                    value=""
                    onChange={() => console.log("Hello")
                     }
                />
            </div>
        </div>
    );
}

export default AddForm;

