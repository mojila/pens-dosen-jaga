import React from 'react'
import { withRouter } from 'next/router'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

import Lecturer from './lecturer'
import Student from './student'

class FormLogin extends React.Component {
    state = {
        isLecturer: true,
        isStudent: false
    }

    componentDidMount() {
        document.body.style.backgroundColor = "#f1f1f1"
    }

    render() {
        let { router } = this.props;
        let { isLecturer, isStudent } = this.state;

        return (
        <Container className="mt-md-5 mb-5">
            <Row>
                <Col md={{size: 6, offset: 3}}>
                <div className="bg-white rounded p-3 shadow">
                    <div className="d-flex p-3">
                    <div className={"p-2 flex-fill text-center rounded-left text-uppercase pointer small " + (isLecturer ? "bg-primary text-white":"bg-white border")}
                        onClick={(e) => this.setState({isStudent: false, isLecturer: true})}
                    >lecturer</div>
                    <div className={"p-2 flex-fill text-center rounded-right text-uppercase pointer small " + (isStudent ? "bg-primary text-white":"bg-white border")}
                        onClick={(e) => this.setState({isStudent: true, isLecturer: false})}
                    >student</div>
                    </div>
                    <div className="clearfix"></div>

                    {isLecturer
                    && <Lecturer router={router} />}

                    {isStudent
                    && <Student router={router} />}
                </div>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default withRouter(FormLogin)