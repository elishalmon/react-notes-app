import './App.css';
import  { createContext, useState, useEffect } from 'react';
import Login from './Components/Login';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Notes from './Pages/Notes';
import Note from './Components/Note'
import Header from './Components/Header';
import AllNotes from './AllNotes';
import { store } from './store';
import Stam from './Components/stam';
import ProtectedRoute from './ProtectedRouts';
import LandingPage from './Pages/LandingPage';
import Logout from './Components/Logout';
import Footer from './Components/Footer';
import AddNote from './Pages/AddNote';
import ViewNote from './Pages/ViewNote';
import EditNote from './Pages/EditNote';


function App() {

  return (
      <BrowserRouter>
        <div>
        <Header />
          <Switch>
            { !(localStorage.getItem("isLoggedIn")) && <Route exact path="/login" component={Login} /> }
            <ProtectedRoute exact path="/" component={LandingPage}/>
            <ProtectedRoute exact path="/notes" component={Notes}/>
            <ProtectedRoute exact path="/notes/add-note" component={AddNote} />
            <ProtectedRoute exact path="/notes/view/:noteId" component={ViewNote} />   
            <ProtectedRoute exact path="/notes/edit-note/:noteId" component={EditNote} />
            <ProtectedRoute exact path='/logout' component={Logout} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
  );
}
export default App;

/*
import './App.css';
import Login from './Components/Login';
import { Route, Switch } from 'react-router-dom';
import Notes from './Pages/Notes';
import Note from './Components/Note'
import Header from './Components/Header';
import AllNotes from './AllNotes';
import { store } from './store';
import Stam from './Components/stam';
import { useState } from 'react';

function App() {

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
            <Login />
        </Route>
        <Route path="/notes" exact>
          <Notes />
        </Route>
        <Route path="/notes/:noteId" exact>
          <Note from = {'displayNote'} />
        </Route>
        <Route path = "/add-note" exact>
          <Note from = {'addNote'} />
        </Route>
        <Route path = "/edit-note" exact>
          <Note from = {'editNote'} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
*/