import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import product from './product';

const firstName = "YourFirstName"; // Replace with your name or leave empty

function App() {
  return (
    <Container>
      <Card style={{ width: '18rem', margin: '20px auto' }}>
        <Card.Body>
          <Name />
          <Price />
          <Description />
          <Image />
        </Card.Body>
      </Card>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Hello, {firstName ? firstName : 'there!'}</h2>
        {firstName && <img src="your-image-url" alt="Your Image" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />}
      </div>
    </Container>
  );
}

export default App;
