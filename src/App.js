import { Hero } from './homepage/Hero';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import CommingSoon from './CommingSoon';
import Team from './Team';
import About from './About';

function App() {
	return (
		<Router >
			<div className='App'>
				<Switch>
					<Route exact path='/' component={Hero} />
					<Route exact path='/comingsoon' component={CommingSoon} />
					<Route exact path='/team' component={Team} />
					<Route exact path='/aboutus' component={About} />
				</Switch>
			</div>
		</ Router>
	);
}

export default App;
