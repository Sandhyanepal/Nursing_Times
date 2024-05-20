import React, { useEffect, useState } from "react";
import { deleteCategory, getAllCategory } from "../../api/categoryApi";
import { Link } from "react-router-dom";
import { isAuthenticate } from "../../api/userApi";

const Index = () => {

  let {token} = isAuthenticate()

  let [Category, setCategory] = useState([]);
  let [deleteSuccess, setDeleteSuccess] = useState(false);

  useEffect(() => {
    getAllCategory().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategory(data);
      }
    });
  }, [deleteSuccess]);

  const handleDelete = (id) => (e) => {
    setDeleteSuccess(false);
    console.log(id);
    const confirmed = window.confirm(
      "Are you sure you want to delete this category"
    );
    if (confirmed === true) {
      deleteCategory(id, token)
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          setDeleteSuccess(true);
          alert(data.msg);
        }
      });
    }
  };

  return (
    <>
      <div className="w-11/12 m-auto ">
          <h1 className="text-5xl font-semibold md:w-full" style={{ marginTop: '68px' }}>Categories</h1>
        <div className="sm:text-xl text-xl mt-12">
          <table >
            <thead  >
              <tr >
                <td className="border-none md:text-2xl sm:text-xl text-lg pl-6">Category Name</td>
                <td className="border-none text-center md:text-2xl sm:text-xl text-lg">Action</td>
              </tr>
            </thead>
            <tbody>
              {
                //map garna
                Category.map((category, i) => {
                  return (
                    <tr key={i} >
                      <td className="border-none sm:text-xl pl-6">{category.category_name}</td>
                      <td className="border-none">
                        <Link
                          to={`../updatecategory/${category._id}`}><button
                          className="update button rounded-s-md sm:text-xl"
                        >
                          Update
                          </button>
                        </Link>
                        <button
                          className="delete button rounded-e-md my-2 sm:text-xl"
                          onClick={handleDelete(category._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
          <Link to="../addcategory" className="py-10 pl-6">
            <button className="add button rounded-md mt-5 md:text-xl sm:text-lg text-base">
              Add New Category
            </button>
          </Link>
        </div>
      </div>
      
    </>
  );
};

export default Index;




