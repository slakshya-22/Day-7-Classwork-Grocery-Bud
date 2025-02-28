import { useState } from "react";
import Form from "./Form";
import { ToastContainer, toast } from 'react-toastify'
import { nanoid } from "nanoid";
import Items from "./Items";

const setLocalStorage =(items)=>{
  localStorage.setItem('list',JSON.stringify(items));
}

const getLocalStorage = ()=>{
  let list = localStorage.getItem('list');
  if(list){
    list = JSON.parse(localStorage.getItem('list'));
    } else {
      list = [];
    }
    return list;

};

const App = () => {


const [items,setItems] = useState(getLocalStorage());
const addItem = (item)=>{
 if (item!==''){
  
  try {
    
      const newItems = [...items,{name:item,completed:false,id:nanoid()}];
      setItems(newItems);
      toast.success('item added');
      setLocalStorage(newItems);
    
    
  } catch (error) {
      toast.error('cannot add item to the list')
    
  }
} else {
  toast.error('please insert a value')

}}

const removeItem = (id)=>{
  try {
    const updatedItems = items.filter((item)=>{
      return item.id!==id;  
    })
    setItems(updatedItems);
    setLocalStorage(updatedItems);
    toast.success('item removed')
    
  } catch (error) {
    toast.error('the item could not removed')
    
  }

}
const editItem = (id)=>{
  const editedItems = items.map((item)=>{
    if(id===item.id){
      const editedItem = {...item,completed:!item.completed};
      return editedItem;
    }
    return item;
  })
   setItems(editedItems);
   setLocalStorage(editedItems);
}


  return (
  <section className="section-center">
    <ToastContainer className="top-center"/>
    <Form items={items} addItem={addItem} setItems={setItems}/>
    <Items items={items} removeItem={removeItem} editItem={editItem}/>
    </section>
)};

export default App;
