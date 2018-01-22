/**
 * Created by Mrzou on 2018-1-19.
 */
import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd-mobile'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'genius' //或者boss
    }
  }

  register() {
    console.log(this.props)
    this.props.history.push('/register')
  }

  render() {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        <Logo></Logo>
        <List>
          <InputItem>用户</InputItem>
          <InputItem>密码</InputItem>
          <InputItem>确认密码</InputItem>
          <RadioItem checked={this.state.type == 'genius'}>牛人</RadioItem>
          <RadioItem checked={this.state.type == 'boss'}>BOSS</RadioItem>
        </List>
      </div>
    )
  }
}

export default Register