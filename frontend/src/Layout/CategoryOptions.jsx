import React, { useEffect, useState } from 'react'
import { getAllCategory } from '../api/categoryApi'
import { Link } from 'react-router-dom'

const CategoryOptions = () => {

    let [categories, setCategories] = useState([])

    useEffect(() => {
        getAllCategory()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setCategories(data)
                }
            })
    }, [])

    return (
        <div className=' max-md:hidden'>
            <h1 className='font-semibold text-2xl text-center underline'>Categories</h1>

            <div className='pt-5 flex flex-col'>
                {
                    categories.length > 0 &&
                    categories.map(category => {
                        return <Link to='' key={category._id} value={category._id} className='py-1 border-2 mt-2 text-center px-1 rounded-full'>{category.category_name}</Link>
                    })
                }
            </div>
        </div>
    )
}

export default CategoryOptions
