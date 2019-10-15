import React, { Component } from "react";
import { arrayOf, func, shape, string } from "prop-types";
import { Table } from "reactstrap";

const ApiKeyRow = ({ name, apiKey, apiSecret }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{apiKey}</td>
      <td>{apiSecret}</td>
    </tr>
  );
};

class ApiKeysList extends Component {
  render() {
    const { apiKeys, deleteNote } = this.props;
    const list = [];
    apiKeys.forEach((item, index) => {
      list.push(
        <ApiKeyRow
          key={index}
          id={item.id}
          name={item.name}
          apiKey={item.key}
          apiSecret={item.secret}
          deleteNote={deleteNote}
        />
      );
    });

    return (
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Api Key</th>
            <th>Api Secret</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </Table>
    );
  }
}

ApiKeysList.propTypes = {
  apiKeys: arrayOf(
    shape({
      name: string,
      key: string,
      secret: string
    })
  ).isRequired,
  deleteNote: func.isRequired
};

export default ApiKeysList;
