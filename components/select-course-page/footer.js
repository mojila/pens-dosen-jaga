import React from 'react';
import {withRouter} from 'next/router'

class Footer extends React.Component {
    render() {
        return (
            <div className="p-2 bg-light border mt-2">
                <div className="d-flex justify-content-between">
                    <div className="small">Dosen Jaga PENS 2018 &copy;</div>
                    <div>
                        <div className="small d-flex justify-content-start">
                            <div className="mr-2"><a href="#">Tentang</a></div>
                            <div className="mr-2"><a href="#">Pusat Bantuan</a></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Footer)