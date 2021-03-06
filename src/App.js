import React, { useState } from 'react';

/* Import functional components */
import Header from './Components/Header'
import Balance from './Components/Balance'
import IncomeExpense from './Components/IncomeExpense'
import History from './Components/History'

/* Import React Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'


function App() {
  // States:
  // List of all transactions
  const [transactions, updateTransactionList] = useState([]);
  // Keeps track of transaction entered in the input box
  const [task, setTask] = useState('');
  // Keeps track of the amount entered in input box
  const [amount, setAmount] = useState();

  /* Delete transaction function: takes the id of the transaction to delete and 
  create a new array using the filter method that is passed to updateTransactionList */
  function deleteTransaction(id) {
    const newTransactions = transactions.filter((item) => item.id  !== id);
    updateTransactionList(newTransactions);
  }

  return (
        <Container fluid >
          <Row className="justify-content-center">
                <Header />
          </Row>
          <Row className="justify-content-center">
               <Balance transactions={transactions}/> 
          </Row>
          <Row className="justify-content-center">
                <IncomeExpense transactions={transactions} />
          </Row>
          <Row className="justify-content-center">
                <History transactions={transactions} delete={deleteTransaction} />
          </Row>
          <Row className="justify-content-center">
              <Col className="mt-4 col-sm-5">
              <h5>Add new transaction </h5>
            <hr />
            <Form onSubmit={(e) => {
              e.preventDefault()
              let newTransaction = {
                id: Math.random() * 100000,
                task: e.target.task.value,
                amount: e.target.amount.value
              }
              updateTransactionList((transactions) => [...transactions, newTransaction])
            }}>
                <Form.Row>
                    <Form.Label>
                        Transaction Name
                    </Form.Label>
                    <Form.Control name="task" value={task} onChange={(e) => setTask(e.target.value)} type="text" placeholder="Enter transaction.." />
                </Form.Row>
                <Form.Row>
                    <Form.Label>
                        Amount ($)
                    </Form.Label>
                    <Form.Control name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Enter amount.." />
                </Form.Row>
                <Button type="submit" className="mt-4 btn-dark btn-block">Add Transaction</Button>
            </Form>
              </Col>
          </Row>
        </Container>

  );
}

export default App;
