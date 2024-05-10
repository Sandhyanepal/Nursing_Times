import React, { useEffect, useState } from 'react'
// import AdminSidebar from '../../Layout/AdminSidebar'
import { getCategoryDetails, updateCategory } from '../../api/categoryApi'
import { useParams } from 'react-router-dom'
//import { isAuthenticate } from '../../api/userApi'

const UpdateCategory = () => {
    let [category_name, setCategoryName] = useState('')
    let [error, setError] = useState('')
    let [success, setSuccess] = useState(false)
    // let [token, setToken] = useState('')

    let {id} = useParams()
    console.log(id)

    useEffect(()=>{
        if(id){
            getCategoryDetails(id)
            .then(data=>{
                if(data.error){
                    console.log(data.error)
                }
                else{
                    setCategoryName(data.category_name)
                }
            })
        }
    },[id])

    const handleSubmit = e => {
        e.preventDefault()

        updateCategory(id, category_name)
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setSuccess(true)
            }
        })
    }
    const showError = () => {
        if(error){
            return <div className='text-red-600 text-center'>{error}</div>
        }
    }

    const showSuccess = () =>(
        success && <div className='text-center text-green-600 text-xl font-bold'>Category has been updated successfully.</div>
    )

    return (
     <div className='flex'>
        <div className=" w-full text-lg mt-5">

            <form className='p-5 w-1/2 m-auto mt-5 rounded-lg py-10 shadow-xl'>
                <h2 className='pb-4 font-bold text-2xl text-center'>Update Category</h2>
                <label htmlFor="category_name">Category Name:</label>
                <input type="text" id='category_name' className='px-5 py-2
                 w-10/12 rounded-md border-2' 
                 onChange={e=>setCategoryName(e.target.value)}
                 value={category_name}
                 />

                <button className='button add mt-2 w-3/12 rounded-md' onClick={handleSubmit}>Update</button>
            </form>
            {showError()}
            {showSuccess()}
        </div>
    </div>
  )
}

export default UpdateCategory