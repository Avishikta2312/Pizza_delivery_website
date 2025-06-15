import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import Pizza from '../pizzadata.js'

export default function pizza({ pizza }) {
  const [Quantity, setQuantity] = useState(1);
  const [Varient, setVarient] = useState(pizza.varients[0]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{ margin: '100px' }} className='shadow-lg p-3 mb-5 bg-white rounded'>
      <div onClick={handleShow}>
        <h3>{pizza.name}</h3>
        <img src={pizza.image} className='pizza-fluid' style={{ height: '200px', width: '300px' }} />
      </div>
      <div className='flex-container'>
        <div className='w-100 m-1'>
          <p>Variants</p>
          <select className='form-control' value={Varient} onChange={(e) => { setVarient(e.target.value) }}>
            {pizza.varients.map((Varient, index) => (
              <option key={index} value={Varient}>
                {Varient}
              </option>
            ))}
          </select>
        </div>
        <div className='w-100 m-1'>
          <p>Quantity</p>
          <select className='form-control' value={Quantity} onChange={(e) => { setQuantity(e.target.value) }}>
            {[...Array(10).keys()].map((x, i) => {
              return <option key={i} value={i + 1}>{i + 1}</option>
            })}
          </select>
        </div>

      </div>

      <div className='flex-container'>
        <div className='m-1 w-100'>
          <h4 className='mt-1'>Price : {pizza.prices[0][Varient] * [Quantity]}Rs/-</h4>
        </div>
        <div className='m-1 w-100'>
          <button className='btn'>ADD TO CART</button>
        </div>

      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <img src={pizza.image} className='pizza-fluid' style={{ height: '400px', width: '500px' }} />
        <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}