import './App.css';
import Login from './Pages/Login';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Header from './Components/Header';
import AllNotes from './Pages/AllNotes';
import ProtectedRoute from './ProtectedRouts';
import LandingPage from './Pages/LandingPage';
import Logout from './Components/Logout';
import AddNote from './Pages/AddNote';
import ViewNote from './Pages/ViewNote';
import EditNote from './Pages/EditNote';
import mainStyle from './Styles/mainStyle'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


function App() {

  const classes = mainStyle()

  return (
      <BrowserRouter>
        <ThemeProvider theme={theme} >
          <div className={classes.mainApp}>
            <Header />
              <Switch>
                { !(localStorage.getItem("isLoggedIn")) && <Route exact path="/login" component={Login} /> }
                <ProtectedRoute exact path="/" component={LandingPage}/>
                <ProtectedRoute exact path="/notes" component={AllNotes}/>
                <ProtectedRoute exact path="/notes/add-note" component={AddNote} />
                <ProtectedRoute exact path="/notes/view/:noteId" component={ViewNote} />   
                <ProtectedRoute exact path="/notes/edit-note/:noteId" component={EditNote} />
                <ProtectedRoute exact path='/logout' component={Logout} />
                <Route path='*' component={() => <Redirect to='/' /> }/>
              </Switch>
          </div>
        </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3b5998'
    }
  },
  overrides: {
    MuiButton: {
      root: {
          textTransform: 'none',
          fontSize: '15px'
      }
    },
  },
  typography: {
    fontFamily: ['"Roboto"', 'Open Sans'].join(','),
   }
 })