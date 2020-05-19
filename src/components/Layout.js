import React from 'react'
import Home from './home/Home';
import Login from './login/Login';
import News from './news/News';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";


function Layout() {
    return (
        <div>
            <Router>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <NavLink to="/" exact>
                        <Navbar.Brand>React-MA3</Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink to="/" exact className="nav-link">
                                Home
                            </NavLink>
                            <NavLink to="/login" className="nav-link">
                                Login
                            </NavLink>
                            <NavLink to="/news" className="nav-link">
                                News
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container className="appWrapper">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/news" component={News} />
                    </Switch>
                </Container>
            </Router>
        </div>
    );
}

export default Layout;