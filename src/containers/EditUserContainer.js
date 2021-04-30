import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { getUsersDetail, putUsersEdit } from "../action/userAction";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import swal from "sweetalert";

const mapStateToProps = (state) => ({
  getResponDataUser: state.users.getResponDataUser,
  errorResponDataUser: state.users.errorResponDataUser,
});

class EditUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersDetail(this.props.match.params.id));
  }
  handleSubmit(data,id) {
    this.props.dispatch(putUsersEdit(data, this.props.match.params.id));
  }
  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if (this.props.errorResponDataUser) {
          swal(
              "Failed!",
              this.props.errorResponDataUser,
              "error"
          );
      }
      else{
          swal(
              "User Update!",
              "Nama :" +
              this.props.getResponDataUser.nama +
              ", Umur :" +
              this.props.getResponDataUser.umur,
              "success"
          );
      }
  }
    return (
      <Container>
        <BackComponent />
        <h1>edit user</h1>
        <FormComponent onSubmit={(data,id) => this.handleSubmit(data,id)} />
      </Container>
    );
  }
}
export default connect(mapStateToProps)(EditUserContainer);
