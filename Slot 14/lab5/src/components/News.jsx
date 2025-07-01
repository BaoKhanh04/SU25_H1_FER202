import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import news1 from '../data/image/news1.jpg';
import news2 from '../data/image/news2.jpg';
import news3 from '../data/image/news3.jpg';
import news4 from '../data/image/news4.jpg';
import news5 from '../data/image/news5.jpg';
import news6 from '../data/image/news6.jpg';
import news7 from '../data/image/news7.jpg';
import news8 from '../data/image/news8.jpg';

const newLists = [
  { 
    id: 1, 
    title: 'Woman bakes expletive-laden pies to "get a rise" out of her grandmother in annual tradition', 
    description: '"What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition," wrote Jess Lydon.', 
    images: news1
  },
  { 
    id: 2, 
    title: 'Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans', 
    description: 'Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.', 
    images: news2 
  },
  { 
    id: 3, 
    title: 'Burger King is testing a new breakfast sandwich', 
    description: 'This is a win for the flatbread fans.', 
    images: news3 
  },
  { 
    id: 4, 
    title: 'Popeyes permanently adds chicken wings to its menu', 
    description: 'And you can get \'em in five different flavors.', 
    images: news4 
  },
  { 
    id: 5, 
    title: 'Top salmon with a sizzling mix of aromatics and spices', 
    description: 'Tadka is a ubiquitous South Asian technique that adds a dramatic last-minute coat of flavor.', 
    images: news5 
  },
  { 
    id: 6, 
    title: '80 Christmas dinner ideas for the ultimate holiday feast', 
    description: 'Build the perfect Christmas menu with these delicious recipes.', 
    images: news6 
  },
  { 
    id: 7, 
    title: 'How to make the easiest prime rib roast for the holidays', 
    description: 'Use these tips and tricks to make a juicy and amazingly delicious prime rib roast.', 
    images: news7 
  },
  { 
    id: 8, 
    title: 'Turn leftover turkey into a flavorful Waldorf salad', 
    description: 'This light, bright turkey salad is the best post-Thanksgiving lunch.', 
    images: news8 
  }
];

const News = () => {
  return (
    <Container>
      <h2 className="mb-4">Latest News</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {newLists.map((item) => (
          <Col key={item.id}>
            <Card className="h-100">
              <Card.Img variant="top" src={item.images} alt={item.title} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default News;
