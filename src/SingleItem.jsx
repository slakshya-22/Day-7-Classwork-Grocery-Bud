


const SingleItem = ({item,removeItem,editItem}) => {
   const {name,completed,id} = item;

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={()=>editItem(id)}
      />
      <p style={{
        textTransform:'capitalize',
        textDecorationLine: completed && 'line-through'
        }}
        >
        {name}
      </p>
      <button type='button' className='btn remove-btn' onClick={()=>removeItem(id)}>Delete</button>
    </div>
  )
}

export default SingleItem