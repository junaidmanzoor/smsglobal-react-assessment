import React, { Component } from "react";
import { Button } from "reactstrap";

import AddNewApiKey from "./AddNewApiKey";
import ApiKeysList from "./ApiKeysList";

class Settings extends Component {
  state = {
    addNewKey: false
  };
  toggleNewNoteDlg = () => {
    this.setState({
      addNewKey: !this.state.addNewKey
    });
  };
  render() {
    const { saveApiKey, apiKeys = [] } = this.props;
    return (
      <div>
        <Button color="link" onClick={this.toggleNewNoteDlg}>
          + Add New Api Key
        </Button>

        <AddNewApiKey
          isOpen={this.state.addNewKey}
          onAddNewKey={saveApiKey}
          onDismiss={this.toggleNewNoteDlg}
        />

        {apiKeys.length > 0 && <ApiKeysList apiKeys={apiKeys} />}
      </div>
    );
  }
}

export default Settings;
