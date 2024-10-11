import { useState } from "react";

const Form = () => {

    // Step 1: Declare state to store form values
    const [formData, setFormDate] = useState({
        name: '',
        email: '',
        password: ''
    })

    // Step 2: Handle Input Changes
    const handleChange= (e) => {
        const {name, value} = e.target;
      setFormDate((prevData) => ({
        ...prevData, // Spread the current formData state
        [name]: value // dynamically update the changed field
      }))
    }


    // Step: Handle submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert(`Name: ${formData.name} Email: ${formData.email} Password: ${formData.password}`)
    }

  return (
    <>
    <form 
    onSubmit={handleSubmit}
    className="space-y-4 mt-12"
    >
        <div>
        <label>Name</label>
        <input
         type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}


        className="border-2 border-gray-300 rounded-md"
        />
        </div>
        <div>
        <label>Email</label>
        <input
         type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}

        className="border-2 border-gray-300 rounded-md"
        />
        </div>
        <div>
        <label>Password:</label>
        <input
         type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}

        className="border-2 border-gray-300 rounded-md"
        />
        </div>
        <button 
        type="submit"
        className="px-3 py-2 bg-gray-500 rounded-sm"
        >Submit</button>
    </form>

    </>
  )
}
export default Form;