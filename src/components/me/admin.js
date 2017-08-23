/**
 * Created by Administrator on 2017/8/22 0022.
 */
import React, {Component} from 'react'
import homeService from '../../services/homeService.js'

import '../../css/me.css'

export  default class  Admin extends  Component {
    constructor() {
        super();
        this.state = {
            adminData: []
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

                                <p><span>手机用户</span><span>{this.state.adminData.user}</span></p>
                                <p><span>ID：</span><span>{this.state.adminData.psd}</span></p>
                                <p onClick={this.exit.bind(this)} >退出</p>

                            </div>
                        </div>

                        <div class="menu-box  order">
                            <b>  <span><i class="iconfont">&#xe63e;</i></span><span>影单订票</span></b>
                            <b><span class="orderNumber">0</span><span>张</span><i class="iconfont">&#xe76b;</i></b>
                        </div>
                        <div class="menu-box  waitOrder">
                            <b>  <span><i class="iconfont">&#xe63e;</i></span><span>影票待付订票</span></b>
                            <b><span class="orderNumber">0</span><span>张</span><i class="iconfont">&#xe76b;</i></b>
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
       //    挂钩dom 之前
        console.log(this.props.data);
        this.setState({adminData:this.props.data[this.props.data.length-1]  });
        console.log("这是数组中最后一组数据：",this.state.adminData);
    }
    exit(){
        this.props.send({
            show:false
        });
    }

}