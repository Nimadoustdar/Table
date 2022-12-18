import { useEffect, useMemo, useState } from "react";
//components
import Edit from "./edit/Edit";
//style
import "./table.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
//API
import { getData } from '../services/api';


const Table = ({ PageSize, currentPage, setData, data }) => {

    const [openUpdate, setOpenUpdate] = useState(false);
    const [loading, setLoading] = useState(true)
    const [findId, setFindId] = useState();


    //fetch data from api
    useEffect(() => {
        const fetchApi = async () => {
            setData(await getData())
            localStorage.setItem('data', JSON.stringify(await getData()))
        }
        fetchApi()
        setLoading(false)
    }, [])


    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, data]);




    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }


    return (
        <>
            <table className='datatable'>
                <thead>
                    <tr className="datatableTitles">
                        <th className="datatableTitle">ID</th>
                        <th className="datatableTitle">FIRST NAME</th>
                        <th className="datatableTitle">LAST NAME</th>
                        <th className="datatableTitle">EMAIL</th>
                        <th className="datatableTitle">PHONE</th>
                        <th className="datatableTitle">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? <p>loading</p> : currentTableData.map(item => {

                        return (
                            <tr key={item.id}>
                                <td className='datagrid'>{item.id}</td>
                                <td className='datagrid'>{item.first_name}</td>
                                <td className='datagrid'>{item.last_name}</td>
                                <td className='datagrid'>{item.email}</td>
                                <td className='datagrid'>{item.phone}</td>
                                <td className='datagrid'>
                                    <button
                                        className="editeButton"
                                        onClick={() => {
                                            setOpenUpdate(true);
                                            setFindId(item.id)
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="deleteButton"
                                        onClick={() => { handleDelete(item.id) }}
                                    >
                                        Delete
                                    </button>


                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {openUpdate && <Edit setOpenUpdate={setOpenUpdate} findId={findId} user={data} setData={setData} />}
        </>
    )
}

export default Table