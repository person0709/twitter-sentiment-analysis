import React, { Component } from 'react';
import NavBar from './components/navbar';
import InputForm from './components/inputForm';
import Container from 'react-bootstrap/Container'
import ScoreBar from './components/scoreBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HighlightList from './components/highlightList';
import MagnitudeBox from './components/magnitudeBox';

class App extends Component {
    state = {
        keyword: "",
        isLoading: false
    }

    handleInputChange = (change) => {
        this.setState({ keyword: change });
    }

    searchKeyword = () => {
        let keyword = this.state.keyword;
        this.setState({ isLoading: true });
        if (this.state.isFiltered) keyword += ' -filter:retweets'

        fetch(`/api/analyze/${keyword}`)
            .then(res => res.json())
            .then(results => {
                this.setState({ ...results },
                    () => {
                        console.log("result fetched");
                        this.setState({ isLoading: false });
                    });
            });

        //debug with a dummy json file
        // setTimeout(() => {
        //     let dummy = require('./dummy.json');
        //     this.setState({ ...dummy });
        //     this.setState({ isLoading: false });
        // }, 2000);
    }

    render() {
        return (
            <>
                <NavBar />
                <Container className='mainContainer'>
                    {
                        !this.state.score &&
                        <Row style={{ paddingBottom: '5%' }}>
                            <div>
                                <h1 style={{ textAlign: 'center' }}>What does Twitter think?</h1>
                                <div style={{ textAlign: "center", color: "gray" }}>Sentiment analysis provided by Google Cloud NLP</div>
                            </div>
                        </Row>
                    }
                    <Row>
                        <Container style={{ minWidth: '300px' }}>
                            <InputForm
                                onChange={this.handleInputChange}
                                onClick={this.searchKeyword}
                                isLoading={this.state.isLoading}
                                isEmpty={!this.state.keyword}
                                isFiltered={filtered => this.setState({ isFiltered: filtered })}
                            />
                        </Container>
                    </Row>
                    <Row>
                        {
                            this.state.score &&
                            <Container className='resultContainer'>
                                <Row>
                                    <Col style={{ marginBottom: '10px' }}>
                                        <ScoreBar
                                            score={this.state.score}
                                        />
                                    </Col>
                                    <Col md="auto" style={{ marginBottom: '10px' }}>
                                        <MagnitudeBox
                                            magnitude={this.state.magnitude}
                                        />
                                    </Col>
                                    <span style={{ padding: '10px', marginBottom: '40px' }}>N.B. This is <strong>NOT</strong>
                                        an entity sentiment analysis, meaning the score is based on the entire tweet 
                                        rather than on the keyword in the context of the tweet. Entity sentiment analysis 
                                        provided by Google Cloud NLP isn't very accurate nor reliable at the moment.
                                    </span>
                                </Row>
                                <Row>
                                    <HighlightList
                                        negatives={this.state.negHighlights}
                                        positives={this.state.posHighlights}
                                    />
                                </Row>
                            </Container>
                        }
                    </Row>
                </Container>
            </>
        )
    }
}

export default App;