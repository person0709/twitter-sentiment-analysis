import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

class SearchButton extends Component {
    getButtonContent = () => {
        if (this.props.isLoading){
            return (
                <>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading
                </>
            );
        } else{
            return <>Search</>;
        }
    }

    render() { 
        return ( 
        <>
            <Button
                variant="primary"
                type = "submit"
                onClick={this.props.onClick}
                disabled = {this.props.isLoading || this.props.isEmpty}
            >
            {this.getButtonContent()}
            </Button>
        </> );
    }
}
 
export default SearchButton;