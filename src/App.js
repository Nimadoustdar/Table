import React from 'react';
import Navbar from './components/navber/Navbar';
import Table from './components/Table';
//Style
import './style.scss';
export default function App() {

  return (
    <div className='container'>
      <Navbar />
      <Table />

    </div>
  );
}
