import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthContextProvider } from './Auth/AuthContext';
import { Login } from './Auth/Login';
import { Register } from './Auth/Register';import { HomePage } from './HomePage/HomePage';
import { MovieList , MovieDetail} from './Movie';
import  NavBar  from "./Nav/NavBar";

export function App() {
  return(
    <AuthContextProvider>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route exact path="/movies" component={MovieList} />
        <Route path="/movies/:id" component={MovieDetail} />
      </Switch>
    </BrowserRouter>
    </AuthContextProvider>
  )
}