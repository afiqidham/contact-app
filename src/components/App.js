import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import ConfirmDelete from "./ConfirmDelete";
import EditContact from "./EditContact";
import { ContactCrud, ContactCrudProvider } from "../context/ContactCrud";


function App() {


  return (
    <div className="ui container">
      <Router>
        <Header />
        <ContactCrudProvider>
          <Routes>
            <Route
              path="/"
              exact
              element={<ContactList />}
            />
            <Route
              path="/add"
              element={<AddContact />}
            />
            <Route
              path="/edit"
              element={<EditContact />}
            />
            <Route path="/contact/:id" element={<ContactDetail />} />
            <Route
              path="/delete"
              element={<ConfirmDelete />}
            />
          </Routes>
        </ContactCrudProvider>
      </Router>
    </div>
  );
}

export default App;
