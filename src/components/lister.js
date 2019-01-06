import React from 'react';

import {connect} from 'react-redux';

import * as actions from '../store/actions.js';

class Lister extends React.Component {
    fetchPerson(url) {
      this.props.getPerson(url);
    }

    render() {
        return(
            <ul>
            {this.props.people.map((result, i) => (
              <li
                onClick={() =>
                  this.fetchPerson(result.url)
                }
                key={i}
              >
                {result.name}
              </li>
            ))}
          </ul>
        )
    }
}

const mapStateToProps = store => ({
    people: store.people
});

const mapDispatchToProps = (dispatch, getState) => ({
    getPerson: (url) => dispatch(actions.getPerson(url))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Lister);