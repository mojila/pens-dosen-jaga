import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import {Button} from 'reactstrap';

const Wrapper = props => {
    return (
        <div className={"p-3 bg-white"}>
            {props.children}
        </div>
    );
};

const Header = props => {
    return (
        <div className={"p-3 pl-5 pr-5 bg-blue"}>
            {props.children}
        </div>
    );
};

const Brand = props => {
    return (
        <div className={"p-1 bg-white rounded-circle"}><img src={"/static/images/dosenjaga.png"} height={"32"} className={"rounded-circle"}/></div>
    );
};

const Menu = props => {
    return (
        <div className={"d-flex justify-content-end flex-reverse"}>
            {props.children}
        </div>
    )
};

const MenuItem = ({ to = "#", children, active = false }) => {
    return (
        <div className={"rounded ml-2 pt-2 pl-4 pr-4 small text-uppercase text-white pointer font-weight-light " + (active ? "bg-darkblue":"")} onClick={() => Router.push(to)}>{children}</div>
    );
};

const FlexBetween = ({ children}) => {
    return (
        <div className={"d-flex justify-content-between"}>{children}</div>
    );
}

const Divider = props => {
    return (
        <div className={`p-${props.size}`}></div>
    );
}

const Content = props => {
    return (
        <div className="w-25">{props.children}</div>
    );
}

const Slide = props => {
    return (
        <div className="w-50">
            {props.children}
        </div>
    )
}

class Index extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Dosen Jaga</title>
                </Head>
                <Wrapper>
                    <Header>
                        <FlexBetween>
                            <Brand/>
                            <Menu>
                                <MenuItem active>Home</MenuItem>
                                <MenuItem>About</MenuItem>
                                <MenuItem>Help</MenuItem>
                                <MenuItem to={"/login"}>Sign In</MenuItem>
                            </Menu>
                        </FlexBetween>
                        <Divider size={5}/>
                        <FlexBetween>
                            <Content>
                                <div className="h2 text-white font-weight-bold text-uppercase">
                                    Pendidikan Jarak Jauh PENS.
                                </div>
                                <div>
                                    <Button className="bg-purple border-0" onClick={() => Router.push('/login')}>SIGN IN</Button>
                                </div>    
                            </Content>
                            <Slide>
                                <img src={"/static/images/759186550427e9606d1c8f52a5df27f2.png"} className="img-fluid"/>
                            </Slide>
                        </FlexBetween>
                        <Divider size={2}/>
                    </Header>
                </Wrapper>
            </div>
        )
    }
}

export default Index;