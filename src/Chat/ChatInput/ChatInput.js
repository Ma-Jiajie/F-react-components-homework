import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
    };
  }

  udateMsg = (event) => {
    this.setState({
      msg: event.target.value,
    });
  };

  handlerClick = () => {
    this.props.callback(this.state.msg);
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" onChange={this.udateMsg} />
        <button type="button" onClick={this.handlerClick}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
