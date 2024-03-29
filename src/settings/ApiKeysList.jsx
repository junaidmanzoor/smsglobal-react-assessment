import React, { Component } from "react";
import { arrayOf, func, shape, string } from "prop-types";
import { Table, Button } from "reactstrap";

const ApiKeyRow = ({ index, name, apiKey, apiSecret, onDelete }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{apiKey}</td>
      <td>{apiSecret}</td>
      <td>
        <Button onClick={e => onDelete(index)} color="link">
          delete
        </Button>
      </td>
    </tr>
  );
};

class ApiKeysList extends Component {
  render() {
    const { apiKeys, deleteApiKey } = this.props;
    const list = [];
    apiKeys.forEach((item, index) => {
      list.push(
        <ApiKeyRow
          key={index}
          index={index}
          name={item.name}
          apiKey={item.key}
          apiSecret={item.secret}
          onDelete={deleteApiKey}
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
  deleteApiKey: func.isRequired
};

export default ApiKeysList;
