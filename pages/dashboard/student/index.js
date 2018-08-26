import React from 'react';
import {Input} from 'reactstrap';
import Ionicon from 'react-ionicons';

const NavigatorWrapper = props => {
    return (
        <div className={"w-100 p-3 pl-5 pr-5 border-bottom bg-white border-primary shadow d-flex justify-content-between"}>
            {props.children}
        </div>
    )
};

const NavigatorContent = props => {
    return (
        <div className={"d-flex justify-content-between"}>{props.children}</div>
    );
};

const Brand = props => {
    return (
        <div className={"mr-5"}><img src={"/static/images/dosenjaga.png"} height={"32px"} className={"rounded"}/></div>
    );
};

const SearchResultItem = props => {
    return (
        <div className={"p-2 small pointer"}>
            <a href={"#"}>{props.children}</a>
        </div>
    );
};

const Search = props => {
    return (
        <div>
            <div className={"pl-2 pr-3 border border-primary d-flex"}>
                <div><Ionicon icon={"ios-search"} color={"#9b9b9b"}/></div>
                <div><Input className={"border-0"} bsSize={"sm"} placeholder={"Cari Mata Kuliah ..."}/></div>
            </div>
            <div className={"w-25 p-2 border border-primary bg-white position-absolute"}>
                <SearchResultItem>Web Design (IT)</SearchResultItem>
            </div>
        </div>
    )
};

const Menu = props => {
    return (
        <div className={"d-flex mt-1"}>
            {props.children}
        </div>
    );
};

const MenuItem = props => {
    return (
        <div className={"small pointer ml-4"}><Ionicon icon={props.icon}/> {props.children}</div>
    );
};

export default class DashboardStudent extends React.Component {
    render() {
        return (
            <div>
                <NavigatorWrapper>
                    <NavigatorContent>
                        <Brand/>
                        <Search/>
                    </NavigatorContent>
                    <NavigatorContent>
                        <Menu>
                            <MenuItem icon={"ios-home-outline"}>Beranda</MenuItem>
                            <MenuItem icon={"ios-log-out"}>Keluar</MenuItem>
                        </Menu>
                    </NavigatorContent>
                </NavigatorWrapper>
            </div>
        );
    }
}