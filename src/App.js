import { Hero } from './homepage/Hero';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CommingSoon from './CommingSoon';
import Team from './Team';
import About from './About';
import ContactUs from './ContactUs';

function App() {
	return (
		<Router >
			<div className='App'>
				<Switch>
					<Route exact path='/' component={Hero} />
					<Route path='/comingsoon' component={CommingSoon} />
					<Route path='/team' component={Team} />
					<Route path='/aboutus' component={About} />
					<Route path='/contactus' component={ContactUs} />
				</Switch>
			</div>
		</ Router>
	);
}

export default App;
