import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import api from "../api/contacts"


const contactCrud = createContext();

export function ContactCrudProvider ({children}) {
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    //RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    if(response.data) setContacts(response.data);
  }

    //AddContacts
  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

    //UpdateContact
  const updateContactHandler = async (contact) => {
    const response = await api.put("/contacts/${contact.id}", contact);
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

    //DeleteContacts
  const removeContactHandler = async (id) => {
    await api.delete("/contacts/${id}");
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    

    setContacts(newContactList);
  };

    //SearchContact
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };



    const value = {
        contacts,
        searchTerm,
        searchResults,
        searchHandler,
        retrieveContacts,
        removeContactHandler,
        addContactHandler,
        updateContactHandler
    }
    return <contactCrud.Provider value={value}>
        {children}
    </contactCrud.Provider>
}

export function useContactCrud() {
    return useContext(contactCrud);
}