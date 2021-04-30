import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { postUsersCreate } from "../action/userAction";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import swal from "sweetalert";

const mapStateToProps = (state) => ({
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
});

class CreateUserContainer extends Component {
    handleSubmit(data) {
        this.props.dispatch(postUsersCreate(data));
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
                    "User Created!",
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
                <h1>create user</h1>
                <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
            </Container>
        );
    }
}
export default connect(mapStateToProps)(CreateUserContainer);
