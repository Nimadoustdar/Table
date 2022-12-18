import { useState } from "react";
import "./update.scss";
import { useImmer } from 'use-immer'

const Edit = ({ setOpenUpdate, user, setData }) => {

    const [texts, setTexts] = useState({
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        phone: user.phone,
    });


    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
    };


    const handleClick = async (e) => {
        e.preventDefault();
        setOpenUpdate(false);
    }
    return (
        <div className="update">
            <div className="wrapper">
                <h1>Edit Your Data</h1>
                <form>
                    <label>First Name</label>
                    <input
                        type="text"
                        value={texts.firstName}
                        name="firstName"
                        onChange={handleChange}
                    />
                    <label>Last Name</label>
                    <input
                        type="text"
                        value={texts.lastName}
                        name="lastName"
                        onChange={handleChange}
                    />
                    <label>Email</label>
                    <input
                        type="text"
                        value={texts.email}
                        name="email"
                        onChange={handleChange}
                    />
                    <label>Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={texts.phone}
                        onChange={handleChange}
                    />
                    <button onClick={handleClick}>Update</button>
                </form>
                <button className="close" onClick={() => setOpenUpdate(false)}>
                    close
                </button>
            </div>
        </div>
    );
};

export default Edit;