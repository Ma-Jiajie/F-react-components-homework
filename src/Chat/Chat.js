import React, { Component } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';
import { ROLE } from '../constants';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  putMessage = (msg) => {
    this.setState((state) => ({
      messages: state.messages.concat(this.makeMsg(msg)),
    }));
  };

  makeMsg = (msg) => {
    const customerMsg = {
      text: msg,
      role: ROLE.CUSTOMER,
    };
    const answers = answersData.filter((answer) =>
      answer.tags.find((tag) => customerMsg.text.includes(tag))
    );
    return [customerMsg].concat(answers);
  };

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Chat">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput callback={this.putMessage} />
      </main>
    );
  }
}

export default Chat;
