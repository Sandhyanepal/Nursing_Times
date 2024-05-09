import React, { useEffect, useState } from "react";
import { getallmessage } from "../../api/messageApi";

const AdminMessage = () => {
  let [message, setMessage] = useState([]);

  useEffect(() => {
    getallmessage().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data);
        setMessage(data);
      }
    });
  }, []);

  return (
    <div>
      <h1 className="font-semibold text-5xl ml-11 pb-12 pt-12">Messages</h1>
      {message.map((msg) => {
        return (
          <div key={msg._id} className="w-3/5 pl-12 pb-4">
            <h1 className="font-bold text-lg">{msg.name}</h1>
            <div className="flex gap-1">
              <h1 className="font-semibold">Email:</h1>
              <h2>{msg.email}</h2>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold">Message:</p>
              <p>{msg.message}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminMessage;
