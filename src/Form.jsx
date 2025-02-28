import React, { useState } from 'react'


const Form = ({items,setItems,addItem}) => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        addItem(item);
        setItem('');
        
    }
    const [item, setItem] = useState('')
  return (
    <form onSubmit={handleSubmit} >
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input className="form-input" type="text" value={item} onChange={(e)=>{setItem(e.target.value)}}></input>
        <button type="submit" className="btn">add item</button>
      </div>
    </form>
  )
}

export default Form