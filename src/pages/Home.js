import React, {Component} from 'react'
import ReactSwipe from 'react-swipe';

import homeService from '../services/homeService.js'

import '../css/home.css'

let bannerSwiper = null;

export default class Home extends Component{
	constructor(){
		super();
		this.state = {
			bannerData: []

		}
	}
	
	render(){
		return (
			<div id="home" class="page">
				{/*轮播图*/}
				<div ref="banner" class="swiper-container home-banner">
				    <div class="swiper-wrapper">
				    {
						this.state.bannerData.map((item, index)=>{
							return (
								<div key={index} class="swiper-slide">
									<img src={item.imageUrl}/>
								</div>
							)
						})
					}
				    </div>
				</div>
				
			
				首页
				{this.state.bannerData.length}
			</div>
		)
	}
	
	componentWillMount(){
		//请求轮播图数据
		homeService.getHomeBanner()
		.then((data)=>{
			//因为需要设置loop，而dom被js绑定了
			//数据需要添加第一张和最后一张
			//将最后一张添加到第一位置
			data.splice(0, 0, data[data.length-1]);
			//将第一张添加最后一个位置
			data.push(data[1]);
			console.log(data);
			
			this.setState({bannerData: data});
			bannerSwiper.update();
			bannerSwiper.slideTo(1, 0);
		})
     //  请求热播数据
         homeService.getHtmlData()
			 .then((data)=>{

				 console.log(data);

			 })
	}
	
	componentDidMount(){
		console.log(this.state.bannerData.length)
		bannerSwiper = new Swiper(this.refs.banner, {
			loop: true
		});
	}
	
}
