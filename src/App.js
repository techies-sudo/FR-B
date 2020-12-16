import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom'
import Camera from './components/Camera/Camera'
import Login from './components/Login/Login'
function App() {
  return (
    <div className="App">
       <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/camera' component={Camera} />
        <Route exact path='/login' component={Login} />
        </Switch>
    </div>
  );
}

export default App;
