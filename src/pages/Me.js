import React, {Component} from 'react'
import homeService from '../services/homeService.js'

import store from '../store'

//子组件  NowPlay  首字母需要大写
import Login from '../components/me/login.js'
import Admin from '../components/me/admin.js'
import '../css/me.css'
export default class Me extends Component{
	constructor({history,location,match}){
		super();
		//1.将全局数据转为组件内部数据
		this.state={
			location,
			//如果全局数据发生变化，在dom中直接访问是不会执行render进行更新。
			//将全局数据转为组件内部数据,再监听全局数据变化，触发本组件的setState()，
			//dom访问的是组件内部的state，就会执行render进行更新
			Show:false,
			adminList: []
		}

	}

	render(){
		return (
			<div class="page " id="login"  >
				{this.state.Show? null:<Login adminLogin={this.loginAction.bind(this)} />}
				{this.state.Show? <Admin data={this.state.adminList} send={this.exitAction.bind(this)}/> : null}
			</div>
		)
	}

	componentWillMount(){

	}
	componentDidMount(){
		//console.log("me页面location:", this.state.location.state);
		//if (this.state.location.state.meLoginShow==false){
		//	this.setState({meLoginShow:false})
		//}else {
		//	this.setState({meLoginShow:this.state.location.state.meLoginShow})
		//	if(this.state.location.state.adminData){
		//		var newAdminData=this.state.location.state.adminData[this.state.location.state.adminData.length-1]
		//		this.setState({username:newAdminData.username})
		//	}
		//}
	//this.setState({meLoginShow:(this.state.location.state.meLoginShow==false?false:this.state.location.state.meLoginShow) });
    }

	// 登录页面 登录按钮
	loginAction(item){
		console.log('触发了');
		console.log(item);
		//将item放在数组中
		this.state.adminList.push(item);
		//修改数组
		this.setState({username:item.username,Show:item.meLoginShow});


		//从子组队  login 组件里接收到 show  username用户名 存入 history
 		this.props.history.push({
		    state: {
				username:this.state.username,
				meLoginShow:this.state.Show,
				adminData:this.state.adminList
		    }
		});

	}
	// 用户 页面 退出按钮
	exitAction(item2){
		this.setState({Show:item2.show});
	}
	
}