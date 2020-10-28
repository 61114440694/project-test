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
import { getInterpolation } from "./function";
import post from './pamground.png';

function Number5() {
    const navigate = useNavigate();
    const [x, setx] = useState('5');
    const [xi1, setxi1] = useState('0');
    const [xi2, setxi2] = useState('8');
    const [xi3, setxi3] = useState('14');
    const [xi4, setxi4] = useState('20');
    const [xi5, setxi5] = useState('23');
    const [xi6, setxi6] = useState('30');
    const [yi1, setyi1] = useState('0');
    const [yi2, setyi2] = useState('50');
    const [yi3, setyi3] = useState('96');
    const [yi4, setyi4] = useState('110');
    const [yi5, setyi5] = useState('13');
    const [yi6, setyi6] = useState('88');

    const [result, setresult] = useState();

    const back = () => {
        navigate("/");
    };

    const generate = () => {
        const data = {
            x: x,
            xi: [xi1, xi2, xi3, xi4, xi5, xi6],
            yi: [yi1, yi2, yi3, yi4, yi5, yi6]

        };
        getInterpolation(data).then((res) => {
            setresult(`วิที่ ${x} มีความเร็วประมาณ ${res}`)
        });
    };

    return (
        <div>
            <header className="App-header">
                <Row>
                    <Col>
                        <div className="text-center">
                            <h2 style={{ marginTop: "20px", marginRight: "20px" }}>Interpolation</h2>
                        </div>
                        <div className="text-center">
                            <p>exam:</p>
                            <p>t = 5</p>
                            <p>x = [ 0, 8, 14, 20, 23, 30 ]</p>
                            <p>y = [ 0, 50, 96, 110, 13, 88 ]</p>
                        </div>

                        <Row>
                            <h3 style={{ marginTop: "20px", marginRight: "20px" }}>t :</h3>
                            <Input
                                style={{
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                    width: 60,
                                }}
                                value={x}
                                onChange={(e) => setx(e.target.value)}
                                type="text"
                                name="bit2string"
                                id="bit2string"
                            />
                        </Row>


                        <Row>
                            <h3 style={{ marginTop: "20px", marginRight: "20px" }}>
                                xi :
                                        </h3>

                            <Input
                                style={{
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                    width: 60,
                                }}
                                value={xi1}
                                onChange={(e) => setxi1(e.target.value)}
                                type="text"
                                name="bit2string"
                                id="bit2string"
                            />
                            <Input
                                style={{
                                    marginLeft: "20px",
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                    width: 60,
                                }}
                                value={xi2}
                                onChange={(e) => setxi2(e.target.value)}
                                type="text"
                                name="bit2string"
                                id="bit2string"
                            />
                            <Input
                                style={{
                                    marginLeft: "20px",
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                    width: 60,
                                }}
                                value={xi3}
                                onChange={(e) => setxi3(e.target.value)}
                                type="text"
                                name="bit2string"
                                id="bit2string"
                            />
                            <Input
                                style={{
                                    marginLeft: "20px",
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                    width: 60,
                                }}
                                value={xi4}
                                onChange={(e) => setxi4(e.target.value)}
                                type="text"
                                name="bit2string"
                                id="bit2string"
                            />
                            <Input
                                style={{
                                    marginLeft: "20px",
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                    width: 60,
                                }}
                                value={xi5}
                                onChange={(e) => setxi5(e.target.value)}
                                type="text"
                                name="bit2string"
                                id="bit2string"
                            />
                            <Input
                                style={{
                                    marginLeft: "20px",
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                    width: 60,
                                }}
                                value={xi6}
                                onChange={(e) => setxi6(e.target.value)}
                                type="text"
                                name="bit2string"
                                id="bit2string"
                            />
                        </Row>


                        <Row>
                            <h3 style={{ marginTop: "20px", marginRight: "20px" }}>
                                yi :
                                        </h3>

                            <Input
                                style={{
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                    width: 60,
                                }}
                                value={yi1}
                                onChange={(e) => setyi1(e.target.value)}
                                type="text"
                                name="bit2string"
                                id="bit2string"
                            />
                            <Input
                                style={{
                                    marginLeft: "20px",
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                    width: 60,
                                }}
                                value={yi2}
                                onChange={(e) => setyi2(e.target.value)}
                                type="text"
                                name="bit2string"
                                id="bit2string"
                            />
                            <Input
                                style={{
                                    marginLeft: "20px",
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                    width: 60,
                                }}
                                value={yi3}
                                onChange={(e) => setyi3(e.target.value)}
                                type="text"
                                name="bit2string"
                                id="bit2string"
                            />
                            <Input
                                style={{
                                    marginLeft: "20px",
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                    width: 60,
                                }}
                                value={yi4}
                                onChange={(e) => setyi4(e.target.value)}
                                type="text"
                                name="bit2string"
                                id="bit2string"
                            />
                            <Input
                                style={{
                                    marginLeft: "20px",
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                    width: 60,
                                }}
                                value={yi5}
                                onChange={(e) => setyi5(e.target.value)}
                                type="text"
                                name="bit2string"
                                id="bit2string"
                            />
                            <Input
                                style={{
                                    marginLeft: "20px",
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                    width: 60,
                                }}
                                value={yi6}
                                onChange={(e) => setyi6(e.target.value)}
                                type="text"
                                name="bit2string"
                                id="bit2string"
                            />
                        </Row>

                        <h4 style={{ marginBottom: "10px" }}>Result: {result}</h4>
                        <div style={{marginLeft:"100px"}}>
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

export default Number5;
