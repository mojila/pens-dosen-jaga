import React from 'react';
import Router, {withRouter} from 'next/router';
import {Navbar,Container} from 'reactstrap';
import Ionicon from 'react-ionicons';

const Logo = props => {
    return (
        <div className="pointer" onClick={() => Router.push('/dashboard/lecturer')}>
            {props.children}
        </div>
    );
};

class Profile extends React.Component {
    state = {
        active: false
    };

    _onToggle = () => { this.setState({ active: !this.state.active }) };

    _onLogout = () => { Router.push('/'); };

    render() {
        return (
            <div className={"mt-1"}>
                <div className={"small text-secondary pointer noselect"} onClick={this._onToggle}>
                    <Ionicon icon={this.state.active ? "ios-person":"ios-person-outline"}/> Profil
                </div>
                { this.state.active && <div className={"profile-menu border bg-white position-absolute mt-3 small"}>
                    <div className={"p-2 text-center pointer"} onClick={this._onLogout}><Ionicon icon={"ios-log-out"}/> Log Out</div>
                </div> }
            </div>
        );
    }
}

class Navigator extends React.Component {
    render() {
        return (
            <Navbar fixed="top" className="border-bottom" color="white">
                <Container>
                    <div className="w-100 d-flex justify-content-between">
                        <Logo><img src="/static/images/dosenjaga.png" height="32" alt="Dosen Jaga" className="rounded"/></Logo>
                        <Profile/>
                    </div>
                </Container>
            </Navbar>
        );
    }
}

export default withRouter(Navigator);