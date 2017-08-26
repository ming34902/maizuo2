import React, {Component} from 'react'
import ReactSwipe from 'react-swipe';

import homeService from '../services/homeService.js'

import '../css/home.css'


let bannerSwiper = null;
let contentScroll;

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			bannerData: [],
			HotMovieData: [],
			ComingSoonData7: []
		}
	}
	render() {
		return(
			<div id="home" class="page">
                <div class="warp">
					<div ref="banner" class="swiper-container home-banner">
						<div class="swiper-wrapper">
						{
							this.state.bannerData.map((item,index)=>{
								return (
									<div key={index} class="swiper-slide">
										<img src={item.imageUrl} alt={item.name}/>
									</div>
								)
							})
						}
						</div>
						<div class="swiper-pagination"></div>
					</div>

					{/*正在热映*/}
					<div class="HotMovie">
						<ul>{
							this.state.HotMovieData.map((item,index)=>{
								return(
									<li key={index} onClick={this.getData.bind(this, item.id,item.name)}>
										<div class="movieItem">
											<img src={item.cover.origin} alt="" />
											<div class="movieItem-info">
												<p>{item.name}</p>
												<p><span>{item.cinemaCount}家影院上映</span><span>{item.watchCount}人购票</span></p>
												<strong>{item.grade}</strong>
											</div>
										</div>
									</li>
								)
							})

						}</ul>
						<div class="more-button" onClick={this.toMoreHot.bind(this,1)}>
							更多热映电影
						</div>
					</div>

					<div class="upcoming-box">
						<span></span>
					  <div class="upcoming">即将上映</div>
					</div>

					{/*即将上映*/}
					<div class="ComMovie">
						<ul>{
							this.state.ComingSoonData7.map((item,index)=>{
							return(
								<li key={index} onClick={this.getData.bind(this, item.id,item.name)}>
									<div class="movieItem">
										<img src={item.cover.origin} alt="" />
										<div class="movieItem-info">
											<p>{item.name}</p>
											<p><span>{item.cinemaCount}家影院上映</span><span>{item.watchCount}人购票</span></p>
											<strong>{item.grade}</strong>
										</div>
									</div>
								</li>
								)
							})

						}</ul>
						<div class="more-button" onClick={this.toMoreCom.bind(this,2)}>
						更多即将上映
						</div>
					</div>
				</div>

			</div>

	    )

	}

	toMoreHot(val) {
		this.props.history.push('/Movies');
		//this.props.toNow(val);
	}
	toMoreCom(val) {
		this.props.history.push('/Movies');
		console.log("到toCom即将上映show：",val);
		//this.props.toCom(val);
	}
	getData(id,name){
		this.props.history.push('/movieDetail',id);
	}
	componentWillMount() {

     //  请求热播数据 5
         homeService.getHotData()
			 .then((data)=>{
				 console.log('热播数据5请求到了');
				 console.log(data);
				 this.setState({HotMovieData: data});
			 })
		//  请求即将上映 数据 7
		homeService.getComingSoonData7()
			.then((data)=>{
				console.log('即将上映 数据 7请求到了');
				console.log(data);
				this.setState({ComingSoonData7: data});
			})
		//请求轮播图数据
		homeService.getHomeBanner()
			.then((data)=>{
				//因为需要设置loop，而dom被js绑定了
				//数据需要添加第一张和最后一张
				//将最后一张添加到第一位置
				data.splice(0, 0, data[data.length-1]);
				//将第一张添加最后一个位置
				data.push(data[1]);
				console.log('banner数据请求到了');
				console.log(data);


				this.setState({bannerData: data});
				bannerSwiper.update();
				bannerSwiper.slideTo(1, 0);
			})

		setTimeout(function(){
			contentScroll.refresh()
		},2000);


	}
	componentDidMount() {
		console.log(this.state.bannerData.length);
		bannerSwiper = new Swiper(this.refs.banner, {
			loop: true,
			pagination: '.swiper-pagination'
		});

		contentScroll = new IScroll("#home", {
			probeType: 3
		});
	}

}
