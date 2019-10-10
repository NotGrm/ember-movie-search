import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SearchController extends Controller {
  queryParams = [{
    searchQuery: 'search'
  }]

  @tracked searchQuery = 'man'

  @action
  search(searchValue) {
    this.searchQuery = searchValue
  }
}
