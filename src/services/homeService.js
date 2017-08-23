import axios from 'axios'
import API from '../api'

function getHomeBanner(){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.homeBannerApi}?__t=${new Date().getTime()}`)
		.then((response)=>{
			console.log("请求轮播图数据server:",response.data.data.billboards);
			resolve(response.data.data.billboards)
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}

function test(){
	axios.get("/v4/api/cinema")
	.then((response)=>{
		console.log("请求test标题:",response);
	})
	.catch((error)=>{
		console.log(error)
	})
}

test();

//热播电影 5条
function getHotData(){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.HotNowPlaying5Api}`)
			.then((response)=>{
                 //var newItem={};
				//newItem.cinemaCount = response.data.films.cinemaCount; // 电影院数
				//newItem.cover = response.data.films.cover; // 图片
				//newItem.grade = response.data.films.grade; // 评分
				//newItem.id = response.data.films.id; // id
				//newItem.intro = response.data.films.intro; // 标题
				//newItem.name = response.data.films.name; // 电影名
				//newItem.poster = response.data.films.poster; //
				//newItem.watchCount = response.data.films.watchCount; // 观看人数
                //
				//resolve(newItem);
				//console.log(newItem);
				resolve(response.data.data.films);

			})
			.catch((error)=>{
				console.log(error)
			})
	})
}
getHotData();
//热播电影 7条
function getHotData7(){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.HotNowPlaying7Api}`)
			.then((response)=>{
				resolve(response.data.data.films)

			})
			.catch((error)=>{
				console.log(error)
			})
	})
}
getHotData7();

//即将上映 7条
function getComingSoonData7(){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.ComingSoon7Api}`)
			.then((response)=>{
				resolve(response.data.data.films);
			})
			.catch((error)=>{
				console.log(error)
			})
	})
}
getComingSoonData7();
//商城shop 菜单数据
//splice(0,8)  length 超过8 即后面数据 剪切掉，留前8条数据
function getShopListData(){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.ShopListApi}`)
			.then((response)=>{
				resolve(response.data.data);
				console.log('请求shopList数据',response.data.data);
			})
			.catch((error)=>{
				console.log(error)
			})

	})

}
getShopListData();

//商城shop  推荐商品 数据
function getShopRecommendData(){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.ShopRecommendApi}`)
			.then((response)=>{
				resolve(response.data.data.list);
				console.log('请求Recommend数据',response.data.data.list);
			})
			.catch((error)=>{
				console.log(error)
			})

	})

}
getShopRecommendData();



export default {
	getHomeBanner,
	getHotData,
	getHotData7,
	getComingSoonData7,
	getShopListData,
	getShopRecommendData
}
