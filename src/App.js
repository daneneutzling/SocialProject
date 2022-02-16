import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes as ReactRoutes,
  Route,
  Link,
  Outlet,
} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ReactRoutes>
          <Route exact path="/" element={<Menu />} />
          <Route index element={<Home />} />
          <Route exact path="reports" element={<Reports />} />
          <Route exact path="search" element={<Search />} />
          <Route exact path="contact" element={<Contact />} />
        </ReactRoutes>
      </BrowserRouter>
    </div>
  );
}

//FUNÇÕES UTILIZADAS

//MENU INICIAL
function Menu() {
  return (
    <div className="Menu">
      <div className="logo">
        <h1>SOCIAL PROJECT</h1>
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/report">Report</Link>
        <Link to="/search">Search</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <hr />

      <Outlet />
    </div>
  );
}

//HOMEPAGE
function Home() {
  return (
    <div>
      <Content />
    </div>
  );
}

//PÁGINA PARA REPORTAR
function Reports() {
  const [name, setName] = useState('');
  const [report, setReport] = useState('');

  return (
    <div>
      <strong>Your name:</strong>
      <input
        type="text"
        name="name"
        className="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <strong>Report an event:</strong>
      <textarea
        name="report"
        className="report"
        value={report}
        onChange={(e) => setReport(e.target.value)}
      />
      <br />
      <button className="button">Submit</button>
    </div>
  );
}

//PÁGINA DE BUSCAS
function Search() {
  return (
    <div>
      <h1>SEARCH</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}

//INFORMAÇÕES DE CONTATO
function Contact() {
  return (
    <div>
      <h1>CONTACT</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}

//CONTEÚDO DA PÁGINA
function Content() {
  return (
    <div>
      <div className="center">
        <h3>Do you know the porpouse of this project?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <br />
      </div>

      <div className="search-map">
        <h3>HELP THE NEXT!</h3>
        <h4>*search box*</h4>
        <h4>*maps*</h4>
      </div>

      <div className="details">
        <h4>More details</h4>
        <p>
          - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="report-event">
        <h4>To report a new event</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <button className="button">
          {' '}
          <strong>Report</strong>{' '}
        </button>
      </div>
    </div>
  );
}
