import React from 'react';

class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {}
        };
    }
    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
            .then((res) => res.json())
            .then((person) => {
                this.setState({
                    person
                })
            })
    }

    render() {
        return (
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Name: {this.state.person.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Gender: {this.state.person.gender}</h6>
                    <p className="card-text">Age: {this.state.person.age}</p>
                    <p className="card-text">Hair Color: {this.state.person.hair_color}</p>
                    <p className="card-text">Eye Color: {this.state.person.eye_color}</p>
                </div>
            </div>
        )
    }
}

export default Person;
