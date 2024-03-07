import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import AccountImg from "../../img/Logo.png";
import "./Account.css";
import { useAuth } from "../../components/AuthContext";
import { supabase } from "../../config/supabaseClient";

function Account() {
  const { user } = useAuth();
  const [shopData, setShopData] = useState({
    ownerName: "",
    address: "",
    contact: "",
  });
  const [existingData, setExistingData] = useState(false); // New state to track existing data

  useEffect(() => {
    fetchShopData();
  }, []);

  const fetchShopData = async () => {
    try {
      const { data, error } = await supabase
        .from("Shop")
        .select("*")
        .eq("id", user.user.id)
        .single();

      if (error) {
        throw error;
      }

      if (data) {
        setShopData({
          ownerName: data.ownerName,
          address: data.address,
          contact: data.contact,
        });
        setExistingData(true); // Set existingData to true if data is found
      }
    } catch (error) {
      console.error("Error fetching shop data:", error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShopData({
      ...shopData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!existingData) {
        // Enable save button if no existing data
        // Update Shop table with the modified data
        const { error } = await supabase
          .from("Shop")
          .insert({
            id: user.user.id,
            ownerName: shopData.ownerName,
            address: shopData.address,
            contact: shopData.contact,
          })
          .eq("id", user.user.id);

        if (error) {
          throw error;
        }

        console.log("Shop data updated successfully");
        setExistingData(true); // Set existingData to true after saving data
      }
    } catch (error) {
      console.error("Error updating shop data:", error.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // Update the table with the modified data
      const { error } = await supabase
        .from("Shop")
        .update({
          ownerName: shopData.ownerName,
          address: shopData.address,
          contact: shopData.contact,
        })
        .eq("id", user.user.id);

      if (error) {
        throw error;
      }

      console.log("Shop data updated successfully");
    } catch (error) {
      console.error("Error updating shop data:", error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg1">
        <div className="container-fluid align-items-center d-flex min-vh-100 ps-3 pe-3 ">
          <div className="row justify-content-center align-items-center mt-5">
            <div className="col-12 col-md-4 text-center">
              <img
                src={AccountImg}
                alt=""
                className="img-fluid rounded-5 p-3 "
              />
            </div>
            <div className="col-12 col-md-8 my-4">
              <form onSubmit={handleSubmit} className="row g-3">
                <div className="form-floating mb-3 col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={user.user.email}
                    readOnly
                  />
                  <label htmlFor="email">Email Address</label>
                </div>

                <div className="form-floating mb-3 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="ownerName"
                    name="ownerName"
                    value={shopData.ownerName}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="ownerName">Owner Name</label>
                </div>

                <div className="form-floating mb-3 col-md-8">
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={shopData.address}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="address">Address</label>
                </div>

                <div className="form-floating mb-3 col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    id="contact"
                    name="contact"
                    value={shopData.contact}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="contact">Contact</label>
                </div>
                <div className="col-6">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={existingData}
                  >
                    Save
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary mx-2"
                    onClick={handleUpdate}
                    disabled={!existingData} // Disable update button if no existing data
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Account;
