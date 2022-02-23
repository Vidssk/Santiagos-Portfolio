import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {feedback: '', name: '', email: ''}
        this.handleFeedbackChange = this.handleFeedbackChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return(
            <form className="text-mailing">
                 <input 
                    placeholder="Your Name"
                    required
                    onChange={this.handleNameChange} 
                    value={this.state.name}
                    className="footer-input"/>
                <input 
                    placeholder="Your Email" 
                    required
                    onChange={this.handleEmailChange}
                    value={this.state.email}
                    className="footer-input"/>
                <div>
                    <textarea
                    className="footer-input"
                    id="test-mailing"
                    onChange={this.handleFeedbackChange}
                    placeholder="Write message here"
                    required
                    value={this.state.feedback}
                    style= {{width: '100%', height: '150px'}}
                    />
                </div>
                <button id="email-button"className = {`btn btn--primary btn--large`} type ="button" onClick={this.handleSubmit}>
                    Send Email
                </button>
            </form>
        )
    }

    handleFeedbackChange(event) {

        this.setState({feedback: event.target.value})
    }
    handleEmailChange(event) {

        this.setState({email: event.target.value})
    }
    handleNameChange(event) {

        this.setState({name: event.target.value})
    }
    handleSubmit(event) {
        const templateId = 'template_s36jpq2';
        this.sendFeedback(templateId, {message: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
        window.location.reload(true);
    }
    sendFeedback(templateId, variables) {
        window.emailjs.send('service_yn8zl2l',templateId, variables
        ).then(res => {console.log('Email successfully sent!')
    })
    .catch(err => console.error('Oh well, you failed. Here are some thoughts on the error that occured:',err))
    }
}