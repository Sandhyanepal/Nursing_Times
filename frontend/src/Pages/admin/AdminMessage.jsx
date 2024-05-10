import React, { useEffect, useState } from "react";
import { getallmessage } from "../../api/messageApi";
import { Link } from "react-router-dom";

const AdminMessage = () => {
  let [message, setMessage] = useState([]);

  useEffect(() => {
    getallmessage().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data);
        setMessage(data.reverse());
      }
    });
  }, []);

  return (
    <div>
      <h1 className="font-semibold text-5xl pl-11 pb-12 pt-12">Messages</h1>
      {message.map((msg) => {
        return (
          <div key={msg._id} className="w-11/12 pl-12 pb-2">
            <Link to={`../messageview/${msg._id}`} className="flex pb-2">
              <h1 className="font-bold  w-1/5">{msg.name}</h1>
              <p className="font-semibold pl-9">{msg.message}</p>
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default AdminMessage;
