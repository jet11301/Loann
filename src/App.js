import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MainHome from './components/layouts/MainHome';


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHome />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
