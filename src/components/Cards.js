import React from 'react'

function Cards() {
    const cardStyle = {
        width: "692px",
        height: "420px",
        flexShrink: 0,
        borderRadius: "4px",
        border: "1px solid #E0E0E0",
        background: "#FFF",
    },
        cardHeading = {
            color: "#000",
            fontSize: "22px",
            fontStyle: "normal",
            fontWeight: "bold",
            lineHeight: "134.167%", /* 29.517px */
        },
        cardText = {
            color: "#5C5C5C",
            fontFamily: "IBM Plex Sans",
            fontSize: "19px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "134.167%", /* 25.492px */
        },
        profilePic1 = {
            borderRadius: "24px",
            background: "url('/pp1.png')",
            width: "48px",
            height: "48px",
            flexShrink: 0,
        },
        profilePic2 = {
            borderRadius: "24px",
            background: "url('/pp2.png')",
            width: "48px",
            height: "48px",
            flexShrink: 0,
        },
        profilePic3 = {
            borderRadius: "24px",
            background: "url('/pp3.png')",
            width: "48px",
            height: "48px",
            flexShrink: 0,
        },
        profilePic4 = {
            borderRadius: "24px",
            background: "url('/pp4.png')",
            width: "48px",
            height: "48px",
            flexShrink: 0,
        }
    return (
        <div className='container'>
            <nav className="navbar sticky-top bg-body-tertiary mx-5 my-3">
                <ul className="nav nav-underline">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">All Posts(32)</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/">Article</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/">Event</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/">Education</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/">Job</a>
                    </li>
                </ul>
            </nav>
            <div className='d-flex float-end my-2 row row-cols-auto'>
                <i className="fa-solid fa-location-dot"></i>
                <p>Noida, India</p>
                <i className="fa-solid fa-pen mx-5"></i>
            </div>
            <div className="card mx-5 my-3" style={cardStyle}>
                <img src="/Rectangle5.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p style={cardHeading}>What if famous brands had regular fonts? Meet RegulaBrands!</p>
                    <p className="card-text" style={cardText}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                </div>
                <div className='row row-cols-auto mx-4 my-4'>
                    <div style={profilePic1}></div>
                    <p style={{ fontWeight: "bold", marginTop: "10px" }}>Sarthak Kamra</p>
                    <i class="fa-regular fa-eye" style={{ marginLeft: "15vw" , marginTop: "15px"}}></i>
                    <p className='mt-2'>1.4k views</p>
                    <i className="fa-solid fa-share-nodes" style={{ marginLeft: "auto" , marginTop: "15px"}}></i>
                </div>
            </div>
            <div className="card mx-5 my-3" style={cardStyle}>
                <img src="/Rectangle6.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p style={cardHeading}>Tax Benefits for Investment under National Pension Scheme launched by Government</p>
                    <p className="card-text" style={cardText}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                </div>
                <div className='row row-cols-auto mx-3 my-2'>
                    <div style={profilePic2}></div>
                    <p style={{ fontWeight: "bold", marginTop: "10px" }}>Sarah West</p>
                    <i class="fa-regular fa-eye" style={{ marginLeft: "15vw" , marginTop: "15px"}}></i>
                    <p className='mt-2'>1.4k views</p>
                    <i className="fa-solid fa-share-nodes" style={{ marginLeft: "auto" , marginTop: "15px"}}></i>
                </div>
            </div>
            <div className="card mx-5 my-3" style={cardStyle}>
                <img src="/Rectangle7.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p style={cardHeading}>Finance & Investment Elite Social Mixer @Lujiazui</p>
                </div>
                <div className='row row-cols-auto mx-4 my-4'>
                    <div style={profilePic3}></div>
                    <p style={{ fontWeight: "bold", marginTop: "10px" }}>Ronal Jones</p>
                    <i class="fa-regular fa-eye" style={{ marginLeft: "15vw" , marginTop: "15px"}}></i>
                    <p className='mt-2'>1.4k views</p>
                    <i className="fa-solid fa-share-nodes" style={{ marginLeft: "auto" , marginTop: "15px"}}></i>
                </div>
            </div>
            <div className="card mx-5 my-3" style={cardStyle}>
                <div className="card-body">
                    <p style={cardHeading}>Software Developer</p>
                </div>
                <div className='row row-cols-auto mx-4 my-4'>
                    <div style={profilePic4}></div>
                    <p style={{ fontWeight: "bold", marginTop: "10px" }}>Joseph Gray</p>
                    <i class="fa-regular fa-eye" style={{ marginLeft: "15vw" , marginTop: "15px"}}></i>
                    <p className='mt-2'>1.4k views</p>
                    <i className="fa-solid fa-share-nodes" style={{ marginLeft: "auto" , marginTop: "15px"}}></i>
                </div>
            </div>
        </div>
    )
}

export default Cards
