import axios from "axios";

class Auth {
    async login(tokenId) {
        try {
            const res = await axios.post("/api/auth/signin", {
                token: tokenId,
            });
            if (res.data.status === "Success") {
                alert("Sign In Complete");
                window.location.replace("/dashboard");
            } else {
                alert(res.data.status);
            }
        } catch (err) {
            alert(err.message);
        }
    }
    async logout() {
        try {
            const res = await axios.get("/api/auth/signout");
            if (res.data.status === "Success") {
                window.location.replace("/");
                alert("Sign Out Complete");
            } else {
                throw new Error(res.data.status);
            }
        } catch (err) {
            alert(err.message);
        }
    }
}

export default new Auth();
