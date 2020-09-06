import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

function IncomeExpense(props) {

    let income = 0;

    //Calculates income
    for(let i = 0; i < props.transactions.length; i++) {
        if (props.transactions[i].amount > 0) {
            income = income + Number(props.transactions[i].amount);
        };
    };

    let expense = 0;
    
    // Calculates expenses
    for(let i = 0; i < props.transactions.length; i++) {
        if (props.transactions[i].amount < 0) {
            expense = expense + Number(props.transactions[i].amount);
        };
    };



    return (
        <Col className="mt-4 col-5">
            <Container>
                <Row className="bg-light border">
                    <Col className="text-center mt-2">
                        <h4>Income</h4>
                        <p className="text-success">{income}$</p>
                    </Col>
                    <Col className="text-center mt-2">
                        <h4>Expense</h4>
                        <p className="text-danger">{expense}$</p>
                    </Col>
                </Row>
            </Container>
        </Col>
    )
}

export default IncomeExpense