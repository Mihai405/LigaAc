import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthContextProvider } from './Auth/AuthContext';
import { Login } from './Auth/Login';
import { Register } from './Auth/Register';
import { MovieList , MovieDetail} from './Movie';
import { Nav } from "./Nav/Nav";

export function App() {
  return(
    <AuthContextProvider>
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={() => <h1>Home Page</h1>} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route exact path="/movies" component={MovieList} />
        <Route path="/movies/:id" component={MovieDetail} />
      </Switch>
    </BrowserRouter>
    </AuthContextProvider>
  )
}