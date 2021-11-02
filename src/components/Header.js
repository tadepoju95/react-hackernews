import React from 'react';
import { Link } from 'react-router-dom'
import './main.css';
import { FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaWifi, FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Container, Row, Col, Nav, Jumbotron } from 'react-bootstrap'
import SearchBar from './SearchBar'



const Header = () => {
	return (
		<>
		<Container fluid>
				<Row className="mini-header" >
				<Row className="social-media">
					<Col className="text-right col-10">
						<p>Follow us</p>
						<IconContext.Provider value={{ color: "floralwhite", className: " social-icons " }}>
							<div>
								<FaFacebookF /> 
								<FaTwitter /> 
								<FaLinkedinIn /> 
								<FaYoutube /> 
								<FaWifi />
							</div>
						</IconContext.Provider>
					</Col>
				</Row>
				</Row>
				
				<div>
				<Row className='wrapper'>
					<Col className='col-md-8 col-lg-8 col-sm-12 heading-wrapper'>
						<h1><span className="h1 text-left">The Hacker News</span></h1>
					</Col>
					<Col className='col-md-4 col-sm-12  col-lg-4 col-12 news-wrapper' >
						<p className="move-newsletter"><span className="text-center newsletter"><FaEnvelope className="header-icon" />Subscribe to Newsletter</span></p>
					</Col>
				</Row>
				</div>
				<Nav as="ul" className="nav-nav" >
  				<Nav.Item as="li">
    				<Nav.Link href="/" className="move">Home</Nav.Link>
  				</Nav.Item>
  				<Nav.Item as="li">
   					<Nav.Link href="/articles/databreaches" className="move">Data Breaches</Nav.Link>
 			    </Nav.Item>
  				<Nav.Item as="li">
   					<Nav.Link href="/articles/cyberattacks" className="move">Cyber Attacks</Nav.Link>
  				</Nav.Item>
  				<Nav.Item as="li">
   					<Nav.Link href="/articles/vulnerabilities" className="move">Vulnerabilities</Nav.Link>
  				</Nav.Item>
  				<Nav.Item as="li">
   					<Nav.Link href="/articles/malwares" className="move">Malware</Nav.Link>
  				</Nav.Item>
  				<Nav.Item as="li">
   					<Nav.Link href="/articles/deals" className="move">Offers</Nav.Link>
  				</Nav.Item>
  				<Nav.Item as="li">
   					<Nav.Link href="/articles/reach" className="move">Contact</Nav.Link>
  				</Nav.Item>
  				<SearchBar   />
			</Nav>		
 	 </Container>
	  <Jumbotron></Jumbotron>
	  </>

	);
}

export default Header;