import React from 'react';
import {
    Nav,
    NavItem,
    Tooltip
} from 'reactstrap';
import Ionicon from 'react-ionicons';
import {withRouter} from 'next/router';

class Menu extends React.Component {
    state = {
        tooltipOpen: false
    };

    render() {
        let { tooltipOpen } = this.state;
        let { router } = this.props;

        return (
            <Nav className="ml-auto">
                <NavItem className="mr-4 pointer">
                    <p className="font-weight-light m-0 mt-1 p-0 small">Cara Kerja</p>
                </NavItem>
                <NavItem className="mr-4 pointer">
                    <p className="font-weight-light m-0 mt-1 p-0 small">Pusat Bantuan</p>
                </NavItem>
                <NavItem className="mr-4 pointer">
                    <p className="font-weight-light m-0 mt-1 p-0 small">Tentang Kami</p>
                </NavItem>
                <NavItem className="mr-4 pointer">
                    <p className="font-weight-light m-0 mt-1 p-0 small">Tentang PENS</p>
                </NavItem>
                <NavItem className="pointer" id="TooltipLogin"
                    onClick={() => router.push('/login')}
                >
                    <Ionicon className="m-0 p-0" icon="ios-log-in"/>
                    <Tooltip placement="bottom" isOpen={tooltipOpen} target="TooltipLogin"
                        toggle={() => this.setState({ tooltipOpen: !tooltipOpen })}
                    >
                        Login
                    </Tooltip>
                </NavItem>
            </Nav>
        )
    }
}

export default withRouter(Menu);