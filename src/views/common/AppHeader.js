import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import store from '../../store'
let unsubscribe;
export default class AppHeader extends Component{
	constructor({history,location,match}) {
		super();
		//1.将全局数据转为组件内部数据
		this.state = {
			//如果全局数据发生变化，在dom中直接访问是不会执行render进行更新。
			//将全局数据转为组件内部数据,再监听全局数据变化，触发本组件的setState()，
			//dom访问的是组件内部的state，就会执行render进行更新
			location,
			username: store.getState().username,
			password: store.getState().password,
			show:store.getState().show
		}
	}
	
	render(){
		return (
			<header class="app-header">
				
				<span class="iconfont icon-menu" onClick={this.menuAction.bind(this)}></span>
				<h1 class="title">{this.props.title}</h1>
				<Link to="/city-list"  class="city iconfont icon-arrow-down">上海</Link>
				<Link to="/me" class="iconfont icon-person"  > </Link>
				
			</header>
		)
	}
	
	menuAction(){
		this.props.menuHandle();
	}
	componentWillMount(){
		//2.监听store中state的变化，如果这个函数调用了，说明state发生了变化
		//调用this.setState(),就会触发render，更新dom

		unsubscribe = store.subscribe(()=>{
			console.log('header进入用户页面监听触发了');
			this.setState({username: store.getState().username,password: store.getState().password,show: store.getState().show});
		})


	}
	componentWillUnmount(){
		unsubscribe();
	}

}
