import React, { Component } from "react";
import { Table } from "reactstrap";

const MessageRow = ({ dateTime, origin, destination, message, status }) => {
  const date = new Date(dateTime);
  return (
    <tr>
      <td>{`${date.toDateString()} ${date.toLocaleTimeString()}`}</td>
      <td>{origin}</td>
      <td>{destination}</td>
      <td>{message}</td>
      <td>{status}</td>
    </tr>
  );
};

class Reports extends Component {
  componentDidMount() {
    const { fetchMessages, apiKeys = [] } = this.props;
    let settings = {};
    if (apiKeys.length > 0) {
      settings = {
        apiKey: apiKeys[0].key,
        apiSecret: apiKeys[0].secret
      };

      fetchMessages(settings);
    }
  }
  render() {
    const { messages = [], fetchingMessages } = this.props;
    const list = [];
    messages.forEach((item, index) => {
      list.push(<MessageRow key={index} {...item} />);
    });

    return (
      <div>
        {!fetchingMessages && (
          <Table striped>
            <thead>
              <tr>
                <th>Date</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Message</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>{list}</tbody>
          </Table>
        )}
        {fetchingMessages && <p>Fetching messages..</p>}
      </div>
    );
  }
}

export default Reports;
