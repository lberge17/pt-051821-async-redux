import {useState} from 'react'

export default function StarshipsForm() {
  const [name, setName] = useState("")

  const handleChange = e => {
    setName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setName("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='name'
        value={name} 
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  )
}
