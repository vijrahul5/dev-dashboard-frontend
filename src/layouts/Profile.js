import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader/Loader";

function Profile() {
    const [loading, setLoading] = useState(true);
    const [employee, setEmployee] = useState();

    useEffect(() => {
        (async function () {
            try {
                const res = await axios.get("/api/employee/profile");
                if (res.data.status === "Success") {
                    setEmployee(res.data.employee);
                    setLoading(false);
                }
            } catch (err) {
                alert(err.message);
            }
        })();
    }, []);

    if (loading) {
        return <Loader/>;
    } else {
        return (
            <>
                <div className="container emp-profile">
                    <form method="post">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-img">
                                    <img
                                        src={employee.picture}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="profile-head">
                                    <h5>{employee.name}</h5>
                                    <ul
                                        className="nav nav-tabs"
                                        id="myTab"
                                        role="tablist"
                                    >
                                        <li className="nav-item">
                                            <a
                                                className="nav-link active"
                                                id="home-tab"
                                                data-toggle="tab"
                                                href="#home"
                                                role="tab"
                                                aria-controls="home"
                                                aria-selected="true"
                                            >
                                                About
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <input
                                    type="submit"
                                    className="profile-edit-btn"
                                    name="btnAddMore"
                                    value="Edit Profile"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div
                                    className="tab-content profile-tab"
                                    id="myTabContent"
                                >
                                    <div
                                        className="tab-pane fade show active"
                                        id="home"
                                        role="tabpanel"
                                        aria-labelledby="home-tab"
                                    >
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{employee.name}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{employee.email}</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Job Title</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Web Developer</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>City</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{employee.city || "----"}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>State</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>
                                                    {employee.state || "----"}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Address</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>
                                                    {employee.address || "----"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default Profile;
