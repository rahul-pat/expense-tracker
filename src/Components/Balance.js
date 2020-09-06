import React from 'react';
import Col from 'react-bootstrap/Col';

function Balance(props) {
    let balance = 0;

    // Loop through all the transactions in props and add total balance
    for (let i = 0; i < props.transactions.length; i++) {
        balance = balance + Number(props.transactions[i].amount);
    }

    return (
        <Col className = "mt-4 col-sm-5 text-center">
            <h4>Balance: </h4>
            <h2>{balance.toFixed(2)}$</h2>
        </Col>
    )
}

export default Balance