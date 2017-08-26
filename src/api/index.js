//参数 __t 当前时间戳
const homeBannerApi = "/v4/api/billboard/home?";
const HotNowPlaying5Api="/v4/api/film/now-playing?page=1&count=5";
const HotNowPlaying7Api=" /v4/api/film/now-playing?page=1&count=7";
const ComingSoon7Api="v4/api/film/coming-soon?page=1&count=7";

//影院分布
//http://m.maizuo.com/v4/api/cinema?__t=1503651222768
//http://m.maizuo.com/v4/api/cinema?__t=1503652021901
const CinemaAddressApi="/v4/api/cinema?";

const ShopListApi="/api/ad/list?";
const ShopRecommendApi="/api/recommend/home?page=1&num=20";


//电影详情
//http://m.maizuo.com/v4/api/film/3826?__t=1503641585881
const  movieDetailData1Api='/v4/api/film/';
const  TimeDataApi='__t=';

//商品详情页
//http://aura.maizuo.com/api/item?id=18
const ShopDetailDataApi='/api/item?id=';
//商品详情页-展示图
//http://aura.maizuo.com/api/item/desc?id=1613
const productPictureDataApi='/api/item/desc?id=';

//城市地址
//http://m.maizuo.com/v4/api/city?__t=1503715559315
const CityAddressApi="/v4/api/city?";

export default {
	homeBannerApi,
	HotNowPlaying5Api,
	HotNowPlaying7Api,
	ComingSoon7Api,
	CinemaAddressApi,
	ShopListApi,
	ShopRecommendApi,
	movieDetailData1Api,
	TimeDataApi,
	ShopDetailDataApi,
	productPictureDataApi,
	CityAddressApi
}
