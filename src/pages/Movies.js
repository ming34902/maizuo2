import React, {Component} from 'react'
import ReactSwipe from 'react-swipe';

import homeService from '../services/homeService.js'
//子组件  NowPlay  首字母需要大写
import NowPlay from '../components/movies/nowPlaying.js'
import ComPlay from '../components/movies/comingSoon.js'


import '../css/movies.css'
let contentScroll;

export default class Movies extends Component{
	constructor({history,location,match}){
		super();
		this.state = {
			location,
			HotMovieData7:[],
			ComingSoonData7:[],
			movieShow:1
		}
	}
	render(){
		return (
			<div class="page movie-page ">
				<div class="warp">
					<div class="movies ">
						<div class="title" >
							<span class={this.state.movieShow==1?'active':''} onClick={this.showAction.bind(this,1)}>正在上映</span>
							<span class={this.state.movieShow==2?'active':''} onClick={this.showAction.bind(this,2)}>即将上映</span>
						</div>

						{this.state.movieShow==1?<NowPlay class="play-box"
													 data={this.state.HotMovieData7}
														  toSend={this.getData.bind(this)} />:''}
						{this.state.movieShow==2?<ComPlay class="play-box"
													 data={this.state.ComingSoonData7}
														  toSend={this.getData.bind(this)} />:''}

					</div>
				</div>
			</div>
		)
	}
	showAction(val){
		this.setState({movieShow:val});

	}
	//changeShow(val){
	//	console.log("从home页面传过来的show:", val);
	//	this.setState({show:val})
	//}
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
			});



		//this.setState({movieShow:this.state.location.state.movieShow});

		setTimeout(function(){
			contentScroll.refresh()
		},2000);
	}
	componentDidMount(){
		contentScroll = new IScroll(".movie-page", {
			probeType: 3
		});
		//console.log("接收到的history中的val值",this.state.location.state.movieShow);
		this.setState({movieShow:(this.state.location.state.movieShow=''?1:this.state.location.state.movieShow) });
	}
	getData(val){
		console.log("从电影列表点击的电影数据：",val);
		this.props.history.push(
			{
				pathname:'/movieDetail',
				state: {
					movieID:val.movieID,
					movieName:val.movieName
				}
			});
		//this.props.changeTitle(val.movieName)
	}


	
}