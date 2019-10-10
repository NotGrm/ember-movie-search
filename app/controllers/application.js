import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=468881c3";

export default class ApplicationController extends Controller {
  @tracked movies = []
  @tracked loading = false
  @tracked errorMessage = null

  constructor() {
    super(...arguments)

    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        this.movies = jsonResponse.Search
        this.loading = false
      })
  }

  @action
  async search(searchValue) {
    this.loading = true
    this.errorMessage = null

    let response = await fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=468881c3`)
    let jsonResponse = await response.json()

    if (jsonResponse.Response === 'True') {
      this.movies = jsonResponse.Search
      this.loading = false
    } else {
      this.errorMessage = jsonResponse.Error
      this.loading = false
    }
  }
}
