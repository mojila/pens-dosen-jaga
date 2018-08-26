import React from 'react';
import { Button } from 'reactstrap';
import Router, { withRouter } from 'next/router';
import Ionicon from 'react-ionicons';

class CourseProfile extends React.Component {
    render() {
        return (
            <div className="bg-light border">
                <div className="p-2 border-bottom small text-center">T. Informatika</div>
                <div className="p-2 small">
                    <div className="small font-weight-bold">Mata Kuliah</div>
                    <div>Desain Web</div>
                    <div className="small font-weight-bold mt-2">Jumlah Mahasiswa</div>
                    <div>30 Mahasiswa</div>
                </div>
            </div>
        )
    }
}

class SidebarCourse extends React.Component {
    render() {
        return (
            <div className="w-25 p-2 border">
                <CourseProfile/>
                <div className="mt-2">
                    <Button size="sm" color="outline-success" block>Kuliah Online</Button>
                </div>
                <div className="mt-2">
                    <Button size="sm" color="outline-primary" block>Buat Tugas</Button>
                </div>
                <div className="mt-2">
                    <Button size="sm" color="outline-primary"
                        onClick={() => Router.push('/dashboard/lecturer/course/add-material')}
                        block>
                        Buat Materi
                    </Button>
                </div>
                <div className="mt-2 mb-2"><hr/></div>
                <div className="p-1 small d-flex justify-content-between pointer mb-1">
                    <div>Materi</div> 
                    <Ionicon icon="ios-book-outline"/>
                </div>
                <div className="p-1 small d-flex justify-content-between pointer mb-1">
                    <div>Tugas</div> 
                    <Ionicon icon="ios-checkmark-circle-outline"/>
                </div>
                <div className="p-1 small d-flex justify-content-between pointer mb-1">
                    <div>Jadwal</div>
                    <Ionicon icon="ios-calendar-outline"/>
                </div>
                <div className="p-1 small d-flex justify-content-between pointer mb-1">
                    <div>Mahasiswa</div>
                    <Ionicon icon="ios-contact"/>
                </div>
            </div>
        )
    }
}

export default withRouter(SidebarCourse);