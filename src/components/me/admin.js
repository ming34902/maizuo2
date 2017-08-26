/**
 * Created by Administrator on 2017/8/22 0022.
 */
import React, {Component} from 'react'
import homeService from '../../services/homeService.js'

import '../../css/me.css'
import store from '../../store'

let unsubscribe;
//let exit;
export  default class  Admin extends  Component {
    constructor({history,location,match}) {
        super();
        //1.将全局数据转为组件内部数据
        this.state = {
            //如果全局数据发生变化，在dom中直接访问是不会执行render进行更新。
            //将全局数据转为组件内部数据,再监听全局数据变化，触发本组件的setState()，
            //dom访问的是组件内部的state，就会执行render进行更新
            //adminData: []
            location,
            username:'',
            password:''
            //username: store.getState().username,
            //password: store.getState().password

        }
    }
    //props.data 接收 父级传输数据
    render(){
        return(
            <div class="admin-page ">
                    <div class="admin-box">
                        <div class="header">
                            <img src="../../../static/img/me/maizuomoren66.jpg" alt=""/>
                            <div class="admin-account">

                                <p><span>手机用户</span><span>{this.state.username}</span></p>
                                <p><span>ID：</span><span>{this.state.username}</span></p>
                                <p onClick={this.exit.bind(this)} >退出</p>

                            </div>
                        </div>

                        <div class="menu-box  order">
                            <div class="menu">
                            <b>  <span><i class="iconfont">&#xe63e;</i></span><span>影单订票</span></b>
                            <b><span class="orderNumber">0</span><span>张</span><i class="iconfont">&#xe76b;</i></b>
                            </div>
                        </div>
                        <div class="menu-box  waitOrder">
                            <div class="menu">
                            <b>  <span><i class="iconfont">&#xe621;</i></span><span>影票待付订票</span></b>
                            <b><span class="orderNumber">0</span><span>张</span><i class="iconfont">&#xe76b;</i></b>
                            </div>
                        </div>
                        <div class="menu-box shopOrder">
                            <div class="menu">
                            <b>  <span><i class="iconfont">&#xe759;</i></span><span>商城订票</span></b>
                            <b><i class="iconfont">&#xe641;</i></b>
                            </div>
                        </div>

                        <div class="menu-box myCash">
                            <div class="menu">
                            <b>  <span><i class="iconfont">&#xe75d;</i></span><span>我的现金卷</span></b>
                            <b><span class="orderNumber">0</span><span>张</span><i class="iconfont">&#xe76b;</i></b>
                            </div>
                        </div>
                        <div class="menu-box myBalance">
                            <div class="menu">
                            <b>  <span><i class="iconfont">&#xe791;</i></span><span>账户余额</span></b>
                            <b><span class="orderNumber">0</span><span>元</span><i class="iconfont">&#xe76b;</i></b>
                            </div>
                        </div>
                        <div class="menu-box myCard">
                            <div class="menu">
                            <b>  <span><i class="iconfont">&#xe686;</i></span><span>我的卖座卡</span></b>
                            <b><span class="orderNumber">0</span><span>张</span><i class="iconfont">&#xe76b;</i></b>
                            </div>
                        </div>

                        <div class="menu-box mySet">
                            <div class="menu">
                            <b>  <span><i class="iconfont">&#xe782;</i></span><span>设置</span></b>
                            <b><i class="iconfont">&#xe76b;</i></b>
                            </div>
                        </div>

                        {
                            //<p>用户名：{ this.state.adminData.user}</p>
                            //<p>密码：{ this.state.adminData.psd}</p>
                        }

                    </div>
            </div>
        )
    }
    componentWillMount(){

        //  【用父子传值接收】
       //    挂钩dom 之前
       // console.log(this.props.data);
       // this.setState({adminData:this.props.data[this.props.data.length-1]  });
       // console.log("这是数组中最后一组数据：",this.state.adminData);



        //【用全局数据 store 接收】
        //2.监听store中state的变化，如果这个函数调用了，说明state发生了变化
        //调用this.setState(),就会触发render，更新dom
        //unsubscribe = store.subscribe(()=>{
        //    console.log('admin监听触发了');
        //    this.setState({username: store.getState().username,password: store.getState().password});
        //})

       /* exit=store.subscribe(()=>{
            console.log('admin监听用户退出了');
            this.setState({ });
        })*/

        console.log("从me 父级接收到 用户数据：",this.props.data);
        this.setState({username:this.props.data[this.props.data.length-1].username})

    }
    exit(){
        this.props.send({
            show:false
        });
        store.dispatch({
            //事件名字
            type: 'adminExit',
            //参数
            nameVal: '',
            pwdVal: '',
            show:false
        });
        this.props.history.push({
            state: {
                meLoginShow:false,
                username:'',
                password:''
            }
        });
    }
    componentWillUnmount(){
        //unsubscribe();
        //exit();
    }


}