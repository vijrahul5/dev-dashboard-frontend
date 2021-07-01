import React from "react";
import TeamMember from "./TeamMember";
import Loader from "../components/Loader/Loader";
import { useUpdateTeam, useFetchEmployeeTeamData } from "../Api";

function Team() {
    const [loading, data, error] = useFetchEmployeeTeamData();
    const [addError, deleteError, addTeamMember, deleteTeamMember] =
        useUpdateTeam();
    if (error !== false) {
        return <h1>{error}</h1>;
    }
    if (deleteError !== false) {
        return <h1>{deleteError}</h1>;
    }
    if (addError !== false) {
        return <h1>{addError}</h1>;
    }
    async function handleAddBtn(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        for (let key in data) {
            if (data[key] === "") {
                alert("Please Fill In All The Fields");
                return;
            }
        }
        document.querySelectorAll(".teamForm input").forEach((element) => {
            element.value = "";
        });
        addTeamMember(data);
    }
    async function handleDeleteBtn(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        for (let key in data) {
            if (data[key] === "") {
                alert("Please Fill In All The Fields");
                return;
            }
        }
        document.querySelectorAll(".teamForm input").forEach((element) => {
            element.value = "";
        });
        deleteTeamMember(data);
    }

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
                        className="submit btn btn-dark"
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
                        className="submit btn btn-dark"
                        value="Delete"
                    />
                </form>
                {data.length !== 0 ? (
                    <ul className="teamStandUpList">
                        {data.map((teamMember) => {
                            return (
                                <TeamMember
                                    key={teamMember.email}
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
