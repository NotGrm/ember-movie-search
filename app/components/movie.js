import Component from '@glimmer/component';

const DEFAULT_PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

export default class MovieComponent extends Component {

  get poster() {
    const { movie } = this.args

    return movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster
  }
}
