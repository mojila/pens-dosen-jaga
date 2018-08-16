import React from 'react';
import { withRouter } from 'next/router';
import { Input } from 'reactstrap';

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

class DashboardPage extends React.Component {
  render() {
    return (
      <div>
        <Navigator/>
        <Wrapper>
          <Sidebar/>
          <Content>
              <BreadCrumb/>
              <Footer/>
          </Content>
        </Wrapper>
      </div>
    )
  }
}

export default withRouter(DashboardPage)
