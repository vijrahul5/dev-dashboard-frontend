import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
function StandUp() {
    const [loading, setLoading] = useState(true);
    const [standUp, setStandUp] = useState();

    useEffect(() => {
        (async function () {
            try {
                const res = await axios.get("/api/employee/standup");
                if (res.data.status === "Success") {
                    console.log(res.data.standUp);
                    setStandUp(res.data.standUp);
                }
                setLoading(false);
            } catch (err) {
                alert(err.message);
            }
        })();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        for (let key in data) {
            if (data[key] === "") {
                alert("Please Fill In All The Fields");
                return;
            }
        }
        document.querySelectorAll(".standUpform input").forEach((element) => {
            element.value = "";
        });
        try {
            const res = await axios.post("/api/employee/standup", data);
            if (res.data.status === "Success") {
                alert("Stand Up Submitted Successfully");
            } else {
                throw new Error(res.data.status);
            }
        } catch (err) {
            alert(err.message);
        }
    }
    async function handleEdit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        for (let key in data) {
            if (data[key] === "") {
                alert("Please Fill In All The Fields");
                return;
            }
        }
        document.querySelectorAll(".standUpform input").forEach((element) => {
            element.value = "";
        });
        try {
            const res = await axios.patch("/api/employee/standup", data);
            if (res.data.status === "Success") {
                alert("Stand Up Edited Successfully");
            } else {
                throw new Error(res.data.status);
            }
        } catch (err) {
            alert(err.message);
        }
    }

    if (loading) {
        return <Loader/>;
    } else {
        return (
            <>
                {standUp ? (
                    <form className="standUpForm" onSubmit={handleEdit}>
                        <label htmlFor="question1">
                            What work was done yesterday ?
                        </label>
                        <input
                            type="textarea"
                            placeholder="Answer"
                            name="question1"
                            defaultValue={standUp.question1}
                            className="form-control"
                        />
                        <label htmlFor="question2">
                            What is the agenda for today ?
                        </label>
                        <input
                            type="textarea"
                            placeholder="Answer"
                            name="question2"
                            defaultValue={standUp.question2}
                            className="form-control"
                        />
                        <label htmlFor="question3">
                            What work has been done today ?
                        </label>
                        <input
                            type="textarea"
                            placeholder="Answer"
                            name="question3"
                            defaultValue={standUp.question3}
                            className="form-control"
                        />

                        <input type="submit" className="submit btn btn-success mt-1" value="Edit" id="floatingTextarea"/>
                    </form>
                ) : (
                    <form className="standUpForm" onSubmit={handleSubmit}>
                        <label htmlFor="question1">
                            What work was done yesterday ?
                        </label>
                        <input
                            type="textarea"
                            placeholder="Answer"
                            name="question1"
                            className="form-control"
                        />
                        <label htmlFor="question2">
                            What is the agenda for today ?
                        </label>
                        <input
                            type="textarea"
                            placeholder="Answer"
                            name="question2"
                            className="form-control"
                        />
                        <label htmlFor="question3">
                            What work has been done today ?
                        </label>
                        <input
                            type="textarea"
                            placeholder="Answer"
                            name="question3"
                            className="form-control"
                        />

                        <input
                            type="submit"
                            className="submit btn btn-success mt-1"
                            value="Submit"
                        />
                    </form>
                )}
            </>
        );
    }
}

export default StandUp;
