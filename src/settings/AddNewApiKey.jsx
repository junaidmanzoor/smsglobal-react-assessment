import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

class AddNewApiKey extends Component {
  state = {
    modal: false,
    apiKey: {
      name: "",
      key: "",
      secret: ""
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen) {
      this.toggleDlg();
    }
  }

  toggleDlg = () => {
    this.setState({
      modal: !this.state.modal
    });

    this.props.onDismiss();
  };

  handleInputChange = e => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState(prevState => ({
      apiKey: {
        ...prevState.apiKey,
        [name]: value
      }
    }));

    e.preventDefault();
  };

  handleCreate = e => {
    const { onAddNewKey } = this.props;
    const { apiKey } = this.state;
    onAddNewKey(apiKey);
    this.toggleDlg();
    e.preventDefault();
  };

  render() {
    return (
      <Modal isOpen={this.state.modal} toggle={this.toggleDlg}>
        <ModalHeader toggle={this.toggleDlg}>Create Api Key</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="name" sm={4}>
                Name
              </Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="name"
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="key" sm={4}>
                Api Key
              </Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="key"
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="secret" sm={4}>
                Api Secret
              </Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="secret"
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.handleCreate}>
            Create
          </Button>
          <Button color="secondary" onClick={this.toggleDlg}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

AddNewApiKey.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default AddNewApiKey;
