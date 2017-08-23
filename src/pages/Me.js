import React, {Component} from 'react'
import homeService from '../services/homeService.js'


//子组件  NowPlay  首字母需要大写
import Login from '../components/me/login.js'
import Admin from '../components/me/admin.js'
import '../css/me.css'
export default class Me extends Component{
	constructor(){
		super();
		this.state={
			listData: [],
			show:false
		}
	}

	render(){
		return (
			<div class="page login">
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