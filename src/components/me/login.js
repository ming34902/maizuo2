/**
 * Created by Administrator on 2017/8/22 0022.
 */
import React, {Component} from 'react'
import homeService from '../../services/homeService.js'

import '../../css/me.css'

export  default class  Login extends  Component {
    constructor() {
        super();
        this.state = {
                username: '',
                password: ''

        }

    }

    render(){
        return(
            <div  class="login-page " >
                <form class="login-box">
                    <div class="input-box name-box">
                        <input type="text" class="name"
                               placeholder="请输入用户名/手机号"
                               value={this.state.username}
                               onChange={this.changeAction.bind(this, 'user')}
                               ref="user"
                        />
                        <div class="input-bg"></div>
                    </div>
                    <div class="input-box password-box">
                        <input type="text" class="password"
                               placeholder="请输入密码/验证码"
                               value={this.state.password}
                               onChange={this.changeAction.bind(this, 'psd')}
                               ref="psd"
                        />
                        <div class="input-bg"></div>

                    </div>
                    <div class="wrong-msg"></div>
                    <div onClick={this.confim.bind(this)}     class="login-btn"> 登录</div>

                </form>
            </div>
        )
    }
    changeAction(flag){
        //去到对应输入框中的value值
        let val = this.refs[flag].value;
        if(flag === 'user'){
            this.setState({username: val});
        }else if(flag == 'psd'){
            this.setState({password: val});
        }


    }
    confim(){
        console.log('用户名'+this.state.username);
        console.log('密码'+this.state.password);
        //通过属性调用父级的方法，传递数据
        this.props.add({
            user: this.state.username,
            psd: this.state.password,
            show:true
        });

        //this.setState({show: });

    }
}