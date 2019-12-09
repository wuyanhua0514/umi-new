import React, { Component } from 'react';
 import { connect } from 'dva';
 import { Link } from 'dva/router';
 import { Checkbox, Alert, Icon,Form,Input, Button } from 'antd';
//  import Login from 'components/Login';
 import styles from './Login.less';
import { compose } from 'redux';
 
//  const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;
 // 此操作符连接命名空间为login的model层
 @connect(({ login, loading }) => ({
 login,
 submitting: loading.effects['login/login'],
 }))
 @Form.create()
 export default class LoginPage extends Component {
 state = {
     type: 'account',
     autoLogin: true,
 };
 handleSubmit = e=> {
     e.preventDefault();
     const { type } = this.state;
     const { dispatch } = this.props;
     this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        dispatch({
          type: 'login/login',
          payload: {
          ...values,
          // type,
          },
      });
      }
    });
 };
 renderMessage = content => {
     return <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />;
 };
 // 登录界面，可以更改为自定义的UI
 render() {
     const { login, submitting } = this.props;
    //  const { type, autoLogin } = this.state;
     const { getFieldDecorator} = this.props.form;
     return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
      </Form>
    );
 }
 }