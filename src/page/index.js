import FlipPage from "react-flip-page";
import React, { Component } from "react";
import Conventional from "./conventional";
import arrow from "../assets/icon_arrow.png";
import "./report.less";

export default class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: [
        { title: "知识总结页", num: "p1" },
        { title: "这是早起页", num: "p2" },
        { title: "这是听次数最多书籍页", num: "p3" },
        { title: "这是热门书籍页", num: "p4" }
      ]
    };
  }
  render() {
    const { page } = this.state;
    const theEndStyle = {
      alignItems: "flex-end",
      backgroundColor: "#000",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      padding: 10
    };
    const theEnd = <div style={theEndStyle}>The End!</div>;
    return (
      <div className="route_change">
        <FlipPage responsive={true} showSwipeHint lastComponent={theEnd}>
          {page.map((item, key) => {
            return (
              <div>
                <div key={key}>
                  <Conventional page={item} />
                </div>
                {key === page.length - 1 && (
                  <div className="arrow">
                    <img className="up" src={arrow} alt={"#"} />
                  </div>
                )}
              </div>
            );
          })}
        </FlipPage>
      </div>
    );
  }
}
