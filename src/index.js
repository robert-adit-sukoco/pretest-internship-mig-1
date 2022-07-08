import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './routes/Home';
import NotHome from './routes/NotHome';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Sidebar from './components/Sidebar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='bg-[#ecf4f1] min-h-screen flex flex-row'>
      <Sidebar />
      <div className="px-5 py-3 w-full ml-5 sm:ml-20">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="other" element={<NotHome />}/>

            <Route path="*" element={<div>Page not found</div>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
