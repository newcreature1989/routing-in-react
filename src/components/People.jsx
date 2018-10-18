import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class People extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [],
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then((res) => res.json())
            .then((people) => {
                this.setState({
                    people,
                })
            })
    }

    render() {
        return this.state.people.map(person => {
            return (
                <div className="row" key={person.id}>
                    <div className="card col-3">
                        <div className="card-body">
                            <h5 className="card-title">{person.name}</h5>
                            <Link to={`/People/${person.id}`} className="btn btn-primary">Person Info</Link>
                        </div>
                    </div>
                </div>
            )
        })

    }

}
export default People;