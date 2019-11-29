import React, { Component } from "react";

import "./index.less";

export default class Conventional extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { page } = this.props;
    return (
      <div style={{ backgroundImage: "url(" + require(`../../assets/${page.num}.png`) + ")" }} className="pageContent">
        <div className="page">{page.title}</div>
      </div>
    );
  }
}
