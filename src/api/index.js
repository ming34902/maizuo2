//参数 __t 当前时间戳
const homeBannerApi = "/v4/api/billboard/home";
const HotNowPlaying5Api="/v4/api/film/now-playing?__t=1503036389842&page=1&count=5";
const HotNowPlaying7Api=" /v4/api/film/now-playing?page=1&count=7";
const ComingSoon7Api="v4/api/film/coming-soon?page=1&count=7";
const AddressApi="/v4/api/cinema?__t=1503055995558";
const ShopListApi="/api/ad/list";
const ShopRecommendApi="/api/recommend/home?page=1&num=20";

export default {
	homeBannerApi,
	HotNowPlaying5Api,
	HotNowPlaying7Api,
	ComingSoon7Api,
	AddressApi,
	ShopListApi,
	ShopRecommendApi
}
