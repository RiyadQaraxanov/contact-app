import {useState} from 'react'

function Form({onPrint, contacts}) {

  const [form, setForm] = useState({fullname: '', number: ''})

  const onChangeInput =(e)=>{
    setForm({...form, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) =>{
    e.preventDefault()
    if(form.fullname === '' || form.number === '') return false;
    onPrint([...contacts,form])
    setForm({fullname:'',number:''});
  }

  return (
    <div>
      <form onSubmit={onSubmit} >
        <div>
            <input name='fullname' value={form.fullname} placeholder='Full Name' onChange={onChangeInput}/>
        </div>
        <div>
            <input name='number' value={form.number} placeholder='Number' onChange={onChangeInput}/>
        </div>
        <button>Add</button>
      </form>
    </div>
  )
}

export default Form
