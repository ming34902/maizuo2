import React, {Component} from 'react'
import ReactSwipe from 'react-swipe';

import homeService from '../services/homeService.js'
//子组件  NowPlay  首字母需要大写
import NowPlay from '../components/movies/nowPlaying.js'
import ComPlay from '../components/movies/comingSoon.js'
import '../css/movies.css'


export default class Movies extends Component{
	constructor(){
		super();
		this.state = {
			HotMovieData7:[],
			ComingSoonData7:[],
			show:1

		}
	}
	render(){
		return (
			<div class="page ">
				<div class="movies">
					<div class="title">
						<span class={this.state.show==1?'active':''} onClick={this.showAction.bind(this,1)}>正在上映</span>
						<span class={this.state.show==2?'active':''} onClick={this.showAction.bind(this,2)}>即将上映</span>
					</div>

					{this.state.show==1?<NowPlay class="play-box" data={this.state.HotMovieData7} />:''}
					{this.state.show==2?<ComPlay class="play-box" data={this.state.ComingSoonData7} />:''}
				</div>
			</div>
		)
	}
	showAction(val){
		this.setState({show:val});
	}
	componentWillMount(){
		homeService.getHotData7()
			.then((data)=>{
				console.log('热播数据7请求到了');
				console.log(data);
				this.setState({HotMovieData7: data});
			})
		homeService.getComingSoonData7()
			.then((data)=>{
				console.log('即将上映数据7请求到了');
				console.log(data);
				this.setState({ComingSoonData7: data});
			})

	}

	
}