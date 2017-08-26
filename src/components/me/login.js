/**
 * Created by Administrator on 2017/8/22 0022.
 */
import React, {Component} from 'react'
import homeService from '../../services/homeService.js'
import store from '../../store'

import '../../css/me.css'


//变量 监听事件  用于挂载之前使用 挂载之后销毁
let unsubscribe;
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

    componentWillMount(){
        //监听store上state的变化，监听多少次，就触发多少个函数
        //调用监听的方法，会返回一个异常监听的方法
        //unsubscribe = store.subscribe(()=>{
        //    console.log('login 触发了1');
        //    this.setState({show: store.getState().show,username: store.getState().username,password: store.getState().password});
        //});

    }

    componentWillUnmount(){
        //在组件将要销毁时，将监听移除。
        //console.log('one componentWillUnmount在组件将要销毁时');
        //unsubscribe();
    }
    confim(){
        console.log('用户名'+this.state.username);
        console.log('密码'+this.state.password);
        //通过属性调用父级的方法，传递数据
        this.props.adminLogin({
            meLoginShow:true,
            username:this.state.username,
            password:this.state.password
        });


        ////修改全局用户名
        ////3.派发消息，让store中的reducer进行操作
        //store.dispatch({
        //    //事件名字
        //    type: 'changename',
        //    //参数
        //    nameVal: this.state.username,
        //    pwdVal: this.state.password,
        //    show:true
        //});


        //this.props.toSend({ movieID:id, movieName:name});

    }
}