import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function MyNavbar() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">
                    Sprinklr Developer Dashboard
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/signin">SignIn</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
}
