import React from 'react'
import Head from 'next/head'
import Router from 'next/router'

import DashboardLecturerCourse from '../../../../components/dashboard-lecturer-course'
import SelectCoursePage from '../../../../components/select-course-page'

class LecturerCourse extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectCourse: ""
        }
    }

    componentDidMount() {
        if (Router.query.id) {
            this.setState({ selectCourse: Router.query.id })
        }
    }
    
    render() {
        let { selectCourse } = this.state

        return (
            <div>
                <Head>
                    <title>Dashboard Dosen: Mata Kuliah</title>
                </Head>
                <div>
                    { !selectCourse && <DashboardLecturerCourse/> }
                    { selectCourse && <SelectCoursePage/> }
                </div>
            </div>
        )
    }
}

export default LecturerCourse