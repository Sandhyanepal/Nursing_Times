import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../config'

const SinglePost = () => {
    const { id } = useParams()
    let [post, setPost] = useState({})
    // useEffect(()=>{
    //     const fetchData = async () => {
    //         const result = await fetch(`${API}/getpost/${id}`)
    //         const jsonResult = await result.json()

    //         setPost(jsonResult)
    //     }
    //     fetchData()
    // },[id])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch(`${API}/getpost/${id}`);
                console.log("Fetch result:", result); // Log the fetch result
                const jsonResult = await result.json();
                console.log("JSON result:", jsonResult); // Log the JSON result
                setPost(jsonResult);
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };

        console.log("ID:", id); // Log the ID
        fetchData();
    }, [id]);


    return (
        <div className='w-11/12 m-auto'>
            {id}
            <div className="singlePost">
                <div className="singlePostWrapper">

                    <img className='postImg object-cover rounded w-11/12 m-auto ' src={`${API}/${post.image}`} alt="" style={{height:'60vh'}}/>
                    <div className='flex items-center mt-5'>
                        <h1 className='singlePostTitle text-center  text-3xl font-bold  w-11/12'>
                            {post.title}
                        </h1>
                        <div className="singlePostEdit flex w-1/12 gap-5">
                            <i className="fa-regular fa-pen-to-square text-green-500"></i>
                            <i className="fa-solid fa-trash text-red-500"></i>
                        </div>
                    </div>
                    <div className="singlePostInfo flex justify-between mt-5 w-11/12 m-auto">
                        <h1>Author: <b>{post.username}</b></h1>
                        <h2>{new Date(post.createdAt).toDateString()}</h2>
                    </div>
                    <p className='w-11/12 m-auto'>{post.description}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque impedit similique, sequi obcaecati maxime. Officia laboriosam eligendi placeat iste error! Praesentium ullam quo ipsum nisi veritatis dignissimos consequatur earum autem porro veniam magnam ipsa quis ut eveniet facere rerum eum eaque vitae, consequuntur deserunt numquam soluta itaque! Voluptates nihil rerum temporibus adipisci quo. Eveniet quaerat magnam tempore eius vero necessitatibus iure inventore voluptatum repellat, libero adipisci mollitia ipsa sit accusamus nam architecto assumenda quidem culpa, corrupti obcaecati ducimus nemo? Ea veritatis voluptatibus non, facere earum sit quidem nisi. Minima quod ex, sed possimus nihil temporibus assumenda eos saepe. At ea obcaecati, et illo voluptas amet libero mollitia ratione ipsam tenetur voluptate dolor consectetur nobis eos minus temporibus repudiandae, debitis rerum necessitatibus facilis autem hic saepe! Placeat accusantium eligendi, esse magni aspernatur atque velit dicta quam veritatis alias facilis amet. Adipisci omnis porro voluptatibus repellendus. Vitae aut, impedit necessitatibus placeat culpa eligendi itaque inventore modi repudiandae vel? Suscipit consequuntur earum itaque veritatis consectetur, modi quod vero facere ipsa unde aliquam illum? In, voluptatum quis, unde voluptates deserunt doloremque rem culpa ipsam amet esse architecto beatae repellendus distinctio necessitatibus autem, excepturi iusto? Nulla esse ducimus dicta facilis consequuntur architecto deleniti ipsa! Nostrum explicabo incidunt ea asperiores nisi distinctio, officia aliquid velit quo consequatur, similique beatae ex eaque quibusdam delectus quod quos expedita magni officiis. Soluta, illum, nisi at aliquam, reiciendis debitis aspernatur optio voluptates illo corrupti cum commodi. Molestias quae assumenda vitae voluptatibus illum. Quo unde nam molestiae consectetur voluptas facilis atque magnam alias quis suscipit. Beatae cupiditate ut quasi enim laudantium totam, minus rem eveniet harum! Ut dolorem quis eum voluptatum asperiores eligendi eos magnam omnis laudantium vero dolore veniam eius, odio magni fugit optio consequuntur deleniti porro earum at, suscipit delectus nemo. Sint maxime quos dolore accusamus, eos quis odio repudiandae, unde reprehenderit aspernatur ex quisquam commodi odit sunt veniam, soluta ab omnis nemo non tempora iusto. Odit temporibus autem rerum dicta inventore officia numquam, quo exercitationem doloribus optio dolor veritatis et saepe non, velit, sit quidem earum commodi? Placeat similique aut rem vitae tempore! Doloremque temporibus deserunt facilis? Cumque beatae accusamus adipisci harum distinctio eius molestiae laboriosam, eveniet deserunt sunt ipsa aut enim voluptatem aliquid ex, nihil, at a. Veniam dicta sapiente omnis blanditiis, veritatis dolor alias, possimus amet ad repudiandae reiciendis. Consectetur expedita necessitatibus dignissimos ad veritatis quas dolorem tempora aliquid itaque. Laudantium itaque illum beatae neque quas ea ipsa molestias inventore perferendis accusamus maxime a doloribus natus adipisci nemo, impedit architecto aliquam nam facilis. Sequi dolorum perspiciatis, maxime nulla tenetur eveniet asperiores fugit eaque voluptatum repellendus, recusandae eos! Ea est nam quos quaerat cum, exercitationem natus labore ducimus reiciendis magni. Deserunt, iure! Repudiandae exercitationem odit asperiores omnis sed. Aperiam quos fugiat incidunt iure tenetur, vel libero tempore id magni eius tempora optio necessitatibus illo quo dolor odio reprehenderit placeat vero maiores eligendi officia. Inventore excepturi deserunt unde animi delectus, consequatur aperiam iste assumenda expedita quis culpa, cumque vitae rem maxime doloremque natus quisquam. Nam, architecto quisquam.</p>
                </div>
            </div>
        </div>
    )
}

export default SinglePost
