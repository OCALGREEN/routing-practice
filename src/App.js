import './App.css';
import { BrowserRouter, Link , Switch, Route} from 'react-router-dom'; 
import Home from './Components/Home'
import About from './Components/About'
import WordWithStyle from './Components/WordWithStyle'

function App() {
  return (
    <BrowserRouter>

          <Switch>

            <Route path="/home">
              <Home/>
            </Route>

            <Route path="/:expression/:color/:background">
              <WordWithStyle/>
            </Route>

            <Route path="/:variable">
              <About/>
            </Route>
          </Switch>

    </BrowserRouter>
  );
}

export default App;
