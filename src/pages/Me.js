import React, {Component} from 'react'
import homeService from '../services/homeService.js'

import store from '../store'

//子组件  NowPlay  首字母需要大写
import Login from '../components/me/login.js'
import Admin from '../components/me/admin.js'
import '../css/me.css'
export default class Me extends Component{
	constructor(){
		super();
		//1.将全局数据转为组件内部数据
		this.state={
			//如果全局数据发生变化，在dom中直接访问是不会执行render进行更新。
			//将全局数据转为组件内部数据,再监听全局数据变化，触发本组件的setState()，
			//dom访问的是组件内部的state，就会执行render进行更新
			show:store.getState().show ,
			listData: []
		}

	}

	render(){
		return (
			<div class="page " id="login"  >
				{this.state.show? null:<Login add={this.addAction.bind(this)} />}

				{this.state.show? <Admin data={this.state.listData} send={this.sendAction.bind(this)}/> : null}
			</div>
		)
	}
	addAction(item){
		console.log('触发了');
		console.log(item);
		//将item放在数组中
		this.state.listData.push(item);
		//修改数组
		this.setState({listData: this.state.listData,show:item.show});
	}
	sendAction(item2){
		this.setState({show:item2.show});
	}
	componentWillMount(){


	}
	
}