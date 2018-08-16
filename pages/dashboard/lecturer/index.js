import React from 'react';
import Head from 'next/head';

import DashboardPage from '../../../components/dashboard-lecturer';

class LecturerMain extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Dashboard Dosen</title>
                </Head>
                <div>
                    <DashboardPage/>
                </div>
            </div>
        )
    }
}

export default LecturerMain;