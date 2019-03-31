import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge'

class HighlightList extends Component {

    render() {
        const positives = this.props.positives;
        const negatives = this.props.negatives;

        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <Card bg="danger" text="white">
                                <Card.Header><h4>Top Negative Tweets</h4></Card.Header>
                                <ListGroup variant="flush">
                                    {negatives.map(item => (
                                        <ListGroup.Item style={{ color: "black" }}>
                                            <Container>
                                                <Row>
                                                    <h6>
                                                        <i class="arrow right" />
                                                        &nbsp;&nbsp;Score <Badge pill variant='danger'>{item.score}</Badge>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        Magnitude <Badge pill variant='secondary'>{item.magnitude}</Badge>
                                                    </h6>
                                                </Row>
                                                <Row>
                                                    {item.content}
                                                </Row>
                                            </Container>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card>
                        </Col>
                        <Col>
                            <Card bg="success" text="white">
                                <Card.Header><h4>Top Positive Tweets</h4></Card.Header>
                                <ListGroup variant="flush">
                                    {positives.map(item => (
                                        <ListGroup.Item style={{ color: "black" }}>
                                            <Container>
                                                <Row>
                                                    <h6>
                                                        <i class="arrow right" />
                                                        &nbsp;&nbsp;Score <Badge pill variant='success'>{item.score}</Badge>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        Magnitude <Badge pill variant='secondary'>{item.magnitude}</Badge>
                                                    </h6>
                                                </Row>
                                                <Row>
                                                    {item.content}
                                                </Row>
                                            </Container>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default HighlightList;