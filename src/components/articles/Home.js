import React from 'react';
import { connect } from 'react-redux';
import{ fetchArticles } from '../../actions';
import { Container, Row, Col, Image } from 'react-bootstrap'
import { MdPerson } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import TopNewsFeed from './TopNewsFeed';


class Home extends React.Component {
	componentDidMount() {
		this.props.fetchArticles();
	}

	renderList() {
		return this.props.articles.map((article, index) => {
			return (
				<Container  key={index} style={{marginTop:10}}>
					<Row className='col-sm-12 col-12 col-md-12 card-wrapper'  >
					    <Col  className="col-lg-4 col-md-7 col-sm-12 col-12 image">
							<Image src={article.urlToImage} className="news-images" rounded />
						</Col>
					   <Col  className="col-lg-5 col-md-5 col-sm-12 col-12">
							<h5 className="title">{article.title}</h5>
							<p className="published-time"><FaCalendarAlt />{article.publishedAt}</p>
							<span className="author"><MdPerson />{article.author}</span>
							<p className="description">{article.description}</p>
						
						</Col>
					</Row>
				</Container>
			);
		});
	}

	render() {
		console.log(this.props.articles);
		return (
			<div className='area-wrapper'>
				<div className='area1' style={{width:'70%'}}>{this.renderList()}</div>
				<div className='area2' style={{width:'30%'}}>
				<TopNewsFeed />
				</div>
			
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { articles: state.articles };
}

export default connect(mapStateToProps, { fetchArticles })(Home);