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
      <div className="">
        <div className="text-center text-xl mt-5">
          <h1 className="font-semibold text-3xl pb-8">Categories</h1>
          <table className="m-auto">
            <thead>
              <tr>
                <td>S.NO.</td>
                <td>Category Name</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {
                //map garna
                Category.map((category, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{category.category_name}</td>
                      <td>
                        <Link
                          to={`../updatecategory/${category._id}`}
                          className="update button rounded-s-md"
                        >
                          Update
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
          <Link to="../addcategory" className="py-10">
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
