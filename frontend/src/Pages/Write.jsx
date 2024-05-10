import React, { useEffect, useState } from 'react'
// import { API } from '../config'
import { addpost } from '../api/postApi'
import { isAuthenticate } from '../api/userApi'
import { getAllCategory } from '../api/categoryApi'
import { useNavigate } from 'react-router-dom'

const Write = () => {

  let navigate = useNavigate()


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

         // Check if the user is authenticated
         if (!user) {
            // Redirect to the login page if the user is not authenticated
            navigate('/login');
            return;
        }


        // parsing form data instead of json
        try {
            const formData = new FormData()
            formData.append('title', title)
            formData.append('description', description)
            formData.append("image", image)
            formData.append("username", user.username)
            formData.append("category", category)
            formData.append("userId",user._id)



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
   

    const showError = () => {
        if (error) {
            return <div className='font-bold text-red-700 underline text-xl pt-2 text-center'>{error}</div>
        }
    }

    const showSuccess = () => {
        if (success) {
            return <div className='text-green-500 text-xl font-bold text-center py-5'>"Your post has been added successfully."</div>
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

            {showError()}
            {showSuccess()}

            <img src='' alt="" className={`w-3/5 m-auto mt-8 object-cover rounded-lg ${!image ? 'hidden' : 'block'}`} style={{ height: '500px' }}
                id="nur"
            />


            <div className="write w-11/12 m-auto pt-9">
                <form className='writeForm relative'>
                    <div className="writeFormGroup ml-36 flex items-center" runat="server">
                        <label htmlFor="fileInput">
                            <i className="fa-solid fa-plus writeIcon text-xl text-gray-500"></i>
                        </label>

                        <input type="file" id='fileInput' style={{ display: "none" }}
                            onChange={handleImage} />

                        <input
                            type="text"
                            placeholder='Title' className='text-3xl p-5 ml-2 focus:outline-none'
                            style={{ width: "60vw" }}
                            value={title}
                            onChange={handleChange('title')}
                        />
                    </div>

                    <div className="flex gap-2 pl-40 pb-4">

                    <label htmlFor="" className='text-lg'>Category</label>
                    <select name="category" id="" defaultValue={""} onChange={handleChange('category')}>
                        <option value="" disabled >Choose Category</option>
                        {
                            categories.length > 0 &&
                            categories.map(category => {
                                return <option key={category._id} value={category._id}>{category.category_name}</option>
                            })
                        }
                    </select>
                    </div>

                    <div className="writeFormGroup ml-40 text-xl">

                        <textarea
                            placeholder='Tell your story...' type="text" className='focus:outline-none resize-none'
                            style={{ width: "70vw", height: "50vh" }}
                            value={description}
                            onChange={handleChange('description')}
                        ></textarea>
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
