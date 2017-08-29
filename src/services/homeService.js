import axios from 'axios'
import API from '../api'

function getHomeBanner(){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.homeBannerApi}${API.TimeDataApi}${new Date().getTime()}`)
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
				if (response.data.data.list){
					resolve(response.data.data.list);
					console.log('请求Recommend数据',response.data.data.list);
				}else {
					resolve('数据未请求到')
				}


			})
			.catch((error)=>{
				console.log(error)
			})

	})

}
getShopRecommendData();

//请求homeDetail页面的详情数据 电影详情
function getHomeDetailData (id) {
	return new Promise ( (resolve,reject) => {
		axios.get(`${API.movieDetailData1Api}${id}?${API.TimeDataApi}${new Date().getTime()}`)
			.then( (response) => {
				console.log("homeDetail页面-电影详情：",response)
				//定义一个对象接受过滤后的数据
				var detailObj = {}
				detailObj.img = response.data.data.film.cover.origin;//图片
				detailObj.director = response.data.data.film.director;//导演
				detailObj.actors = response.data.data.film.actors;//演员
				detailObj.nation = response.data.data.film.nation;//地区
				detailObj.language = response.data.data.film.language;//语言
				detailObj.name = response.data.data.film.name;//影片名
				detailObj.synopsis = response.data.data.film.synopsis;//影片简介
				detailObj.category = response.data.data.film.category;//影片类型
				detailObj.id = response.data.data.film.id;//影片简介

				resolve(detailObj)
			})
			.catch( (error)=>{
				console.log(error)
			})
	})
}

//请求 商品详情页-商品信息 数据
function getProductInfoData(id){
	return new  Promise( (resolve,reject)=>{
		//http://aura.maizuo.com/api/item?id=18
		axios.get(`${API.ShopDetailDataApi}${id}`)
		.then( (response)=>{
			console.log('请求ShopDetail数据',response.data);
			//resolve(response.data.data);
			var  newObj={};
			newObj.attrs=response.data.data.attrs;//
			newObj.displaySalesCount=response.data.data.displaySalesCount;// 展示销量
			newObj.id=response.data.data.id;//id
			newObj.isMember=response.data.data.isMember;//
			newObj.masterName=response.data.data.masterName;// 名字
			newObj.options=response.data.data.options;// 款式
			newObj.skuList=response.data.data.skuList;// 图片
			//newObj.images=response.data.data.skuList[0].images;// 图片
			//newObj.price=response.data.data.skuList[0].price;// 图片
			newObj.skuList=response.data.data.skuList;// 图片
			newObj.price=response.data.data.skuList[0].price;// 图片
			newObj.slaveName=response.data.data.slaveName;//详细
			newObj.supplierId=response.data.data.supplierId;//
			resolve(newObj)

		})
		.catch( (error)=>{
			console.log(error)
		})
	} )

}

////请求 商品详情页banner 数据
//function getProBannerDetailData(id){
//	return new  Promise( (resolve,reject)=>{
//		axios.get(`${API.ShopDetailDataApi}${id}`)
//			.then( (response)=>{
//				console.log('请求proBanner数据',response.data);
//				//resolve(response.data.data);
//				var  newObj={};
//				newObj.skuList=response.data.data.skuList;// 图片
//				var obj={};
//				obj.imgPath=newObj.skuList[0].images;
//				resolve(obj)
//
//			})
//			.catch( (error) => {
//				console.log(error)
//			})
//	} )
//
//}

//商品详情页-商品图片
function  getProductPictureData(id){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.productPictureDataApi}${id}`)
			.then((response)=>{
				console.log('请求ProductPicture数据',response.data.data.desc);
				resolve(response.data.data.desc);

			})
			.catch((error)=>{
				console.log(error)
			})
	})

}

//影院地址
function  getCinemaAddressData(){
	return new Promise( (resolve,reject)=>{
		axios.get(`${API.CinemaAddressApi}${API.TimeDataApi}${new Date().getTime()}`)
			.then((response)=>{
				console.log('请求CinemaAddress数据',response.data.data.cinemas);
				//resolve(response.data.data.cinemas);
				var obj={};
				var Arr=[];
				response.data.data.cinemas.map((item)=>{
					//f福田区
					var name=item.district.name;
					//  obj[name]  ==  obj.name  因为 name 此处是变量  故用[]
					//  此处 name 是福田区 ，当 item 数据 的name  是福田区 时候 将会都被塞进 一个 obj内
					if(obj[name]==null){
						obj[name]=[]
					}
					//item 遍历出来单个 影院地址
					var Item = {};
					Item.name = item.name;
					Item.address = item.address;
					//控制 爆米花 优惠活动显示
					if(item.labels.length>=2){
						Item.labels = "优惠活动";
						Item.foods = "可乐爆米花";
					}
					else if(item.labels.length==1){
						Item.labels ="优惠活动";
						Item.foods ="";
					}
					else{
						Item.labels = "";
						Item.foods = "";
					}
					obj[name].push(Item)
				})
				console.log("的到的新对象obj:", obj);
				for(let  key in  obj){
					var obj1={};
					obj1.name=key;
					obj1.list=obj[key];
					Arr.push(obj1)
				}
				console.log("的到的新数组arr:", Arr);
				resolve(Arr)
			})
			.catch((error)=>{
				console.log(error)
			})
	})
}
getCinemaAddressData();

//城市数据
function   getCityAddressData(){
	return new Promise((resolve,reject)=>{
	   axios.get(`${API.CityAddressApi}${API.TimeDataApi}${new Date().getTime()}`)
		   .then( (response)=>{
				console.log('请求CityAddress数据',response.data.data.cities);
                var obj={};
			    var Arr=[];
			   response.data.data.cities.map((item)=>{
				   //截取 首写大字母
				   var name=item.pinyin.substring(0,1);
				   if(obj[name]==null){
					   obj[name]=[]
				   }
				   //item 遍历出来单个 城市
				   var Item = {};
				   Item.name = item.name;
				   Item.pinyin = item.pinyin;
				   Item.id=item.id;


				   obj[name].push(Item)

			   });
			   console.log("的到的新对象obj:", obj);
			   //   按首字母 将数据  进行重新归纳
			   for(let key2 in obj){
				   var NewObj={};
				   NewObj.word= key2;
				   NewObj.list=obj[ key2];

				   Arr.push(NewObj)

			   }

			   console.log("的到的数组arr:", Arr);
			   if (Arr.length>=22){
				   for ( var j=0 ; j<Arr.length-1;j++){
					   for ( var i=0 ; i<Arr.length-1;i++){
                            if ( Arr[i].word>Arr[i+1].word){
                                    var tem;
								    tem=Arr[i];
								    Arr[i]=Arr[i+1];
								Arr[i+1]=tem;
							}
					   }
				   }
			   }
			   console.log("d得到按字母顺序排列的数组arr:", Arr);
			   resolve(Arr);
		   })
		   .catch((error)=>{
			   console.log(error)
		   })
	})
}


export default {
	getHomeBanner,
	getHotData,
	getHotData7,
	getComingSoonData7,
	getShopListData,
	getShopRecommendData,
	getHomeDetailData,
	getProductInfoData,
	getProductPictureData,
	getCinemaAddressData,
	getCityAddressData
}
