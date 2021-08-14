
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: "",
            agree: false,
            contactType: 'Tel.',
            message: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = event => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row  className='p-2' row  className='p-2'-content" style={{ paddingLeft: "20px", textAlign: "left" }}>
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className='p-4 m-4'>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row  className='p-2'>
                                <Label htmlFor="firstname" md={4}>First Name</Label>
                                <Col md={8}>
                                    <Input
                                        type="text"
                                        name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row  className='p-2' >
                                <Label htmlFor="lastname" md={4}>Last Name</Label>
                                <Col md={8}>
                                    <Input
                                        type="text"
                                        name="lastname"
                                        value={this.state.lastname}
                                        placeholder="Last Name"
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row  className='p-2' >
                                <Label htmlFor="telnum" md={4}>Contact Tel.</Label>
                                <Col md={8}>
                                    <Input
                                        type="tel"
                                        name="telnum"
                                        value={this.state.telnum}
                                        placeholder="Tel. Number"
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row  className='p-2'>
                                <Label htmlFor="email" md={4}>Email</Label>
                                <Col md={8}>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        placeholder="Email"
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row  className='p-2'>
                                <Col md={{ size: 5,  }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange}
                                            />
                                            <strong>May we contact you?
                                            </strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 6,  }}>
                                    <Input
                                        type="select"
                                        name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange}
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row  className='p-2'>
                                <Label htmlFor="message" md={4}>Your Feedback</Label>
                                <Col md={8}>
                                    <Input
                                        type="textarea"
                                        name="message"
                                        value={this.state.message}
                                        row  className='p-2's="12"
                                        onChange={this.handleInputChange}
                                    >

                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{ size: 10, offset: 5 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;