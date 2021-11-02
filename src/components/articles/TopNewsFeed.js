import React from 'react';
import { connect } from 'react-redux';
import{ fetchTopHeadlines } from '../../actions';
import { Container, Row, Col, Image } from 'react-bootstrap'

class TopNewsFeed extends React.Component {
	componentDidMount() {
		this.props.fetchTopHeadlines();
	}

	renderList() {
		return this.props.headlines.map((headlines, index) => {
			return (
				<Container key={index} className='col-sm-3 col-lg-12' >
					<Row style={{marginTop:20}} >
						<Col className='col-5 col-lg-5 col-sm-12'>
							<Image src={headlines.urlToImage} className=" news-images-images" rounded />
						</Col>
						<Col className="text-right col-lg-7 article-details ">
							<h5 className="article-title">{headlines.title}</h5>
						</Col>
					</Row>
				</Container>
			);
		});
	}

	render() {
		return (
			<div style={{height:'100%'}}>
				<h5 >Popular This Week</h5>
				<div className='area2'>{this.renderList()}</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { headlines: state.headlines };
}

export default connect(mapStateToProps, { fetchTopHeadlines })(TopNewsFeed);