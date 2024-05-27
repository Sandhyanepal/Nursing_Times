import React, { useState } from 'react'
import { addCategory } from '../../api/categoryApi'
import { isAuthenticate } from '../../api/userApi'

const Add = () => {

    let {token} = isAuthenticate()

    let [category_name, setCategoryName] = useState('')
    let [error, setError] = useState('')
    let [success, setSuccess] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        addCategory(category_name, token)
        .then(data=>{
            if(data.error){
                setError(data.error)
                setSuccess(false)
            }
            else{
                setSuccess(true)
                setError('')
            }
        })
    }
    const showError = () => {
        if(error){
            alert(error)
            setError('')
        }
    }

    const showSuccess = () =>{
        if(success){

            alert("Category has been added successfully.")
        }
    }

    return (
     <div className='flex'>
        <div className=" w-full text-lg mt-5">
            <form className='p-5 md:w-1/2 w-11/12 m-auto mt-5 rounded-lg py-10 shadow-xl'>
                <h2 className='pb-4 font-bold md:text-2xl sm:text-xl text-lg text-center'>Add Category</h2>
                <label htmlFor="category_name">Category Name:</label>
                <input type="text" id='category_name' className='px-5 py-2
                 w-10/12 rounded-md border-2' 
                 onChange={e=>setCategoryName(e.target.value)}
                 />
                <button className='button add mt-2 lg:w-3/12 md:w-4/12 rounded-md sm:text-lg text-base' onClick={handleSubmit}>Add</button>
            </form>
            {showError()}
            {showSuccess()}
        </div>
    </div>
  )
}

export default Add