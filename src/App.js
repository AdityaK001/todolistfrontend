import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Title1 from "./Title1";
import Inputs from "./Inputs";
import { useState, useEffect } from "react";
import List from "./List";
import List1 from "./List1";

import axios from 'axios';

import Completeinterface from "./CompleteInterface";

export default function App() {
  const [notes, addnote] = useState([]);
  const [complete, taskcomplete] = useState([]);
  const [showcompletebox, updatecompleteboxstatus] = useState(false);
  const [wantcompletelist, statusCompleteList] = useState(false);

  const url1="https://todolist-api-aditya.onrender.com";

  useEffect(() => {
    fetch(url1)
    .then(response => response.json())
    .then((data)=>data.list
    ).then((lists)=> 
     {let normalList =[];
      let complete1List=[];

    lists.forEach(element => {if(element.status==='incomplete')
    {
      normalList.push(element);
    } else if(element.status==='complete') {
      complete1List.push(element);
    }})
    addnote(normalList);
    taskcomplete(complete1List);
  }
    );
  }
    ,[]);
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  useEffect(() => {
    if (complete.length === 0) {
      updatecompleteboxstatus(false);
    } else {
      updatecompleteboxstatus(true);
    }
  }, [complete.length]);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function updatenotelist(newnote) {
    addnote((prev) => {
      return [...prev, newnote];
    });
    ///////////////////////MONGODB
    const sendlist = async (item) =>{
      await fetch(url1,{
        method: "POST",
        body: JSON.stringify(newnote),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res=>res.json());
    }
    sendlist(newnote);
    //////////////////////MONGODB    
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function deleteNote(id) {
    let newnote=notes[id];
    taskcomplete((prev) => {
      return [...prev, notes[id]];
    });

    addnote((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
    ///////////////////////MONGODB
    const sendlist = async (item) =>{
      await 
        fetch(url1,{
        method: "PATCH",
        body: JSON.stringify(newnote),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res=>res.json());     

    }
    sendlist(newnote);
    //////////////////////MONGODB
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function deleteNoteComplete(id) {
    let newnote = complete[id];
    addnote((prev) => {
      return [...prev, complete[id]];
    });   

    taskcomplete((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
    ///////////////////////MONGODB
    const sendlist = async (item) =>{
      await 
        fetch(url1,{
        method: "PATCH",
        body: JSON.stringify(newnote),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res=>res.json());     

    }
    sendlist(newnote);
    //////////////////////MONGODB
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function showcompletelist() {
    statusCompleteList((prev) => !prev);
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div>
      <Header />
      <Title1 />
      <Inputs onAdd={updatenotelist} />
      {notes.map((noteItem, index) => {
        return (
          <List
            key={index}
            id={index}
            onDelete={deleteNote}
            content={noteItem.content}
          />
        );
      })}
      {showcompletebox && (
        <Completeinterface
          list={complete}
          onDelete={deleteNoteComplete}
          onchange={showcompletelist}
          count={complete.length}
        />
      )}

      {wantcompletelist &&
        complete.map((noteItem, index) => {
          return (
            <List1
              key={index}
              id={index}
              content={noteItem.content}
              onDelete={deleteNoteComplete}
            />
          );
        })}
      {/* {console.log(notes)}
      {console.log(complete)} */}
    </div>
  );
}
