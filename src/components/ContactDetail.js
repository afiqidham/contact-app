import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import man from "../images/man.png";

const ContactDetail = (props) => {
    console.log(props);
    const {name, email } = props.location.state.contact;
    return(
        <div className="main">
            <div className="ui card ">
                <div className="ui image">
                    <img src={man} alt="man"/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                <button className="ui button blue center">Back</button>
                </Link>
            </div>
        </div>
    );
};

export default ContactDetail;