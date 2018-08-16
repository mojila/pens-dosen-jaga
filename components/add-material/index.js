import React from 'react';
import { withRouter } from 'next/router';
import { Navbar, Container, Button, Input } from 'reactstrap';
import Ionicon from 'react-ionicons';

import Navigator from '../select-course-page/navigator';
import Content from './content';
import Footer from '../select-course-page/footer';
import Sidebar from '../select-course-page/sidebar';
import Wrapper from './wrapper';

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
                    <div className="small"><Ionicon fontSize="14" icon="ios-arrow-forward"/></div>
                    <div className="small text-secondary pointer">Tambah Materi</div>
                </div>
            </div>
        )
    }
}

class Category extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-between mb-2">
                {this.props.children}
            </div>
        )
    }
}

class Title extends React.Component {
    render() {
        return (
            <div className="small mb-2">
                {this.props.children}
            </div>
        )
    }
}

class AddMaterialPage extends React.Component {
    _onLogoClick = () => {
        let { router } = this.props;

        router.push('/dashboard/lecturer');
    }

    render() {
        return (
            <div>
                <Navigator/>
                <Wrapper>
                    <Sidebar/>
                    <Content>
                        <BreadCrumb/>
                        <div className="p-2 border mt-2">
                            <div>
                                <Title>Pilih Jenis Materi</Title>
                                <Category>
                                    <div className="p-2 bg-light border flex-fill mr-2 pointer rounded">
                                        <div className="d-flex justify-content-between">
                                            <div><Ionicon icon="ios-book-outline" fontSize="32"/></div>
                                            <div className="flex-fill text-center mt-1">E-Book</div>
                                        </div>
                                    </div>
                                    <div className="p-2 bg-light border flex-fill mr-2 pointer rounded">
                                        <div className="d-flex justify-content-between">
                                            <div><Ionicon icon="ios-videocam-outline" fontSize="32"/></div>
                                            <div className="flex-fill text-center mt-1">Video</div>
                                        </div>
                                    </div>
                                </Category>
                                <Title>Tentang Buku</Title>
                                <div><hr/></div>
                                <div className="mb-2">
                                    <Input size="sm" placeholder="Judul Buku"/>
                                </div>
                                <div className="mb-2">
                                    <textarea className="form-control form-control-sm" placeholder="Deskripsi Buku"></textarea>
                                </div>
                            </div>
                        </div>
                        <Footer/>
                    </Content>
                </Wrapper>
            </div>
        )
    }
}

export default withRouter(AddMaterialPage);