import React from "react";

class SingleFilm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {}
    };
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(film => this.setState({ film }));
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
            {this.state.film.description}</div>
        </div>
    );
  }
}

export default SingleFilm;
