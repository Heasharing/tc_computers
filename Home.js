// src/pages/Home.js
import React from 'react';
import './Home.css';
import { useTranslation } from 'react-i18next';
import LaptopPage from './Laptop';
import MonitorPage from './Monitor';

const Home = () => {
  //transalate t param
  const { t } = useTranslation();
  return (
    <>
      <div className='head-title'><h1>Home</h1></div>
      <div className='page-container'>
        <div className='laptop-page'>
          <LaptopPage sortBy="id"/>
        </div>
        <div className='monitor-page' sortBy="id"><MonitorPage/></div>
      </div>
    </>
  );
};

export default Home;
