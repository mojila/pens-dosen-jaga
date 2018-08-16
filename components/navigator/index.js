import React from 'react'
import {
    Container,
    Navbar
} from 'reactstrap'
import { withRouter } from 'next/router'

import Menu from './menu'
import Brand from './brand'

class Navigator extends React.Component {
    render() {
        let { router } = this.props

        return (
            <Navbar className="shadow">
                <Container>
                    <Brand router={router}/>
                    <Menu/>
                </Container>
            </Navbar>
        )
    }
}

export default withRouter(Navigator)