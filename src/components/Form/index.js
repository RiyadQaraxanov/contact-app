import {useState} from 'react'

function Form(form) {

  const [fomr, setForm] = useState({fullname: '', number: ''})

  const onChangeInput =(e)=>{
    setForm({...Form, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) =>{
    e.preventDefault()
    console.log(form)
  }

  return (
    <div>
      <form onSubmit={onSubmit} >
        <div>
            <input name='fullname' placeholder='Full Name' onChange={()=>onChangeInput}/>
        </div>
        <div>
            <input name='number' placeholder='Number' onChange={()=>onChangeInput}/>
        </div>
        <button onCLick={()=>onSubmit}>Add</button>
      </form>
    </div>
  )
}

export default Form
