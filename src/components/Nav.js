import React, { useRef, useState } from 'react'

function Nav() {
    const ref = useRef(null)
    const refClose = useRef(null)
    const [signed, setSigned] = useState(0)
    const [accntName, setAccntName] = useState("")

    const handleClick = () => {
        refClose.current.click();
        setSigned(1)
    }

    const launchModal = () => {
        ref.current.click();
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand mx-5" href="/">
                        <img src="/whole.png" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ flex: "1", display: "flex", justifyContent: "center" }}>
                            <form className="row row-cols-auto" role="search" >
                                <i class="fa-solid fa-magnifying-glass my-3"></i>
                                <input className="form-control me-2" type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search" style={{ width: "350px", borderRadius: "50px" }} />
                            </form>
                        </ul>
                        <ul>
                            <li className="nav-item dropdown mx-5">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontWeight: 500 }}>
                                   {signed === 0 ? <a>Create account. It’s free!</a> : <a className='row row-cols-auto' style={{textDecorationLine: "none", color: "black"}}>
                                    <div><img src="/pp4.png" alt="Profile Pic" style={{ borderRadius: "50px" , width: "48px", height: "48px" }} /></div>
                                    {accntName}</a>}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" onClick={launchModal}>Sign In</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" onClick={launchModal}>Sign Up</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                <button type="button" ref={ref} class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form className="row g-3 my-3">
                                    <h1 className='mt-3'>Please fill your details</h1>
                                    <div className="row g-3">
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="First name" aria-label="First name" name="name"  required  onChange={(e) => setAccntName(e.target.value)}/>
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"  />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="email" className="form-label" >Email</label>
                                        <input type="email" className="form-control" id="email" placeholder="abc@gmail.com" name="email"  required />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="password" className="form-label" >Password</label>
                                        <input type="password" className="form-control" id="password" name="password" minLength={5} required />
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button ref={refClose} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={handleClick}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Nav
