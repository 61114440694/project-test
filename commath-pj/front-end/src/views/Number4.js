import React, { useState } from "react";
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
import "../App.css";
import { useNavigate } from "react-router-dom";
import { getIntegration } from "./function";
import post from './pamground.png';

function Number4() {
    const navigate = useNavigate();

    const [result, setresult] = useState();
    const [a, seta] = useState('0');
    const [b, setb] = useState('3');

    const back = () => {
        navigate("/");
    };

    const generate = () => {
        const data = {
            a: a,
            b: b,
        };
        getIntegration(data).then((res) => {
            setresult(res);
        });
    };
    return (
        <div>
            <header className="App-header">
                <Row>
                    <Col>
                        <div className="text-center">
                            <h2 style={{ marginTop: "20px", marginRight: "20px" }}>
                                Integration
                                </h2>
                        </div>
                        <div className="text-center">
                            <p>exam:</p>
                            <p>a = 0</p>
                            <p>b = 3</p>
                        </div>

                        <div className="text-center">
                            <Row>
                                <h3 style={{ marginTop: "20px", marginLeft: "50px" }}>a :</h3>
                                <Input
                                    style={{
                                        marginLeft: "10px",
                                        marginTop: "20px",
                                        marginBottom: "20px",
                                        width: 100,
                                    }}
                                    value={a}
                                    onChange={(e) => seta(e.target.value)}
                                    type="text"
                                    name="bit2string"
                                    id="bit2string"
                                />
                            </Row>
                            <Row>
                                <h3 style={{ marginTop: "20px", marginLeft: "50px" }}>b :</h3>
                                <Input
                                    style={{
                                        marginLeft: "10px",
                                        marginTop: "20px",
                                        marginBottom: "20px",
                                        width: 100,
                                    }}
                                    value={b}
                                    onChange={(e) => setb(e.target.value)}
                                    type="text"
                                    name="bit2string"
                                    id="bit2string"
                                />
                            </Row>
                        </div>
                        <h4 style={{ marginBottom: "10px" }}>Result: {result}</h4>
                        <div>
                            <Button onClick={generate} color="primary">
                                <div style={{ width: 100 }}>
                                    <h3 style={{ marginTop: "10px" }}>submit</h3>
                                </div>
                            </Button>
                            <Button onClick={back} color="secondary">
                                <div style={{ width: 100 }}>
                                    <h3 style={{ marginTop: "10px" }}>back</h3>
                                </div>
                            </Button>
                        </div>
                    </Col>


                    <Col>
                        <div style={{ marginLeft: "200px" }}>
                            <img src={post} />
                        </div>
                    </Col>
                </Row>
            </header>
        </div>
    );
}
export default Number4;