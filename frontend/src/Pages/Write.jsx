import React, { useState } from 'react'

const Write = () => {

    const [title, setTitle] = useState('')
    const [username, setUsername] = useState('')
    const [desc, setDesc] = useState('')
    const [file, setFile] = useState(null)
    // const [content,setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newPost = {
            username,
            title,
            desc,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename)
            data.append('file', file);
            newPost.image = filename;
            try {
                // upload file
                await fetch('/upload', {
                    method: 'POST',
                    body: data,
                })
            }
            catch (err) {
                console.error('Error:', err);
            }
            try {
                const response = await fetch('/posts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newPost),
                });
                const data = await response.json();
                window.location.replace('/post/' + data._id);
            }
            catch (err) {
                console.error('Error:', err);
            }
        }

    }

    return (
        <>

            {file && (
                <img src={URL.createObjectURL(file)} alt="" className='w-3/5 h-72 m-auto mt-8  object-cover object-center rounded-lg' />
            )}


            <div className="write w-11/12 m-auto pt-9">
                <form className='writeForm relative' onSubmit={handleSubmit}>
                    <div className="writeFormGroup ml-36 flex items-center">
                        <label htmlFor="fileInput">
                            <i className="fa-solid fa-plus writeIcon text-xl text-gray-500"></i>
                        </label>

                        <input type="file" id='fileInput' style={{ display: "none" }} onChange={e => setFile(e.target.files[0])} />

                        <input type="text" placeholder='Title' className='text-3xl p-5 ml-2 focus:outline-none' style={{ width: "60vw" }} onChange={(e)=> setTitle(e.target.value)}/>
                    </div>

                    <div className="writeFormGroup ml-40 text-xl">

                        <textarea placeholder='Tell your story...' type="text" className='focus:outline-none resize-none' style={{ width: "70vw", height: "50vh" }} onChange={(e)=> setDesc(e.target.value)}></textarea>
                    </div>
                    <button className='absolute top-6 right-28 text-white bg-yellow-500 p-1 rounded-md' type='submit'>Publish</button>
                </form>
            </div>
        </>
    )
}

export default Write
