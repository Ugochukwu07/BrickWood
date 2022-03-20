import React from "react"

function Footer() {
    return (
                <nav>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Messages</button>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab"> home </div>
                        <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab"> profile </div>
                        <div className="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab"> messages </div>
                    </div>
                </nav>
    )
}

function Header() {
    return (
        <nav className="bg-dark p-1">
                    <ul className="nav nav-tabs" id="navId" role="tablist">
                        <li className="nav-item">
                            <a href="#tab1Id" className="nav-link active" data-bs-toggle="tab">Active</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#!" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#tab2Id">Action</a>
                                <a className="dropdown-item" href="#tab3Id">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#tab4Id">Action</a>
                            </div>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a href="#tab5Id" className="nav-link" data-bs-toggle="tab">Another link</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a href="#!" className="nav-link disabled" data-bs-toggle="tab">Disabled</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="tab1Id" role="tabpanel"></div>
                        <div className="tab-pane fade" id="tab2Id" role="tabpanel"></div>
                        <div className="tab-pane fade" id="tab3Id" role="tabpanel"></div>
                        <div className="tab-pane fade" id="tab4Id" role="tabpanel"></div>
                        <div className="tab-pane fade" id="tab5Id" role="tabpanel"></div>
                    </div>
                </nav>
    )
}
                
export {Header, Footer}