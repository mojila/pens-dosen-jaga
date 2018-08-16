import React from 'react'
import Head from 'next/head'

import SelectCoursePage from '../../../../components/select-course-page';

class Selected extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Dashboard Dosen: Mata Kuliah - Web Design</title>
                </Head>
                <div>
                    <SelectCoursePage/>
                </div>
            </div>
        )
    }
}

export default Selected;