import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import homeService from '../services/homeService.js'
import '../css/city.css'
let contentScroll;

export default class City extends Component{
	constructor({history}){
		super();
		this.state = {
			className: '',
			history,
			CityData:[]
		}
	}
	
	render(){
		return (
			<ReactCSSTransitionGroup
				transitionName="slide"
				transitionAppear={true}
				transitionAppearTimeout={400}
				transitionEnter={false}
	      		transitionLeave={true}
	      		transitionLeaveTimeout={1000}>
					<div id="city" class={'page '+this.state.className}>
						<div class="warp">
 							<div class="city-index-title">GPS定位你所在城市</div>
                            <div class="city-index-detail ">
								<span  class="city-item-detail city-item-detail-gprs">深圳</span>
							</div>
                            <div class="hot-city">
								<div class="city-index-title">热门城市</div>
								<div class="city-index-detail ">
									<span class="city-item-detail"onClick={this.selectAction.bind(this, '北京')}>北京</span>
									<span class="city-item-detail"onClick={this.selectAction.bind(this, '上海')}>上海</span>
									<span class="city-item-detail"onClick={this.selectAction.bind(this, '深圳')}>深圳</span>
									<span class="city-item-detail"onClick={this.selectAction.bind(this, '广州')}>广州</span>
								</div>
							</div>
							<div class="index-city">
								<div class="city-index-title">按字母排序</div>
								<div class="city-index-detail">
									{
										this.state.CityData.map((item,index3)=>{
											return(
												<span key={index3} class="city-item-detail">{item.word}</span>
											)
										})
									}
								</div>
							</div>

							<div class="index-city-list">
								{
									this.state.CityData.map((item,index)=>{
										return(
											<div key={index}>
												<div class="city-index-title">{item.word}</div>
												<div class="city-index-detail">
													{
														item.list.map( (city,index2)=>{
															return(
																	<span key={index2}  class="city-item-detail">{city.name}</span>
															)
														})
													}
												</div>
											</div>
										)

									})
								}
							</div>



						</div>
					</div>
			</ReactCSSTransitionGroup>
		)
	}
	
	selectAction(cityname){
		console.log(cityname);
		//返回动画
		this.setState({className: 'leave'});
		setTimeout(()=>{
			//返回操作
			this.state.history.goBack();
		}, 400);
	}
	componentWillMount() {
        homeService.getCityAddressData()
			.then((data)=>{
				console.log("CityAddress影院数据请求到了",data);
				this.setState({CityData:data});
			})



		setTimeout(function(){
			contentScroll.refresh()
		},2000);
	}
	componentDidMount() {

		contentScroll = new IScroll("#city", {
			probeType: 3
		});
	}

}