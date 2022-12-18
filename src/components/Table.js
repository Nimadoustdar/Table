import { useEffect, useMemo, useState } from "react";
//style
import "./table.scss"

import Edit from "./edit/Edit";
//API
import { getData } from '../services/api';
import Pagination from "./pagination/Pagination";


const Table = () => {
    let PageSize = 10;

    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [findId, setFindId] = useState();


    useEffect(() => {
        const fetchApi = async () => {
            setData(await getData())
            localStorage.setItem('data', JSON.stringify(await getData()))
        }
        fetchApi()
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
                    {currentTableData.map(item => {

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

            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    )
}

export default Table