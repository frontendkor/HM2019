import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { Col, Collection, Preloader } from "react-materialize";

import getActions from "../../actions/Actions/getActions";

import ActionsCard from "./ActionsCard/ActionsCard";
import "./RenderActions.sass";

class RenderActions extends Component {
  renderCard() {
    let { data } = this.props.actions;
    return data.map(({ id, title, text, date }) => {
      return (
        <ActionsCard key={id} id={id} title={title} text={text} date={date} />
      );
    });
  }
  Request() {
    const { getActions } = this.props;
    getActions();
  }
  componentDidMount() {
    this.Request();
  }
  render() {
    const { wait } = this.props.actions;
    return (
      <>
        {wait ? (
          <Col s={12} className="actionsSpiner">
            <Preloader size="big" />
          </Col>
        ) : (
          <Col s={12}>
            <Collection className="avatar actions">
              {this.renderCard()}
            </Collection>
          </Col>
        )}
      </>
    );
  }
}

const mapStateToProps = store => {
  return {
    actions: store.actions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getActions: () => dispatch(getActions())
  };
};

RenderActions.propTypes = {
  actions: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RenderActions);
