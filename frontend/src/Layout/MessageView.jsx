import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getmessage } from '../api/messageApi'

const MessageView = () => {

  const { id } = useParams()

  let [message, setMessage] = useState('');


  // To fetch the message
  useEffect(()=>{
    getmessage(id).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data);
        setMessage(data);
      }
    });
  },[])


  return (
    <div className='w-11/12 m-auto'>
      <div className='pt-12'>
        <h1 className='font-semibold text-lg'> <span className='font-bold text-xl'>From:</span> {message.name}</h1>
        <h1>To: nursing times</h1>
        <h1>Email: {message.email}</h1>
        <h1>Message: {message.message}</h1>

      </div>
    </div>
  )
}

export default MessageView
