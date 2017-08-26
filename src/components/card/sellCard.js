/**
 * Created by Administrator on 2017/8/23 0023.
 */
import React, {Component} from 'react'
import homeService from '../../services/homeService.js'
import store from '../../store'

import '../../css/card.css'
export  default class  SellCard  extends  Component {
    constructor() {
        super();
        this.state = {
            sellCard: '',
            sellCardPwd: ''

        }
    }
    render(){
        return(
            <div class="card-list  sellCard"   >
                <form class="login-box">
                    <div class="input-box name-box">
                        <input type="text" class="name"
                               placeholder="请输入卖座卡号"
                               value={this.state.sellCard}
                               onChange={this.changeAction.bind(this, 'user')}
                               ref="user"
                        />
                        <div class="input-bg"></div>
                    </div>
                    <div class="input-box password-box">
                        <input type="text" class="password"
                               placeholder="请输入卡号密码"
                               value={this.state.sellCardPwd}
                               onChange={this.changeAction.bind(this, 'psd')}
                               ref="psd"
                        />
                        <div class="input-bg"></div>

                    </div>
                    <div class="wrong-msg"></div>
                    <div onClick={this.confim.bind(this)}     class="login-btn"> 查询</div>

                </form>
            </div>
        )
    }
    changeAction(flag){
        //去到对应输入框中的value值
        let val = this.refs[flag].value;
        if(flag === 'user'){
            this.setState({sellCard: val});
        }else if(flag == 'psd'){
            this.setState({sellCardPwd: val});
        }


    }
    confim(){
        console.log('卖座卡号'+this.state.sellCard);
        console.log('密码'+this.state.sellCardPwd);
        //通过属性调用父级的方法，传递数据
        //this.props.add({
        //    show:true
        //});


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

    }

}