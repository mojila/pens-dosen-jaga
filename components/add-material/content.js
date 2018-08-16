import React from 'react';
import {withRouter} from 'next/router';

class Content extends React.Component {
    render() {
        return (
            <div className="flex-fill ml-2">
                {this.props.children}
            </div>
        );
    }
}

export default withRouter(Content);