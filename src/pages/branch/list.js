import React, { Component } from 'react'
import { connect } from 'react-redux'
import branchActions from '../../action/operation/branch'
class BranchList extends Component {
  changeCount = () => {
    this.props.getBranchList()
  }
  render () {
    console.log(this.props)
    return (
      <div className='branchList' onClick={this.changeCount}>
        {this.props.count}下属机构
      </div>
    )
  }
}

BranchList.propTypes = {}

export default connect(state => state,branchActions)(BranchList)
