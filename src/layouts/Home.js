import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import StandUp from "../components/StandUp/StandUp";
import Loader from "../components/Loader/Loader";

function Home() {
    const [loading, setLoading] = useState(true);
    const [standUp, setStandUp] = useState(false);

    useEffect(() => {
        (async function () {
            try {
                const res = await axios.get("/api/employee/profile");
                if (res.data.status === "Success") {
                    if (res.data.employee.manager) {
                        setStandUp(true);
                    }
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
        return <>{standUp ? <StandUp /> : null}</>;
    }
}

export default Home;
