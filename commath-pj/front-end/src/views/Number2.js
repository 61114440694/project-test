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
import { getDifferentiation } from "./function";
import post from './pamground.png';

function Number2() {
    const navigate = useNavigate();
    const [h, seth] = useState('0.64');
    const [p, setp] = useState('2');

    const [result, setresult] = useState();

    const back = () => {
        navigate("/");
    };

    const generate = () => {
        const data = {
            h: h,
            p: p

        };
        getDifferentiation(data).then((res) => {
            setresult(res)
        });
    };

    return (
        <div>
            <header className="App-header">
                <Row>
                    <Col>
                        <div className="text-center">
                            <h2 style={{ marginTop: "20px", marginRight: "20px" }}>
                                Differentiation
                                </h2>
                        </div>
                        <div className="text-center">
                            <p>exam:</p>
                            <p>h = 0.64</p>
                            <p>p = 2</p>
                        </div>

                        <div className="text-center">
                            <Row>
                                <h3 style={{ marginTop: "20px", marginLeft: "50px" }}>h : </h3>
                                <Input
                                    style={{
                                        marginLeft: "20px",
                                        marginTop: "20px",
                                        marginBottom: "20px",
                                        width: 100,
                                    }}
                                    value={h}
                                    onChange={(e) => seth(e.target.value)}
                                    type="text"
                                    name="bit2string"
                                    id="bit2string"
                                />
                            </Row>
                            <Row>
                                <h3 style={{ marginTop: "20px", marginLeft: "50px" }}>p :</h3>
                                <Input
                                    style={{
                                        marginLeft: "20px",
                                        marginTop: "20px",
                                        marginBottom: "20px",
                                        width: 100,
                                    }}
                                    value={p}
                                    onChange={(e) => setp(e.target.value)}
                                    type="text"
                                    name="bit2string"
                                    id="bit2string"
                                />
                            </Row>
                        </div>

                        <h4 style={{ marginBottom: "10px" }}>Result : {result}</h4>

                        <Button onClick={generate} color="primary">
                            <div style={{ width: 100 }}>
                                <h3 style={{ marginTop: "10px"}}>submit</h3>
                            </div>
                        </Button>

                        <Button onClick={back} color="secondary">
                            <div style={{ width: 100 }}>
                                <h3 style={{ marginTop: "10px" }}>back</h3>
                            </div>
                        </Button>
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
export default Number2;
