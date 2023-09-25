import React from "react";
import { Link } from "react-router-dom";
import { useContactCrud } from "../context/ContactCrud";

const ConfirmDelete = (props) => {

    const {id, name} = props.location.state.contact;

    
    const {removeContactHandler} = useContactCrud();
    const deleteContactHandler = (id) => {
        removeContactHandler(id);
     
    }

    return(
        <div className="ui main">
            <div className="ui card" style={{ marginTop:"100px" }}>
                <h3>Are you confirm to delete {name} contact?</h3>
                <div>
                    <Link to="/">
                    <button>No</button>
                    </Link>
                    <Link to="/">
                    <button onClick={()=>deleteContactHandler(id)}>Yes</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ConfirmDelete;