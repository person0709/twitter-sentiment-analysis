import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import thumbUp from '../images/thumb_up.svg';
import thumbDown from '../images/thumb_down.svg'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';

class ScoreBar extends Component {
    constructor(props) {
        super(props);

        this.state = { target: null };
        // this.setTarget = target => {
        //     this.setState({target});
        // };
    }

    setTarget = target => {
        this.setState({ target });
    };

    // completeProgressBar = (score) => {
    //     const scoreNorm = score * 100;

    //     if (score > 0) {
    //         return (
    //             <>
    //                 <ProgressBar variant="danger" now={50} key={1} isChild />
    //                 <ProgressBar variant="success" now={scoreNorm / 2} key={2} isChild />
    //                 {/* <ProgressBar variant="dark" now={0.1} key={3} isChild ref={this.setTarget}/> */}
    //                 <img src={thumbUp} alt="thumb_up" />
    //                 <ProgressBar variant="success" now={50 - scoreNorm / 2} key={4} isChild />
    //             </>
    //         );
    //     } else {
    //         return (
    //             <>
    //                 <ProgressBar variant="danger" now={50 + scoreNorm / 2} key={1} isChild />
    //                 <ProgressBar variant="dark" now={0.1} key={2} isChild ref={this.setTarget} />
    //                 <ProgressBar variant="danger" now={-scoreNorm / 2} key={3} isChild />
    //                 <ProgressBar variant="success" now={50} key={4} isChild />
    //             </>
    //         );
    //     }
    // }

    render() {
        const score = this.props.score;

        const image = score > 0 ? thumbUp : thumbDown;
        const scoreNorm = (score * 100) / 2;

        return (
            <>
                <Card border='dark'>
                    <Card.Header className='scoreHeader'><h4>Score</h4></Card.Header>
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col>
                                    <ProgressBar style={{
                                        height: '20px'
                                    }}>
                                        <ProgressBar variant="danger" now={50} key={1} />
                                        <OverlayTrigger
                                            key="scoreOverlay"
                                            placement="bottom"
                                            overlay={
                                                <Tooltip id="scoreOverlayTooltip">
                                                    {score}
                                                </Tooltip>
                                            }>
                                            <Image
                                                src={image}
                                                style={{ position: 'relative', left: `${scoreNorm}%` }}
                                            />
                                        </OverlayTrigger>

                                        <ProgressBar variant="success" now={50} key={2} />
                                    </ProgressBar>
                                </Col>

                            </Row>
                            <Row>
                                <Col>-1</Col>
                                <Col style={{ textAlign: 'center' }}>0</Col>
                                <Col style={{ textAlign: 'right' }}>1</Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default ScoreBar;