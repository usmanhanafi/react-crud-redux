import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsersList, deleteUsersList } from '../action/userAction'
import TableComponent from '../components/TableComponent'

class HomeContainer extends Component {
    componentDidMount(){
        this.props.dispatch(getUsersList())
        this.props.dispatch(deleteUsersList())
    }
    render() {
        return (
            <div>
                <TableComponent />
            </div>
        )
    }
}
export default connect()(HomeContainer);