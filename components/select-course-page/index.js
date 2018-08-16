import React from 'react'
import { withRouter } from 'next/router'
import { Navbar, Container, Button, Input } from 'reactstrap'
import Ionicon from 'react-ionicons'

import Navigator from './navigator';
import Footer from './footer';
import Sidebar from './sidebar';

class BreadCrumb extends React.Component {
    render() {
        return (
            <div className="p-2 bg-light border">
                <div className="d-flex justify-content-start">
                    <div className="small text-secondary pointer">Dashboard lecturer</div>
                    <div className="small"><Ionicon fontSize="14" icon="ios-arrow-forward"/></div>
                    <div className="small text-secondary pointer">Mata Kuliah</div>
                    <div className="small"><Ionicon fontSize="14" icon="ios-arrow-forward"/></div>
                    <div className="small text-secondary pointer">Desain Web</div>
                    <div className="small"><Ionicon fontSize="14" icon="ios-arrow-forward"/></div>
                    <div className="small text-secondary pointer">Materi</div>
                </div>
            </div>
        )
    }
}

class SelectCoursePage extends React.Component {
    render() {
        return (
            <div>
                <Navigator/>
                <div className="mt-5">
                    <Container className="p-2 d-flex justify-content-between">
                        <Sidebar/>
                        <div className="flex-fill ml-2">
                            <BreadCrumb/>
                            <div className="p-2 bg-light border mt-2">
                                <div className="p-1 d-flex justify-content-between">
                                    <div><Button size="sm" color="outline-success">Tambah Materi</Button></div>
                                    <div><Input size="sm" placeholder="Pencarian ..."/></div>
                                </div>
                            </div>
                            <div className="p-2 bg-light border mt-2">
                                <div className="d-flex justify-content-start flex-wrap">
                                    <div className="p-2 border bg-white mr-2">
                                        <div className="pointer"><img src="/static/images/pdf.png" height="128"/></div>
                                        <div className="small mt-2 text-center">Dasar Web 1</div>
                                        <div className="text-center text-primary small pointer">Download</div>
                                    </div>
                                    <div className="p-2 border bg-white mr-2">
                                        <div className="pointer"><img src="/static/images/pdf.png" height="128"/></div>
                                        <div className="small mt-2 text-center">Dasar Web 2</div>
                                        <div className="text-center text-primary small pointer">Download</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 bg-light border mt-2">
                                <div className="d-flex justify-content-center">
                                    <div className="mr-1">
                                        <div className="small p-1 pl-4 pr-4 border">1</div>
                                    </div>
                                    <div><Button color="outline-secondary" size="sm">Selanjutnya</Button></div>
                                </div>
                            </div>
                            <Footer/>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}

export default withRouter(SelectCoursePage)