import React, { useEffect, useState } from 'react'
import AdminSidebar from '../../Layout/AdminSidebar'
import {  deleteCategory, getAllCategory } from '../../api/categoryApi'
import { Link } from 'react-router-dom'

const Index = () => {
     let [Category, setCategory] = useState([])
     let [deleteSuccess, setDeleteSuccess] = useState(false)


     useEffect(()=>{
        getAllCategory()
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                setCategory(data)
            }
        })
     }, [deleteSuccess])

     const handleDelete = id => e => {
        setDeleteSuccess(false)
        console.log(id)
        const confirmed = window.confirm("Are you sure you want to delete this category")
        if(confirmed === true){
            deleteCategory(id)
            .then(data=>{
               if(data.error){
                   alert(data.error)
               }
               else{
                setDeleteSuccess(true)
                   alert(data.msg)
               }
            })
        }
     }

  return (
      <div className='flex'> 
      <AdminSidebar/>
        <div className='text-center w-full text-xl mt-5'>
            <h1 className='underline text-2xl pb-8'>Categories</h1>
            <table className='m-auto '>
                <thead>
                    <tr>
                        <td>S.NO.</td>
                        <td>Category Name</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        //map garna
                        Category.map((category, i)=>{
                           return <tr key={i}>
                            <td>{i+1}</td>
                            <td>{category.category_name}</td>
                            <td>
                                {/* <Link href={`/admin/category/update/${category._id}`}> */}
                                <Link to={`/admin/category/update/${category._id}`} className='update button rounded-s-md' >Update</Link>
                                {/* </Link> */}
                                <button className='delete button rounded-e-md' onClick={handleDelete(category._id)}>Delete</button>
                            </td>
                           </tr> 
                        })


                    }
                </tbody>
                {/* <tfoot>
                    <tr>
                        <td colSpan={3}>
                        </td>
                    </tr>
                </tfoot> */}
            </table>
                       <Link to='/admin/category/add' className='py-10'>
                            <button className='add button rounded-md'>Add New Category</button>
                        </Link>
        </div>
        
    </div>
  )
}

export default Index