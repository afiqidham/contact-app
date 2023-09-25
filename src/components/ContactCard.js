import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";
import { useContactCrud } from "../context/ContactCrud";

const ContactCard = (props) => {
    const {removeContactHandler} = useContactCrud();

    const deleteContact = (id) => {
        removeContactHandler(id);
    }
    const {id, name, email} = props.contact;
    return(
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" style={{ marginTop:"10px" }}/>
                <div className="content">

                    <Link to={{ 
                        pathname:'/contact/${id}', 
                        state:{contact: props.contact
                        }}}>
                    <div className="header">
                        {name}
                    </div>
                    <div>
                        {email}
                    </div>
                    </Link>

                    <i 
                    className="trash alternate outline icon" 
                    style={{ color:"red", marginTop:"7px", marginLeft:"10px" }}
                    onClick={()=> deleteContact(id)}
                    ></i>
                    

                    <Link 
                        to = {'/edit'}
                        state = {{ contact: props.contact }}
                    >
                    <i 
                    className="edit alternate outline icon" 
                    style={{ color:"red", marginTop:"7px" }}
                    ></i>
                    </Link>
                </div>
            </div>
    );
};

export default ContactCard;