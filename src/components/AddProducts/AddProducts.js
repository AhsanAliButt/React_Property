import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddProductsStyle.css";
import { useHistory } from "react-router-dom";

const AddProducts = () => {
  const token = localStorage.getItem("usersdatatoken");
  console.log("TOKEN SAVED IN LOCAL STORAGE", token);

  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brandName, setBrandName] = useState("");
  const [category, setCategory] = useState("");

  const history = useHistory();

  const addProduct = async (e) => {
    e.preventDefault();
    if (!token) {
      alert("You Need to Login");
      history.push("/SignIn");
    }

    console.log("DESCRIPTION", description);

    if (name === "") {
      toast.warning("name is required!", {
        position: "top-center",
      });
    } else if (description === "") {
      toast.error("decsription is required!", {
        position: "top-center",
      });
    } else if (price === "") {
      toast.error("price is required!", {
        position: "top-center",
      });
    } else if (imageUrl === "") {
      toast.error("imageUrl is required!", {
        position: "top-center",
      });
    } else if (brandName === "") {
      toast.error("BrandName is required!", {
        position: "top-center",
      });
    } else if (category === "") {
      toast.error("Category is required!", {
        position: "top-center",
      });
    } else {
      const data = await fetch("http://localhost:8001/api/product/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          name,
          description,
          price,
          imageUrl,
          brandName,
          stock: 12,
          category,
          token,
        }),
      });

      const res = await data.json();
      console.log(res.status);

      if (res.status === "Status Success") {
        history.push("/Home");
        toast.success("Product Registered SuccessFully 😃!", {
          position: "top-center",
        });
        setName("");
        setDescription("");
        setPrice("");
        setBrandName("");
        setCategory("");
      }
    }
  };
  return (
    <>
      {token ? (
        <section>
          <div className="form_data">
            <div className="form_heading">
              <h1> Sell Your Properties Now on Good Rates</h1>
              <p style={{ textAlign: "center" }}>Add New Sell Posts</p>
            </div>

            <form>
              {/* Name */}
              <div className="form_input">
                <label htmlFor="name"> Enter Property Title</label>
                <div className="two">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    id="name"
                    placeholder=" Property Title"
                  />
                </div>
              </div>
              {/* decsription */}
              <div className="form_input">
                <label htmlFor="description"> Enter Your description</label>
                <div className="two">
                  <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    name="description"
                    id="description"
                    placeholder=" Add Your Brand Name"
                  />
                </div>
              </div>
              {/* Price */}
              <div className="form_input">
                <label htmlFor="price">price</label>
                <div className="two">
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    name="price"
                    id="price"
                    placeholder="Enter Your price"
                  />
                </div>
              </div>
              {/* ImageURL */}
              <div className="form_input">
                <label htmlFor="price"> Enter Your image Url</label>
                <div className="two">
                  <input
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    name="imageUrl"
                    id="imageUrl"
                    placeholder=" Add Image URL"
                  />
                </div>
              </div>
              {/* BrandName */}
              <div className="form_input">
                <label htmlFor="brandName"> Enter Your BrandName</label>
                <div className="two">
                  <input
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    name="brandName"
                    id="brandName"
                    placeholder=" Add Your Brand Name"
                  />
                </div>
              </div>
              <div className="form_input">
                <label htmlFor="category"> Category</label>
                <div className="two">
                  <input
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    name="category"
                    id="category"
                    placeholder=" Category Name"
                  />
                </div>
              </div>

              <button className="btn" onClick={addProduct}>
                Create Product
              </button>
            </form>
            <ToastContainer />
          </div>
        </section>
      ) : (
        <section>
          <div className="form_data">
            <h1> Please Login to Add Products </h1>
          </div>
        </section>
      )}
    </>
  );
};

export default AddProducts;
