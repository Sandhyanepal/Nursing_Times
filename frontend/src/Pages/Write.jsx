import React, { useEffect, useRef, useState } from 'react'
import { addpost } from '../api/postApi'
import { isAuthenticate } from '../api/userApi'
import { getAllCategory } from '../api/categoryApi'
import { useNavigate } from 'react-router-dom'
import EditorMCE from '../Test'
import Swal from 'sweetalert2'

const Write = () => {

    let navigate = useNavigate()
    let file_ref = useRef()
    let select_ref = useRef()

    let { user } = isAuthenticate()
    let [categories, setCategories] = useState([])
    const [image, setImage] = useState(null);

    let [content, setContent] = useState({
        title: '',
        description: '',
        username: '',
        category: '',
        formData: new FormData
    })

    // destructuring content
    let {
        title,
        description,
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
        console.log(event.target)
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

    const handleSubmit = async event => {
        event.preventDefault()

        // Check if the user is authenticated
        if (!user) {
            // Redirect to the login page if the user is not authenticated
            navigate('/login');
            return;
        }


        // parsing form data instead of json
        
        formData.set('description', description)
        formData.set("username", user.username)
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
            file_ref.current.value = null
            select_ref.current.value = ""


        }
    }


    const showError = () => {
        if (error) {
            alert(error)
            setError('')
        }
    }

    const showSuccess = () => {
        if (success) {
            // Swal.fire('success',"Your post has been added","success")
            Swal.fire({
                title: "SUCCESS",
                text: "YOUR POST HAS BEEN ADDED SUCCESSFULLY",
                icon: "success",
                timer: 3000,
                timerProgressBar: true,
                position: 'top-right',
                showCancelButton: true,
                cancelButtonText: "CANCEL NOW",
                confirmButtonText: "OKKKKK",
            })
            // alert("Your post has been added successfully.")
        }
    }



    const handleEditorChange = (msg) => {
        console.log(msg)
        setContent({ ...content, description: msg.toString() })
    }


    return (
        <>

            {showError()}
            {showSuccess()}


            <div className="write w-11/12 m-auto pt-9">
                <form className='writeForm relative'>
                    <div className="writeFormGroup " runat="server">



                        {/* For Title */}
                        <input
                            type="text"
                            placeholder='Title' className='text-3xl py-5  focus:outline-none'
                            style={{ width: "60vw" }}
                            value={title}
                            onChange={handleChange('title')}
                        />


                        {/* For Category */}
                        <div className='flex flex-wrap  pb-5'>
                            <label htmlFor="" className='pr-5 text-lg font-semibold '>Category</label>
                            <select name="category" id="" defaultValue={""} onChange={handleChange('category')} className='border-2' ref={select_ref}>
                                <option value="" disabled>Choose Category</option>
                                {
                                    categories.length > 0 &&
                                    categories.map(category => {
                                        return <option key={category._id} value={category._id}>{category.category_name}</option>
                                    })
                                }
                            </select>
                        </div>

                        {/* <div className='flex items-start flex-wrap'> */}



                        {/* For Image */}
                        <div className='flex items-center pt-6 md:pl-5'>
                            <label htmlFor="fileInput" className='pr-5'>
                                <i className="fa-solid fa-plus writeIcon text-xl text-gray-500"></i>
                            </label>


                            <input type="file" id='fileInput' style={{ display: "none" }}
                                onChange={handleChange('image')} ref={file_ref} />

                            {image && (
                                <div>
                                    <img src={image} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} ref={file_ref} />
                                </div>
                            )}
                        </div>

                        {/* For Textarea */}
                        <div className="writeFormGroup pt-5 text-xl w-full">

                            <EditorMCE handleEditorChange={handleEditorChange} id="desc" value={description} />

                        </div>


                        {/* </div> */}

                    </div>




                    <button className='yellowbg absolute top-5 right-0  p-1 rounded-md'
                        onClick={handleSubmit}
                    >Publish </button>
                </form>
            </div>
        </>
    )
}

export default Write
