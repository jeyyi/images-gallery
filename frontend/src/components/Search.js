import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {Container} from "react-bootstrap"

const Search = () => {
  return (
    <Container className="mt-4">
        <Row className="justify-content-center">
            <Col xs={12} md={8}>
                <Form>
                    <Form.Row>
                        <Col xs={9}>
                            <Form.Control placeholder="Search for new image.."/>
                        </Col>
                        <Col>
                            <Button variant="primary" type = "submit">Search</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Col>
        </Row>  
    </Container>
  );
};

export default Search;
