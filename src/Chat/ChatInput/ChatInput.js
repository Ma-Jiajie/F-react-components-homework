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
    this.setState({
      msg: '',
    });
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" onChange={this.udateMsg} value={this.state.msg} />
        <button type="button" className="btn-submit" onClick={this.handlerClick}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
