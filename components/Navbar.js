import React from 'react'
import styles from '../styles/Navbar.module.css'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container ">
                    <a className="navbar-brand fw-bold fs-4" >BusinessBoutique.</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{justifyContent:'flex-end'}}>
                        <ul className="navbar-nav me-2 gap-3 py-3 mb-2 mb-lg-0" >
                            <li className="nav-item">
                                <a className="nav-link text-black" aria-current="page" >Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black" >Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black" >Pages</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black" >Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black" >FAQ</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className={styles.button} type="submit">Get Started</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar