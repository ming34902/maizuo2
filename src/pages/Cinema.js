import React, {Component} from 'react'
import homeService from '../services/homeService.js'


import '../../src/css/cinema.css'

let contentScroll;
export default class Cinema extends Component{
	constructor(){
		super();
		this.state={
			CinemaData:[],
			index:0,
			show:false
		}
	}
	render(){
		return (
			<div class="page cinema-page">
				<div class="warp">
					{
						this.state.CinemaData.map((item,index)=>{
							return(
								<div class="address"  key={index}>
									<h4 onClick={this.showAction.bind(this,index)}>{item.name}</h4>
                                    <div class={this.state.index==index&&this.state.show?'active isShow':'isShow' }>
										{
											item.list.map((data,val)=>{
												return(
													<div class="cinema"  key={val}>
                                                         <div class="item">
															 <p><strong>{data.name}</strong></p>
															 <p class="lablelist">
																 {data.foods==''?'':<span class={data.foods==''?'':'foods'}>{data.foods}</span>}
																 <span class={data.labels==''?'':'labels'}>{data.labels}</span>
															 </p>
															 <p class="adress-data">{data.address}</p>
															 <p class="miler">距离未知</p>
														 </div>
													</div>
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
		)
	}
	showAction(index){
		this.setState({index:index,show:!this.state.show});
		//setTimeout(function(){
		//	contentScroll.refresh()
		//},1000);
	}

	componentWillMount(){
          //请求影院分布数据
          homeService.getCinemaAddressData()
			  .then((data)=>{
				  console.log("CinemaAddress影院数据请求到了",data);
				  this.setState({CinemaData:data});
			  })

		//setTimeout(function(){
		//	contentScroll.refresh()
		//},2000);
	}
	componentDidMount() {
		//contentScroll = new IScroll(".Cinema-page", {
		//	probeType: 3
		//});
	}
}