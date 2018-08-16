import React from 'react';
import Router, { withRouter } from 'next/router';
import Ionicon from 'react-ionicons';

import Sidebar from '../dashboard-lecturer/sidebar';
import Navigator from "../select-course-page/navigator";
import Wrapper from "../add-material/wrapper";
import Content from "../add-material/content";
import Footer from "../select-course-page/footer";

const BreadCrum = props => {
    return (
        <div className="p-2 bg-light border">
            <div className="d-flex justify-content-start">
                <div className="small text-secondary pointer">Dashboard lecturer</div>
                <div className="small text-secondary ml-2 mr-2">></div>
                <div className="small text-secondary pointer">Mata Kuliah</div>
            </div>
        </div>
    );
};

const CoursesWrapper = props => {
    return (
      <div className={"border p-2 bg-light d-flex justify-content-between mt-2"}>
          {props.children}
      </div>
    );
};

const Course = props => {
    return (
        <div className={"m-2 border w-25"}>
            {props.children}
        </div>
    );
};

const CourseTitle = props => {
  return (
      <div>
        <div className={"d-flex justify-content-start"}>
            <div className={"course-title-bubble small text-center bg-primary text-white mr-2"}>{props.children.substr(0,1)}</div>
            <div className={""}><a href={"#"} onClick={() => Router.push('/dashboard/lecturer/course/selected?nomor=1')}>{props.children}</a></div>
        </div>
      </div>
  );
};

const CourseBody = props => {
    return (
        <div className={"p-2"}>
            {props.children}
        </div>
    );
};

const CourseHeader = props => {
    return (
        <div className={"p-2 border-bottom bg-white d-flex justify-content-between"}>
            {props.children}
        </div>
    );
};

const CourseOnlineStatus = props => {
    return (
        <div>
            <Ionicon icon={"ios-flash-outline"} color={"green"}/>
        </div>
    )
};

const CourseMaterialCount = props => {
    return (
        <div className={"border d-flex justify-content-between"}>
            {props.children}
        </div>
    );
};

const CourseMaterialCountVideo = props => {
    return (
        <div className={"flex-fill"}>
            <div className={"border-bottom p-2 text-center small bg-white"}>Video</div>
            <div className={"p-2 text-center font-weight-bold"}>{props.children}</div>
        </div>
    );
};

const CourseMaterialCountEBook = props => {
    return (
        <div className={"flex-fill"}>
            <div className={"border-bottom p-2 text-center small bg-white"}>E-Book</div>
            <div className={"p-2 text-center font-weight-bold"}>{props.children}</div>
        </div>
    );
};

const CourseMaterialAssignment = props => {
    return (
        <div className={"border mt-2"}>
            <div className={"p-2 border-bottom text-center small bg-white"}>Tugas</div>
            <div className={"p-2 font-weight-bold text-center"}>{props.children}</div>
        </div>
    );
};

class DashboardLecturerCourse extends React.Component {
    render() {
        return (
            <div>
                <Navigator/>
                <Wrapper>
                    <Sidebar/>
                    <Content>
                        <BreadCrum/>
                        <CoursesWrapper>
                            <Course>
                                <CourseHeader>
                                    <CourseTitle>Web Design</CourseTitle>
                                    <CourseOnlineStatus/>
                                </CourseHeader>
                                <CourseBody>
                                    <CourseMaterialCount>
                                        <CourseMaterialCountVideo>10</CourseMaterialCountVideo>
                                        <CourseMaterialCountEBook>10</CourseMaterialCountEBook>
                                    </CourseMaterialCount>
                                    <CourseMaterialAssignment>10</CourseMaterialAssignment>
                                </CourseBody>
                            </Course>
                        </CoursesWrapper>
                        <Footer/>
                    </Content>
                </Wrapper>
            </div>
        );
    }
}

export default withRouter(DashboardLecturerCourse);