import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function ToPack({ topack, index, markTopack, removeTopack }) {
  return (
    <div
      className="topack"
      style={{
        alignItems: "center",
        display: "flex",
        fontSize: "18px",
        justifyContent: "space-between",
      }}
    >
      <span style={{ textDecoration: topack.isDone ? "line-through" : "" }}>
        {topack.text}
      </span>
      <div>
        <Button variant="btn btn-warning" onClick={() => markTopack(index)}>✓</Button>{" "}
        <Button variant="btn btn-danger" onClick={() => removeTopack(index)}>✕</Button>
      </div>
    </div>
  );
}

function FormTopack({ addTopack }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTopack(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label style={{marginBottom:"1rem"}}>
          <span style={{backgroundColor:"rgba(255,255,255,0.7)", fontSize:"1rem",padding:"0.5rem",borderRadius:"0.7rem"}}>Add Items</span>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new item"
        />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Add
      </Button>
    </Form>
  );
}

function DontForgetMe() {
  const [topacks, setTopacks] = React.useState([
    {
      text: "Tickets",
      isDone: false,
    },
  ]);

  const addTopack = (text) => {
    const newTopacks = [...topacks, { text }];
    setTopacks(newTopacks);
  };

  const markTopack = (index) => {
    const newTopacks = [...topacks];
    if (newTopacks[index].isDone === true) {
      newTopacks[index].isDone = false;
    } else newTopacks[index].isDone = true;
    setTopacks(newTopacks);
  };

  const removeTopack = (index) => {
    const newTopacks = [...topacks];
    newTopacks.splice(index, 1);
    setTopacks(newTopacks);
  };

  return (
    <div
      className="app"
      style={{
        padding: "1rem",
        backgroundImage : `url("https://images.unsplash.com/photo-1604937455095-ef2fe3d46fcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")`
        // backgroundImage: `url("https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9udCUyMGZvcmdldCUyMG1lJTIwZHVyaW5nJTIwdHJhdmVsJTIwYmFja2dyb3VuZCUyMGltYWdlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`
      }}
    >
      <div className="container">
        <div style={{textAlign:"center"}}>
        <span className="text-center mb-4" style={{backgroundColor:"rgba(255,255,255,0.6)", fontWeight:"500", fontSize:"2rem",padding:"0.5rem",borderRadius:"1rem"}}>Dont Forget Me!</span>
        </div>
        <br/>
        <FormTopack addTopack={addTopack} />
        <Container>
          <Row>
            {topacks.map((topack, index) => (
              <Col key="{text}" md="6">
                <Card style={{ margin: "0.5rem" }}>
                  <Card.Body style={{ padding: "0.7rem" }}>
                    <ToPack
                      key={index}
                      index={index}
                      topack={topack}
                      markTopack={markTopack}
                      removeTopack={removeTopack}
                    />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default DontForgetMe;
