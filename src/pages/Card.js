import React, {Component} from 'react'
import ReactSwipe from 'react-swipe';

import homeService from '../services/homeService.js'
//子组件   首字母需要大写
import SellCard from '../components/card/SellCard.js'
import EleSellCard from '../components/card/EleSellCard.js'
import   '../css/card.css'
export default class Card extends Component{
	constructor(){
		super();
		this.state = {
			show:1

		}
	}
	render(){
		return (
			<div class="page ">
				<div class="card">
					<div class="title">
						<span class={this.state.show==1?'active':''} onClick={this.showAction.bind(this,1)}>卖座卡</span>
						<span class={this.state.show==2?'active':''} onClick={this.showAction.bind(this,2)}>电子卖座卡</span>
					</div>

					{this.state.show==1?<SellCard class="play-box"  />:''}
					{this.state.show==2?<EleSellCard class="play-box"  />:''}
				</div>


			</div>
		)
	}
	showAction(val){
		this.setState({show:val});
	}
	componentWillMount(){

	}
	
}