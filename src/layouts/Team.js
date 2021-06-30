import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TeamMember from "./TeamMember";
import Loader from "../components/Loader/Loader";

function Team() {
    const [loading, setLoading] = useState(true);
    const [team, setTeam] = useState({});

    async function handleAddBtn(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        for (let key in data) {
            if (data[key] === "") {
                alert("Please Fill In All The Fields");
                return;
            }
        }
        document.querySelectorAll(".teamForm input").forEach((element) => {
            element.value = "";
        });
        try {
            const res = await axios.post("/api/employee/team", data);
            if (res.data.status === "Success") {
                alert("Team Member Added");
            } else {
                throw new Error(res.data.status);
            }
        } catch (err) {
            alert(err.message);
        }
    }
    async function handleDeleteBtn(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        for (let key in data) {
            if (data[key] === "") {
                alert("Please Fill In All The Fields");
                return;
            }
        }
        document.querySelectorAll(".teamForm input").forEach((element) => {
            element.value = "";
        });
        try {
            const res = await axios.delete("/api/employee/team", {
                data: data,
            });
            if (res.data.status === "Success") {
                alert("Team Member Deleted");
            } else {
                throw new Error(res.data.status);
            }
        } catch (err) {
            alert(err.message);
        }
    }
    useEffect(() => {
        (async function () {
            try {
                const res = await axios.get("/api/employee/team");
                if (res.data.status === "Success") {
                    setTeam(res.data.teamStandUp);
                    setLoading(false);
                    console.log(res.data.teamStandUp);
                } else {
                    console.log(res.data.status);
                }
            } catch (err) {
                alert(err.message);
            }
        })();
    }, []);

    if (loading === true) {
        return <Loader />;
    } else {
        return (
            <>
                <form className="teamForm" onSubmit={handleAddBtn}>
                    <div>
                        <label htmlFor="employeeEmail">Add Team Member</label>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            name="employeeEmail"
                            className="form-control"
                        />
                    </div>
                    <input
                        type="submit"
                        className="submit btn btn-success"
                        value="Add"
                    />
                </form>
                <form className="teamForm" onSubmit={handleDeleteBtn}>
                    <div>
                        <label htmlFor="employeeEmail">
                            Delete Team Member
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            name="employeeEmail"
                            className="form-control"
                        />
                    </div>
                    <input
                        type="submit"
                        className="submit btn btn-success"
                        value="Delete"
                    />
                </form>
                {team ? (
                    <ul className="teamStandUpList">
                        {team.map((teamMember) => {
                            return (
                                <TeamMember
                                    key={teamMember.employeeId}
                                    teamMember={teamMember}
                                />
                            );
                        })}
                    </ul>
                ) : null}
            </>
        );
    }
}

export default Team;
