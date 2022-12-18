import React, { useState } from 'react';
import Navbar from './components/navber/Navbar';
import Table from './components/Table';
import Pagination from './Pagination';
//Style
import './style.scss';
//data length
let PageSize = 5;

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([])

  return (
    <div className='container'>
      <Navbar />
      <Table
        currentPage={currentPage}
        PageSize={PageSize}
        data={data}
        setData={setData}
      />
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  );
}
