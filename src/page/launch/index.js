import React, { Component } from "react";
import "./index.less";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";

export default class Launch extends Component {
  state = {};

  componentDidMount() {
    this.fetch();
  }
  fetch = () => {};

  render() {
    return (
      <div className="route_change">
        <div className="desc">这里是头像</div>
        <div className="btn_buttom">
          <span>
            <Link to={`/report`}>跳过</Link>
          </span>
        </div>
      </div>
    );
  }
}
