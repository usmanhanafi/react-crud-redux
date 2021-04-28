import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserList } from '../action/userAction'
import TableComponent from '../components/TableComponent'

class HomeContainer extends Component {
    componentDidMount(){
        this.props.dispatch(getUserList())
    }
    render() {
        return (
            <div>
                <TableComponent />
            </div>
        )
    }
}
export default connect()(HomeContainer)