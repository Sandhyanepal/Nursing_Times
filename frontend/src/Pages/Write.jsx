<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
// import { API } from '../config'
import { addpost } from '../api/postApi'
import { isAuthenticate } from '../api/userApi'
import { getAllCategory } from '../api/categoryApi'

const Write = () => {

    let { user } = isAuthenticate()
    let [categories, setCategories] = useState([])
    let [content, setContent] = useState({
        title: '',
        description: '',
        username: '',
        image: '',
        category: ''
    })

    // destructuring content
    let {
        title,
        description,
        username,
        image,
        category
    } = content

    let [error, setError] = useState('')
    let [success, setSuccess] = useState(false)

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


    const handleChange = name => event => {
        setContent({
            ...content,
            error: false,
            [name]: event.target.value
        })
        console.log(content)
    }

    // const handleImageChange = event => {
    //     setContent({
    //         ...content,
    //         image:event.target.files[0]
    //     })
    // }

    const handleSubmit = async event => {
        event.preventDefault()

        // parsing form data instead of json
        try {
            const formData = new FormData()
            formData.append('title', title)
            formData.append('description', description)
            formData.append("image", image)
            formData.append("username", user.username)
            formData.append("category", category)



            const response = await addpost(formData)
            console.log(response)
            if (response.error) {

                setSuccess(false)
                setError(response.error)
            }
            else {
                setSuccess(true)
                setError('')
                setContent({
                    title: '',
                    description: '',
                    username: '',
                    image: ''
                })
            }
        }
        catch (err) {
            // setError(err.response.data.error)
            // setSuccess(false)
            console.error('Error:', err);
            setError('An error occurred while adding the post.');
            setSuccess(false);
        }
    }
=======
import React from 'react'

const Write = () => {

   
>>>>>>> 4f22d5683d1fc710994fe16bd993b31b76394171

    const showError = () => {
        if (error) {
            return <div className='font-bold text-red-700 underline text-lg pt-2 text-center'>{error}</div>
        }
    }

    const showSuccess = () => {
        if (success) {
            return <div className='text-green-500 text-lg font-bold'>"Your post has been added successfully."</div>
        }
    }

    const handleImage = evt => {
        let fileInput = document.getElementById("fileInput")
        let nur = document.getElementById("nur")
        const [file] = fileInput.files
        if (file) {
            nur.src = URL.createObjectURL(file)
        }
        // setContent(...content, image = 'xyz')
        image = 'xyz'
    }



    return (
        <>
<<<<<<< HEAD

            {showError()}
            {showSuccess()}

            <img src='' alt="" className={`w-3/5 m-auto mt-8 object-cover rounded-lg ${!image ? 'hidden' : 'block'}`} style={{ height: '500px' }}
                id="nur"
            />


            <div className="write w-11/12 m-auto pt-9">
                <form className='writeForm relative'>
                    <div className="writeFormGroup ml-36 flex items-center" runat="server">
=======
            
            <img src='' alt="" className='w-3/5 h-72 m-auto mt-8  object-cover object-center rounded-lg' />
            


            <div className="write w-11/12 m-auto pt-9">
                <form className='writeForm relative' >
                    <div className="writeFormGroup ml-36 flex items-center">
>>>>>>> 4f22d5683d1fc710994fe16bd993b31b76394171
                        <label htmlFor="fileInput">
                            <i className="fa-solid fa-plus writeIcon text-xl text-gray-500"></i>
                        </label>

<<<<<<< HEAD
                        <input type="file" id='fileInput' style={{ display: "none" }}
                            onChange={handleImage} />

                        <input
                            type="text"
                            placeholder='Title' className='text-3xl p-5 ml-2 focus:outline-none'
                            style={{ width: "60vw" }}
                            value={title}
                            onChange={handleChange('title')}
                        />
=======
                        <input type="file" id='fileInput' style={{ display: "none" }}/>

                        <input type="text" placeholder='Title' className='text-3xl p-5 ml-2 focus:outline-none' style={{ width: "60vw" }} />
>>>>>>> 4f22d5683d1fc710994fe16bd993b31b76394171
                    </div>
                    <label htmlFor="">Category</label>

                    <select name="category" id="" defaultValue={""} onChange={handleChange('category')}>
                        <option value="" disabled>Choose Category</option>
                        {
                            categories.length > 0 &&
                            categories.map(category => {
                                return <option key={category._id} value={category._id}>{category.category_name}</option>
                            })
                        }
                    </select>

                    <div className="writeFormGroup ml-40 text-xl">

<<<<<<< HEAD
                        <textarea
                            placeholder='Tell your story...' type="text" className='focus:outline-none resize-none'
                            style={{ width: "70vw", height: "50vh" }}
                            value={description}
                            onChange={handleChange('description')}
                        ></textarea>
=======
                        <textarea placeholder='Tell your story...' type="text" className='focus:outline-none resize-none' style={{ width: "70vw", height: "50vh" }} ></textarea>
>>>>>>> 4f22d5683d1fc710994fe16bd993b31b76394171
                    </div>
                    <button className='absolute top-6 right-28 text-white bg-yellow-500 p-1 rounded-md'
                        onClick={handleSubmit}
                    >Publish </button>
                </form>
            </div>
        </>
    )
}

export default Write
