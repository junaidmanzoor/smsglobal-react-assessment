import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const MESSAGE_CHAR_LIMIT = 160;

class SendMessage extends Component {
  state = {
    origin: "",
    //sharedPool: true,
    destination: "",
    message: ""
  };
  handleInputChange = args => {
    const { target } = args;
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  render() {
    const { sendMessage, apiKeys, sendingMessage } = this.props;
    const { origin, destination, message } = this.state;
    let settings = {};
    if (apiKeys.length > 0) {
      settings = {
        apiKey: apiKeys[0].key,
        apiSecret: apiKeys[0].secret
      };
    }

    return (
      <Form>
        <FormGroup>
          <Label for="origin">From</Label>
          <Input
            type="origin"
            name="origin"
            id="origin"
            value={origin}
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="destination">To</Label>
          <Input
            type="destination"
            name="destination"
            id="destination"
            value={destination}
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="message">Message</Label>
          <Input
            type="textarea"
            name="message"
            id="message"
            value={message}
            onChange={this.handleInputChange}
          />
          {message.length <= MESSAGE_CHAR_LIMIT && (
            <Label>{MESSAGE_CHAR_LIMIT - message.length} characters left</Label>
          )}
          {message.length > MESSAGE_CHAR_LIMIT && (
            <Label>
              Exceeds message character limit, will be sent in{" "}
              {Math.ceil(message.length / MESSAGE_CHAR_LIMIT)} messages. | Total
              characters: {message.length}
            </Label>
          )}
        </FormGroup>
        <Button
          disabled={sendingMessage}
          onClick={e => sendMessage(this.state, settings)}
          color="primary"
        >
          Send Message
        </Button>
      </Form>
    );
  }
}

export default SendMessage;
