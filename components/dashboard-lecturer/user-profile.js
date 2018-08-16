import React from 'react';
import {withRouter} from 'next/router';

class UserProfile extends React.Component {
    render() {
        return (
            <div className="p-2 border">
                <div className="d-flex justify-content-between">
                    <div><img src="/static/images/ava.png" height="72" className="rounded"/></div>
                    <div className="flex-fill ml-2 small">
                    <div className="font-weight-bold small">Nama</div>
                    <div>Moch. Aji Laksono</div>
                    <div className="font-weight-bold small">Jabatan</div>
                    <div>Dosen</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(UserProfile);