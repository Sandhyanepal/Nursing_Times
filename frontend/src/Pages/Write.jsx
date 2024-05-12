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
    const [image, setImage] = useState(null);

    let [content, setContent] = useState({
        title: '',
        description: '',
        username: '',
        // image: '',
        category: '',
        formData: new FormData()
    })

    // destructuring content
    let {
        title,
        description,
        // image,
        category,
        formData
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
        if (name === "image") {
            formData.set("image", event.target.files[0])

            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        else {
            setContent({
                ...content,
                error: false,
                [name]: event.target.value
            })
            formData.set(name, event.target.value)
        }

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
            // const formData = new FormData()
            // formData.append('title', title)
            // formData.append('description', description)
            // formData.append("image", image)
            formData.append("username", user.username)
            // formData.append("category", category)
            formData.append("userId", user._id)



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

    // const handleImage = evt => {
    //     let fileInput = document.getElementById("fileInput")
    //     let nur = document.getElementById("nur")
    //     const [file] = fileInput.files
    //     if (file) {
    //         nur.src = URL.createObjectURL(file)
    //     }
    //     // setContent(...content, image = 'xyz')
    //     image = 'xyz'
    // }



    return (
        <>

            {showError()}
            {showSuccess()}

            {/* <img src='' alt="" className={`w-3/5 m-auto mt-8 object-cover rounded-lg ${!image ? 'hidden' : 'block'}`} style={{ height: '500px' }}
                id="nur"
            /> */}


            <div className="write w-11/12 m-auto pt-9">
                <form className='writeForm relative'>
                    <div className="writeFormGroup ml-36" runat="server">
                        
                        
                        
                        {/* For Title */}
                        <input
                            type="text"
                            placeholder='Title' className='text-3xl p-5  focus:outline-none'
                            style={{ width: "60vw" }}
                            value={title}
                            onChange={handleChange('title')}
                        />

                        {/* For Category */}
                        <div className='flex pl-5 pb-5'>
                            <label htmlFor="" className='pr-5 text-lg font-semibold '>Category</label>
                            <select name="category" id="" defaultValue={""} onChange={handleChange('category')} className='border-2'>
                                <option value="" disabled>Choose Category</option>
                                {
                                    categories.length > 0 &&
                                    categories.map(category => {
                                        return <option key={category._id} value={category._id}>{category.category_name}</option>
                                    })
                                }
                            </select>
                        </div>

                        {/* For Image */}
                        <div className='flex items-center pl-5'>
                            <label htmlFor="fileInput" className='pr-5'>
                                <i className="fa-solid fa-plus writeIcon text-xl text-gray-500"></i>
                            </label>

                            
                            <input type="file" id='fileInput' style={{ display: "none" }}
                                onChange={handleChange('image')} />

                            {image && (
                                <div>
                                    <img src={image} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="writeFormGroup ml-40 pt-5 text-xl">

                        <textarea
                            placeholder='Tell your story...' type="text" className='focus:outline-none resize-none '
                            style={{ width: "70vw", height: "50vh" }}
                            value={description}
                            onChange={handleChange('description')}
                        ></textarea>
                    </div>
                    <button className='absolute top-5 right-28 text-white bg-yellow-500 p-1 rounded-md'
                        onClick={handleSubmit}
                    >Publish </button>
                </form>
            </div>
        </>
    )
}

export default Write
