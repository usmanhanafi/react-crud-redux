import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Col, Form, FormGroup, Input, Row, Label, Button } from "reactstrap";
import UserValidations from "../validations/UserValidations";

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlfor="{input}" classname="col-form-label">
        {label}
      </Label>
    </Col>
    <Col>
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

const mapStateToProps = (state) => {
  return {
    initialValues : {
      nama : state.users.getUsersDetail.nama,
      alamat : state.users.getUsersDetail.alamat,
      umur : state.users.getUsersDetail.umur,
      nohp : state.users.getUsersDetail.nohp,
    }
  };
};

class FormComponent extends Component {
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="nama"
                component={renderField}
                label="Nama :"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="alamat"
                component={renderField}
                label="Alamat :"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="umur"
                component={renderField}
                label="Umur :"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="nohp"
                component={renderField}
                label="No Handphone :"
              />
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md="12">
            <FormGroup>
              <Button
                color="dark"
                type="submit"
                disabled={this.props.submitting}>
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>

      </Form>
    );
  }
}

FormComponent = reduxForm({
  form: "formCreateUser",
  validate: UserValidations,
  enableReinitialize: true,
})(FormComponent);

export default connect(mapStateToProps)(FormComponent);
