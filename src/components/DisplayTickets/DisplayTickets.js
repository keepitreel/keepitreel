import React, { Component } from "react";
import "./DisplayTickets.scss";

export default class DisplayTickets extends Component {
  constructor() {
    super();
  }
  render() {
    let { tickets } = this.props;
    let displayTickets = tickets.map(ticket => {
      return ticket;
    });
    return (
      <div className={"display2"}>
        <div className="displayTickets">{displayTickets}</div>
      </div>
    );
  }
}
