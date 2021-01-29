import Hero from './homepage/Hero';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CommingSoon from './CommingSoon';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Hero} />
          <Route path='/comingsoon' component={CommingSoon} />
          {/* <Hero /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
