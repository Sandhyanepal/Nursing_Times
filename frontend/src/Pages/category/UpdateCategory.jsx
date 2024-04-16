import React, { useEffect, useState } from 'react'
import AdminSidebar from '../../Layout/AdminSidebar'
import { addCategory, getCategoryDetails } from '../../api/categoryApi'
import { useParams } from 'react-router-dom'

const UpdateCategory = () => {
    let [category_name, setCategoryName] = useState('')
    let [error, setError] = useState('')
    let [success, setSuccess] = useState(false)
    let {id} = useParams()
    console.log("id:",id)

    useEffect(()=>{
        if(id != null){
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
        addCategory(category_name)
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

    // const redirect = () => {
    //     let router = useRouter()
    //     if(success){
    //         router.push('/admin/category')
    //     }
    // }

    const showSuccess = () =>(
        success && <div className='text-center text-green-600 text-xl font-bold'>Category has been added successfully.</div>
    )

    return (
     <div className='flex'>
        {/* {redirect()} */}
        <AdminSidebar/>
        <div className=" w-full text-lg mt-5">
            {/* <h1 className="underline">Add Category</h1> */}

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