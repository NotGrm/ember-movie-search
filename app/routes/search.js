import Route from '@ember/routing/route';

export default class SearchRoute extends Route {
  queryParams = {
    searchQuery: {
      refreshModel: true
    }
  }

  async model(params) {
    console.table(params)
    const url = `https://www.omdbapi.com/?s=${params['searchQuery']}&apikey=468881c3`;

    let response = await fetch(url)
    let jsonResponse = await response.json()

    await new Promise(resolve => setTimeout(resolve, 5000))

    return jsonResponse.Search
  }
}
