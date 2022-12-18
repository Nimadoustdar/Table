<<<<<<< HEAD
import "./edit.scss";
=======
import { useEffect, useState } from "react";
import "./update.scss";
>>>>>>> 26cb8b34675c7418dafcf324589821f0801dcbc6
import { useImmer } from 'use-immer'
import axios from "axios";


const Edit = ({ setOpenUpdate, user, setData, findId }) => {

    const [info, updateInfo] = useImmer({
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        phone: user.phone,
    });



    const handleFirstNameChange = (e) => {
        updateInfo((draft) => {
            draft.firstName = e.target.value;
        });
    }
    const handleLastNameChange = (e) => {
        updateInfo((draft) => {
            draft.lastName = e.target.value;
        });
    }
    const handleEmailChange = (e) => {

        updateInfo((draft) => {
            draft.email = e.target.value;
        });
    }
    const handlePhoneChange = (e) => {
        updateInfo((draft) => {
            draft.phone = e.target.value;
        });
    }

<<<<<<< HEAD

    const handleFirstNameChange = (e) => {
        updateInfo((draft) => {
            draft.firstName = e.target.value;
        });
    }
    const handleLastNameChange = (e) => {
        updateInfo((draft) => {
            draft.lastName = e.target.value;
        });
    }
    const handleEmailChange = (e) => {
        updateInfo((draft) => {
            draft.email = e.target.value;
        });
    }
    const handlePhoneChange = (e) => {
        updateInfo((draft) => {
            draft.phone = e.target.value;
        });
    }

=======
>>>>>>> 26cb8b34675c7418dafcf324589821f0801dcbc6


    const handleClick = async (e) => {
        e.preventDefault();
        axios({
            method: 'put',
<<<<<<< HEAD

            url: `https://639d89b81ec9c6657bac6730.mockapi.io/api/v1/users/${findId}`,
=======
            url: `https://639ef8747aaf11ceb88f363c.mockapi.io/users/${findId}`,
>>>>>>> 26cb8b34675c7418dafcf324589821f0801dcbc6
            data: {
                first_name: info.firstName,
                last_name: info.lastName,
                email: info.email,
                phone: info.phone,
            }
        }).then((res) => {
<<<<<<< HEAD
=======
            console.log(res.data)
>>>>>>> 26cb8b34675c7418dafcf324589821f0801dcbc6
            setData(res.data)
            setOpenUpdate(false);

        }).finally(() => {
            // refresh the page
            window.location.reload();
        })
    }
    return (
        <div className="update">
            <div className="wrapper">
                <h1>Edit Your Data</h1>
                <form>
                    <label>First Name</label>
                    <input
                        type="text"
                        value={info.firstName}
                        name="firstName"
                        onChange={handleFirstNameChange}
                    />
                    <label>Last Name</label>
                    <input
                        type="text"
                        value={info.lastName}
                        name="lastName"
                        onChange={handleLastNameChange}
                    />
                    <label>Email</label>
                    <input
                        type="text"
                        value={info.email}
                        name="email"
                        onChange={handleEmailChange}
                    />
                    <label>Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={info.phone}
                        onChange={handlePhoneChange}
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