import React from 'react';
import {connect} from 'react-redux';

import Lister from './lister.js';
import Detailer from './detailer.js';
import app from '../app.module.scss';
import * as actions from '../store/actions.js';

class PeoplePage extends React.Component {
    fetchPeople = (e) => {
        e.preventDefault();
        this.props.getPeople();
    }
    
    render() {
        return(
        <>
        <a href="#" onClick={this.fetchPeople}>
          Get The People
        </a>
        <section className={app.people}>
          <Lister />
          <div className={app.person}>
            <Detailer />
          </div>
        </section>
        </>
        )
    }
}

const mapStateToProps = state => ({
  people: state.people,
  person: state.person
})
const mapDispatchToProps = (dispatch, getState) => ({
    getPeople: () => dispatch(actions.getPeople())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(PeoplePage);