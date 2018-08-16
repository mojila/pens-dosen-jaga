import React from 'react'
import {
    Form, Row, Col, FormGroup, Label, Input, Button
} from 'reactstrap';
import ReactLoading from 'react-loading';
import axios from 'axios';

class Lecturer extends React.Component {
    mounted = false;
    state = {
        loading: true,
        username: '',
        password: '',
        error: ''
    };

    componentDidMount() {
        this.mounted = true;

        if (this.mounted) {
            axios.get('http://192.168.1.17:3000')
                .then(() => {
                    return this.setState({ loading: false });
                })
                .catch(error => {
                    this.setState({ loading: false, error: 'Tidak Terhubung ke Server Database. Silahkan Ulangi Beberapa saat Lagi.' });
                    return console.error(error)
                });
        }
    }

    componentWillMount() {
        this.mounted = false;
    }

    _onSubmit = e => {
        console.log(e.target);
        e.preventDefault();
    };

    render() {
        return <div>
            { this.state.error && <div className={"ml-3 shadow mr-3 p-2 bg-danger text-center text-white rounded small"}>{this.state.error}</div> }
            {this.state.loading && <div className={""}>
                <ReactLoading className={"mx-auto mt-5 mb-5"} type={"spin"} height={"64px"} width={"64px"}
                              color={"#0070e8"}/>
            </div>}
            {!this.state.loading && <Form className="p-3" onSubmit={this._onSubmit}>
                <Row>
                    <Col md="6">
                        <FormGroup>
                            <Label className="small">E-mail Dosen</Label>
                            <Input size="sm" required disabled={this.state.error}/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <Label className="small">&nbsp;</Label>
                        <Input size="sm" value="@pens.ac.id" disabled/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="small">Password</Label>
                            <Input type="password" size="sm" required disabled={this.state.error}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <input type="checkbox"/> <span className="small">Ingat Kata Sandi</span>
                    </Col>
                    <Col md="6">
                        <Button type={"submit"} color="primary" size="sm" className="shadow" block disabled={this.state.error}>Login</Button>
                    </Col>
                </Row>
            </Form>}
        </div>
    }
}

export default Lecturer