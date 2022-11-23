import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Container} from 'react-bootstrap';

const ImageCard = ({image}) => {
  return (
    <Container className = "mt-4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {image.urls.small} />
        <Card.Body>
          <Card.Title>{image.title.toUpperCase()}</Card.Title>
          <Card.Text>
            {image.description || image.alt_description}
          </Card.Text>
          <Button variant="danger">Delete</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ImageCard;

