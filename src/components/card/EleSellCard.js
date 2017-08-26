/**
 * Created by Administrator on 2017/8/23 0023.
 */
import React, {Component} from 'react'
import homeService from '../../services/homeService.js'

import '../../css/card.css'
export  default class  EleSellCard  extends  Component {
    constructor() {
        super();
        this.state = {
            EleSellCard: '',
            EleSellCardPwd: ''
        }
    }
    render(){
        return(
            <div class="card-list EleSellCard"   >
                <form class="login-box">
                    <div class="input-box name-box">
                        <input type="text" class="name"
                               placeholder="请输入15位电子卖座卡号"
                               value={this.state.EleSellCard}
                               onChange={this.changeAction.bind(this, 'user')}
                               ref="user"
                        />
                        <div class="input-bg"></div>
                    </div>
                    <div class="input-box password-box">
                        <input type="text" class="password"
                               placeholder="请输入卡号密码"
                               value={this.state.EleSellCardPwd}
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
            this.setState({EleSellCard: val});
        }else if(flag == 'psd'){
            this.setState({EleSellCardPwd: val});
        }


    }
    confim() {
        console.log('卖座卡号' + this.state.EleSellCard);
        console.log('密码' + this.state.EleSellCardPwd);
    }
}
