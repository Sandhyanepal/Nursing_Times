import React, { useEffect, useState } from "react";
import { deleteCategory, getAllCategory } from "../../api/categoryApi";
import { Link } from "react-router-dom";

const Index = () => {
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
      deleteCategory(id).then((data) => {
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
          <h1 className="font-semibold text-5xl" style={{ marginTop: '68px' }}>Categories</h1>
        <div className=" text-xl mt-12">
          <table >
            <thead  >
              <tr >
                <td className="border-none ">Category Name</td>
                <td className="border-none text-center">Action</td>
              </tr>
            </thead>
            <tbody>
              {
                //map garna
                Category.map((category, i) => {
                  return (
                    <tr key={i} >
                      <td className="border-none">{category.category_name}</td>
                      <td className="border-none">
                        <Link
                          to={`../updatecategory/${category._id}`}><button
                          className="update button rounded-s-md "
                        >
                          Update
                          </button>
                        </Link>
                        <button
                          className="delete button rounded-e-md my-2"
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
          <Link to="../addcategory" className="py-10 pl-4">
            <button className="add button rounded-md mt-5">
              Add New Category
            </button>
          </Link>
        </div>
      </div>
      
    </>
  );
};

export default Index;




