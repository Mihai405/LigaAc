import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Register } from './Auth/Register';
import { MovieList , MovieDetail} from './Movie';
import { Nav } from "./Nav/Nav";

export function App() {
  return(
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={() => <h1>Home Page</h1>} />
        <Route path="/register" component={Register} />
        <Route exact path="/movies" component={MovieList} />
        <Route path="/movies/:id" component={MovieDetail} />
      </Switch>
    </BrowserRouter>
  )
}