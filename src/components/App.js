import React from 'react';
import { Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './articles/Home';
import Offers from './articles/Offers';
import Contact from './articles/Contact';
import CyberAttacks from './articles/CyberAttacks';
import DataBreaches from './articles/DataBreaches';
import Malware from './articles/Malware';
import Vulnerabilities from './articles/Vulnerabilities';
import Header from './Header';
import SearchResult from './googleSearchResult';
import history from '../history';


const App = () => {
	const displayHeader = () => {
		if (window.location.pathname !== "/googleSearchResult") {
			return <Header />;
		}
	}
	
	return (
		<div>
			<Router history={history}>
				<div>
					<div>{displayHeader()}</div>
					<Route path="/" exact component={Home} />
					<Route path="/articles/databreaches" exact component={DataBreaches} />
					<Route path="/articles/cyberattacks" exact component={CyberAttacks} />
					<Route path="/articles/vulnerabilities" exact component={Vulnerabilities} />
					<Route path="/articles/malwares" exact component={Malware} />
					<Route path="/articles/deals" exact component={Offers} />
					<Route path="/articles/reach" exact component={Contact} />
					<Route path="/googleSearchResult" exact component={SearchResult} />
				</div>
			</Router>
		</div>
	);
};

export default App;