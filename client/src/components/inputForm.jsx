import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import SearchButton from './searchButton';
import Form from 'react-bootstrap/Form';



class InputForm extends Component {
    handleEnter = e => {
        if (e.key === 'Enter' && !this.props.isLoading && !this.props.isEmpty) {
            this.props.onClick();
        }
    }

    render() {
        return (
            <InputGroup>
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
        );
    }
}

export default InputForm;