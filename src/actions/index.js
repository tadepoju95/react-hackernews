import newsApi from '../apis/newsApi';


export const fetchArticles = (term = 'usa') => async dispatch => {
	const response = await newsApi.get(
		'/v2/everything', {
			params: {
				apiKey: '6a4758f528674410a29213f0d0c2ec35',
				q: term,
				pageSize: 5
			}
		}
	)
	console.log("response", response.data)
	dispatch({ type: 'FETCH_ARTICLES', payload: response.data.articles });
};


export const fetchTopHeadlines = () => async dispatch => {
	const response = await newsApi.get(
		'/v2/top-headlines', {
			params: {
				apiKey: '6a4758f528674410a29213f0d0c2ec35',
				q: 'business',
				pageSize: 5

			}
		}
	)
	dispatch({ type: 'FETCH_TOP_HEADLINES', payload: response.data.articles });
};
