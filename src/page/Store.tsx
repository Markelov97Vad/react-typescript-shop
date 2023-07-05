import { Col, Row } from 'react-bootstrap';

import StoreItem from '../components/StoreItem';
import { storeItmes } from '../data/storeItem';

function Store() {
  

  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className='g-3'>
        {storeItmes.map(item => (
          <Col key={item.id}>
            <StoreItem {...item}/>
          </Col>
        ))}
      </Row>
    </>
   );
}

export default Store;