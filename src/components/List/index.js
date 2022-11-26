import React, {useState} from 'react'
import "./list.css"
function List({contacts}) {

  const [search,setSearch] = useState("")

  const filtered = contacts.filter((item)=>{
    return Object.keys(item).some((key)=>
      item[key]
      .toString()
      .toLowerCase()
      .includes(search.toLocaleLowerCase())
    )
  })
  console.log("filtered",filtered)
  return (
    <div>
      <br />
      <input placeholder='Search' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        {
          filtered.map((contact,index)=>(
            <div className='lists' key={index}>{contact.fullname} - {contact.number}</div>
          ))
        }
        <br/>
    </div>
  )
}

export default List
