import React, { Component } from 'react';
import { sendMessage, getMessage } from '../../api/socket';


class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            messages: []
        }

        this.inputHandler = this.inputHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.handleMessages = this.handleMessages.bind(this);
        this.scrollToBottom = this.scrollToBottom.bind(this);

    }

    inputHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler(e) {
        e.preventDefault();
        if (this.state.input === '') {
            return;
        }
        sendMessage(this.state.input);
        this.setState({ input: '' });
    }

    handleMessages() {
        let messages = this.state.messages;
        getMessage((err, message) => {

            messages.push(message);
            this.setState({ messages });
        })
    }

    componentDidMount() {
        this.handleMessages();
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();

    }

    scrollToBottom() {
       
        this.chatbox.scrollTop = this.chatbox.scrollHeight;
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitHandler}>
                    <div className="chatbox" ref={ref => { this.chatbox = ref; }}>
                        <ul>
                            {this.state.messages.map((message, index) => {
                                return <li key={index}>{message}</li>
                            })}
                        </ul>
                    </div>
                    <input type="text" name="input" value={this.state.input} onChange={this.inputHandler} />
                </form>
            </div>
        );
    }
}

export default Chat;
