import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import {
    CardTitle,
    CardText,
    Row,
    Col,
    Button,
    Card,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
} from "reactstrap";
import post from './pamground.png';

function Main() {
    const navigate = useNavigate();

    const nextPage = (page) => {
        navigate("/" + page);
    }
    return (

        <div className="text-center">
            <header className="App-header">
                <div>

                    <Row>
                        <Col  >
                            <div style={{ marginRight: "300px" }}>
                            <img src={post} />
                            </div>
                        </Col>
                        <Col>
                            <button onClick={() => { nextPage("Number1") }}>
                                <h3>Number 1</h3>
                            </button>
                            <br />
                            <button onClick={() => { nextPage("Number2") }} style={{ marginTop: "50px" }} >
                                <h3>Number 2</h3>
                            </button>
                            <br />
                            <button onClick={() => { nextPage("Number3") }} style={{ marginTop: "50px" }} >
                                <h3>Number 3</h3>
                            </button>
                            <br />
                            <button onClick={() => { nextPage("Number4") }} style={{ marginTop: "50px" }} >
                                <h3>Number 4</h3>
                            </button>
                            <br />
                            <button onClick={() => { nextPage("Number5") }} style={{ marginTop: "50px" }}>
                                <h3>Number 5</h3>
                            </button>
                            <br />
                            <button onClick={() => { nextPage("Number6") }} style={{ marginTop: "50px" }} >
                                <h3>Number 6</h3>
                            </button>
                        </Col>
                    </Row>
                </div>
            </header>
        </div>
    );
}

export default Main;