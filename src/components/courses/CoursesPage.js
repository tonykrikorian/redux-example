import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: ""
    }
  };

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = event => {
    event.preventDefault();
    // this.props.dispatch(courseActions.createCourse(this.state.course));
    this.props.actions.createCourse(this.state.course);
    //this.props.createCourse(this.state.course);
  };

  handleDeleteCourse = value => {
    const course = { ...this.state.course };
    course.title = value;
    this.setState({ course });
    this.props.actions.deleteCourse(this.state.course);
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <h2>Courses</h2>
          <h3>Add Courses</h3>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.course.title}
          ></input>
          <button type="submit">Save</button>
        </form>
        {this.props.courses.map(course => (
          <div
            key={course.title}
            onClick={() => this.handleDeleteCourse(course.title)}
          >
            {course.title}
          </div>
        ))}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

// mapDispatchToProps manual approach
// function mapDispatchToProps(dispatch) {
//   return {
//     createCourse: course => dispatch(courseActions.createCourse(course))
//   };
// }

//mapDispatchToProps binding Action Creators
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

//mapDispatchToProps object form (Preferir esta)
// const mapDispatchToProps = {
//   createCourse: courseActions.createCourse
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
