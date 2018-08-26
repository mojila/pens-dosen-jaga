import React from 'react';
import { withRouter } from 'next/router';
import { Input, Button } from 'reactstrap';
import Ionicon from 'react-ionicons';

import Navigator from '../select-course-page/navigator';
import Wrapper from '../add-material/wrapper';
import Sidebar from './sidebar';
import Content from '../add-material/content';
import Footer from '../select-course-page/footer';

class BreadCrumb extends React.Component {
  render() {
      return (
          <div className="p-2 bg-light border">
              <div className="d-flex justify-content-start">
                  <div className="small text-secondary pointer">Dashboard lecturer</div>
              </div>
          </div>
      )
  }
}

const NewsfeedWrapper = props => {
    return (
        <div className={"mt-2 border"}>
            {props.children}
        </div>
    );
};

const NewsfeedHeader = props => {
    return (
        <div className={"d-flex justify-content-start small border-bottom pt-2 pl-2 pr-2"}>
            {props.children}
        </div>
    );
};

const NewsfeedHeaderItem = props => {
    return (
        <div className={"border-bottom pt-2 pb-2 " + (props.active ? "border-primary text-primary":"")}>
            <Ionicon icon={props.icon} color={"#007bff"}/>
            {props.children}
        </div>
    );
};

const NewsfeedInput = props => {
    return (
        <div className={"p-2"}>{props.children}</div>
    );
};

class DashboardPage extends React.Component {
  render() {
    return (
      <div>
        <Navigator/>
        <Wrapper>
          <Sidebar/>
          <Content>
              <BreadCrumb/>
              <NewsfeedWrapper>
                  <NewsfeedHeader>
                      <NewsfeedHeaderItem icon={"ios-create"} active>Update Status</NewsfeedHeaderItem>
                  </NewsfeedHeader>
                  <NewsfeedInput>
                      <div><Input bsSize={"sm"} className={"rounded-0"} placeholder={"Ketik status anda . . ."}/></div>
                      <div className={"text-right"}><Button size={"sm"} className={"rounded-0 pl-5 pr-5 mt-2"} color={"primary"}>Kirimkan</Button></div>
                  </NewsfeedInput>
              </NewsfeedWrapper>
              <Footer/>
          </Content>
        </Wrapper>
      </div>
    )
  }
}

export default withRouter(DashboardPage)
