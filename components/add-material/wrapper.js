import React from 'react';
import {Container} from 'reactstrap';

export default class Wrapper extends React.Component {
    render() {
        return (
            <div className="mt-5">
                <Container className="p-2 d-flex justify-content-between">
                    {this.props.children}
                </Container>
            </div>
        )
    }
}