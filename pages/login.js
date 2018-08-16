import React from 'react'
import Head from 'next/head'

import FormLogin from '../components/form-login'

class Login extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Login</title>
                </Head>
                <FormLogin/>
            </div>
        )
    }
}

export default Login