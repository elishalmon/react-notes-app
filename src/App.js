import './App.css';
import Login from './Components/Login';
import { Route, Switch } from 'react-router-dom';
import Notes from './Pages/Notes';
import Note from './Components/Note'
import Header from './Components/Header';

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
