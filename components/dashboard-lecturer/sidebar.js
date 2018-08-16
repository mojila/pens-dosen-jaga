import React from 'react';
import Router, {withRouter} from 'next/router';
import Ionicon from 'react-ionicons';

import UserProfile from './user-profile';

class SidebarWrapper extends React.Component {
    render() {
        return (
            <div className="w-25 p-2 border">
                {this.props.children}
            </div>
        )
    }
}

class AbsentButton extends React.Component {
    render() {
        return (
            <div className="mt-2">
                <div className="p-2 bg-secondary d-flex justify-content-between pointer">
                    <div className="text-white text-uppercase small">Absen</div>
                    <div className="text-white text-uppercase small">
                        <Ionicon icon="ios-lock" color="#fff"/>
                    </div>
                </div>
            </div>
        )
    }
}

class Course extends React.Component {
    _onClickCourse = e => Router.push('/dashboard/lecturer/course/selected?nomor=' + e.target.id);

    _onClickMore = () => Router.push('/dashboard/lecturer/course');

    render() {
        return (
            <div className="mt-2 border">
                <div className="p-2 border-bottom text-center small text-uppercase">
                    Mata Kuliah
                </div>
                <div className="bg-light">
                    <div id="1" className="p-2 small pointer mb-2" onClick={this._onClickCourse}>Web Design</div>
                </div>
                <div className="p-2 border-top text-center small text-uppercase pointer" onClick={this._onClickMore}>
                    Selengkapnya
                </div>
            </div>
        )
    }
}

class Sidebar extends React.Component {
    render() {
        return (
            <SidebarWrapper>
                <UserProfile/>
                <AbsentButton/>
                <Course/>
            </SidebarWrapper>
        );
    }
}

export default withRouter(Sidebar);