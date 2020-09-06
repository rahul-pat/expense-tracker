import React from 'react';
import Col from 'react-bootstrap/Col';

function Balance(props) {
    let balance = 0;

    for (let i = 0; i < props.transactions.length; i++) {
        balance = balance + Number(props.transactions[i].amount);
    }


    return (
        <Col className = "mt-4 col-5">
            <h4>Balance: </h4>
            <h2>{balance.toFixed(2)}$</h2>
        </Col>
    )
}

export default Balance