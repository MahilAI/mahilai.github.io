import { Hero } from './homepage/Hero';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CommingSoon from './CommingSoon';
import Team from './Team';

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/' component={Hero} />
					<Route exact path='/comingsoon' component={CommingSoon} />
					<Route exact path='/team' component={Team} />
					{/* <Hero /> */}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
