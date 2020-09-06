import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';


function History(props) {
    
    /* Function that sets a green right border if the amount is positive
    or a red border if the amount is negative */
   function transactionColor(amount) {
        if (amount > 0 ) {
            return {borderRight: "green solid"}
        } else {
            return {borderRight: "red solid"}
        }
    }

    return (
        <Col className = "mt-4 col-sm-5">
            <h5>History </h5>
            <hr />
            <ListGroup>
                {props.transactions.map((transaction) => (
                    <ListGroup.Item style={transactionColor(transaction.amount)}  key={transaction.id}> 
                        <button onClick={() => props.delete(transaction.id)} className="btn btn-danger btn-sm">x</button> 
                        <span className="ml-4"> {transaction.task} <span style={{float: "right"}}>{transaction.amount}$  </span> </span>  
                    </ListGroup.Item>
                ))}
            </ListGroup>   
        </Col>
    )
}

export default History