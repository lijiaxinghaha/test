import React, { Component } from "react";
import "./index.less";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";

export default class Cover extends Component {
  state = {};

  componentDidMount() {
    this.fetch();
  }
  fetch = () => {};

  render() {
    return (
      <div className="g-login">
        <div className="desc">有你相伴很好</div>
        <div className="btn_buttom">
          <span>
            <Link to={`/lanuch`}>点击开始</Link>
          </span>
        </div>
      </div>
    );
  }
}
