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
      <div className="cover_content">
        <span className="title"></span>
        {/* 流星 */}
        <span className="star1"></span>
        <span className="star2"></span>
        <span className="star3"></span>
        <span className="star4"></span>
        {/* 星球 */}
        <span className="earth1"></span>
        <span className="earth2"></span>
        <span className="earth3"></span>
        <span className="earth4"></span>
        {/* 书 */}
        <span className="book_left"></span>
        <span className="light1"></span>
        <span className="book_right"></span>
        <span className="light2"></span>

        <div className="btn_buttom">
          <span className="btn"></span>
        </div>
      </div>
    );
  }
}
