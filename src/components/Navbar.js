import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {

    render() {
        return (

            <div className="container-fluid ">
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark mb-2">
                    <div className="container-fluid" style={{
                        fontFamily: ' "Playfair Display", Georgia, "Times New Roman" ,serif'
                    }}>
                        <Link className="navbar-brand" to="/">NewsPanda</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item " > <Link className="nav-link" to="/general">General  <i className="bi bi-newspaper " ></i></Link> </li>
                                <li className="nav-item"> <Link className="nav-link" to="/business">Business <i className="bi bi-briefcase"></i></Link> </li>
                                <li className="nav-item"> <Link className="nav-link" to="/science">Science <i className="bi bi-rocket"></i> </Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/technology">Technology  <i className="bi bi-cpu"></i> </Link> </li>
                                <li className="nav-item"> <Link className="nav-link" to="/sports">Sports <i className="bi bi-trophy"></i></Link> </li>
                                <li className="nav-item"> <Link className="nav-link" to="/health">Health <i className="bi bi-lungs"></i></Link> </li>
                                <li className="nav-item"> <Link className="nav-link" to="/entertainment">Entertainment <i className="bi bi-film"></i></Link> </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
};
