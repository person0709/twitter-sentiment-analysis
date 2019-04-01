import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import SearchButton from './searchButton';
import Form from 'react-bootstrap/Form';



class InputForm extends Component {
    state = {
        isRetweetFiltered: false
    }

    handleEnter = e => {
        if (e.key === 'Enter' && !this.props.isLoading && !this.props.isEmpty) {
            this.props.onClick();
        }
    }

    handleCheckbox = e =>{
        console.log('box clicked')
        this.setState({isRetweetFiltered: !this.state.isRetweetFiltered});
        this.props.isFiltered(!this.state.isRetweetFiltered);
    }

    render() {
        return (
            <Form>
                <InputGroup style={{paddingBottom: '5px'}}>
                    <FormControl
                        size="md"
                        placeholder="Enter keyword"
                        type="text"
                        onChange={e => this.props.onChange(e.target.value)}
                        onKeyPress={this.handleEnter}
                        disabled={this.props.isLoading}
                    />
                    <InputGroup.Append>
                        <SearchButton
                            onClick={this.props.onClick}
                            isLoading={this.props.isLoading}
                            isEmpty={this.props.isEmpty}
                        />
                    </InputGroup.Append>
                </InputGroup>
                <Form.Check label='Filter retweets' type='checkbox' onClick={e => this.handleCheckbox(e)}/>
            </Form>
        );
    }
}

export default InputForm;