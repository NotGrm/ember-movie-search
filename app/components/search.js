import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SearchComponent extends Component {
  @tracked searchValue = ''

  resetSearchValue() {
    this.searchValue = ''
  }

  @action
  handleChange(event) {
    this.searchValue = event.target.value
  }

  @action
  callSearchFunction(event) {
    event.preventDefault();

    this.args.search(this.searchValue)

    this.resetSearchValue()
  }
}
