import React, { useEffect, useState } from 'react'
import AdminSidebar from '../../Layout/AdminSidebar'
import { getAllCategory } from '../../api/categoryApi'
import { Link } from 'react-router-dom'

const Index = () => {
     let [Category, setCategory] = useState([])

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
     })

  return (
    <div className='flex'> 
        <AdminSidebar/>
        <div className='text-center w-full text-xl mt-5'>
            <h1 className='underline text-2xl pb-8'>Categories</h1>
            <table className='m-auto'>
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
                                <Link href={`/admin/category/edit/${category._id}`}>
                                <button className='update button rounded-s-md'>Update</button>
                                </Link>
                                <button className='delete button rounded-e-md'>Delete</button>
                            </td>
                           </tr> 
                        })


                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>
                            <Link to='/admin/category/add' className='add button rounded-md'>Add New Category</Link>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
  )
}

export default Index