/**
 * Created by Administrator on 2017/8/23 0023.
 */
import React, {Component} from 'react'
import ReactSwipe from 'react-swipe';
import homeService from '../../services/homeService.js'
import store from '../../store'

import '../../css/shop.css'
let bannerSwiper = null;
let contentScroll;

let isLogin;
//用于监听 全局store值
let unsubscribe;
export  default class  ShopDetail  extends  Component {
    constructor({history,location,match}) {
        super();
        console.log("这是shop 页面的location",location);
        this.state = {
            location,
            productInfo:{},
            proBannerData:[],
            proPictureData:{},
            username:'',
            show:''
        }
    }
    render(){
        return(
            <div class="page ">
                <div class="shopDetail-page">
                    <div class="warp">
                        <div class=" proDetail">
                            <div class="proBanner  swiper-container " ref="banner" >
                                <div class="swiper-wrapper">
                                    {
                                        this.state.proBannerData.map((item,index)=>{
                                            return (
                                                <div key={index} class="swiper-slide">
                                                    <img src={item} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div class="swiper-pagination"></div>
                            </div>

                            <div class="item-info">
                                <div class="name">{this.state.productInfo.masterName}</div>
                                <div class="subName">{this.state.productInfo.slaveName}</div>

                                <div class="price">{((this.state.productInfo.price)/100).toFixed(2)}</div>
                                {
                                    //    <div class="price">{((this.state.productInfo.skuList[0].price)/100).toFixed(2)}</div>
                                }

                                <div class="tips">
                                    <div class="express-fee"><span>快递：</span><span>0.00</span><span>元</span></div>
                                    <div class="sold-amount"><span>销量:</span><span>{this.state.productInfo.displaySalesCount}</span></div>
                                    <div class="location">全国</div>
                                </div>

                            </div>

                            <div class="sku-pick">
                                <span>选择</span><span></span><span>规格</span><span></span><span>数量</span><span></span>
                                <i class="iconfont icon-arrow-right "></i>
                            </div>

                            {
                                //<div class="sku-box sku-box-hide">
                                //    <div class="box-body">
                                //        <div class="box-sku-info">
                                //            <div class="box-sku-head clearfix">
                                //                <div class="sku-pic">
                                //                    <img src="http://pic.maizuo.com/manager/a8182630f20c0935f186bae78805446e.jpg?x-oss-process=image/resize,m_fill,h_100,w_100" alt="initSku.name"/>
                                //                </div>
                                //                <div class="sku-context">
                                //                    <div class="price">￥129.00</div>
                                //                    <div class="name">选择 规格 数量</div>
                                //                </div>
                                //                <div><i class="iconfont icon-close"></i></div>
                                //            </div>
                                //        </div>
                                //
                                //        <div class="sku-select">
                                //            <div class="box-sku-list">
                                //                <div class="option-name">款式</div>
                                //                <div class="option-list">
                                //                    <span>鼠</span>
                                //                    <span class="disable">牛</span>
                                //                    <span class="disable">虎</span>
                                //                    <span class="disable">兔</span>
                                //                    <span>龙</span>
                                //                    <span class="disable">蛇</span>
                                //                    <span>马</span><span>羊</span>
                                //                    <span class="disable">猴</span>
                                //                    <span class="disable">鸡</span>
                                //                    <span>狗</span><span>猪</span>
                                //                </div>
                                //            </div>
                                //        </div>
                                //        <div class="box-count">
                                //            <div class="count-title">选择数量</div>
                                //            <div class="count-body">
                                //                <div class="count-type">
                                //                    <span class="icon disable left">-</span>
                                //                    <span class="center">1</span>
                                //                    <span class="count-no-border icon right">+</span>
                                //                </div>
                                //            </div>
                                //        </div>
                                //        <div class="box-bottom"></div>
                                //    </div>
                                //</div>
                            }



                        </div>

                        <div class="pic-show">

                        </div>


                    </div>
                </div>
                <div class="item-bottom">
                    <div class="item-footer-left item-footer-button">
                        <div class="item-footer-home item-footer-icon">
                            <i class="iconfont icon-home "></i>
                            <div class="foot-icon-text" onClick={this.toHome.bind(this)}>首页</div>
                        </div>
                    </div>
                    <div class="item-footer-right item-footer-act" onClick={this.toMe.bind(this)} >立即购买</div>
                </div>
            </div>
        )
    }
    toHome(){
        this.props.history.push("/")
    }


    //等挂载dom之前  进行数据请求
    componentWillMount(){
        console.log("商品详情接收history-id:",this.state.location.state);
        homeService.getProductInfoData(this.state.location.state)
            .then( (data)=>{
                console.log("当前请求到的点击的商品数据location.state:",data);

                this.setState({productInfo:data});
                console.log("请求到的产品info:", this.state.productInfo);

                this.setState({proBannerData:data.skuList[0].images});
                console.log("请求到的产品banner:", this.state.proBannerData);
                bannerSwiper.update();
                bannerSwiper.slideTo(1, 0);

            })
        //homeService.getProBannerDetailData(this.state.location.state)
        //    .then( (data)=>{
        //        console.log("当前请求到的点击的商品banner数据location.state:",data.imgPath);
        //        this.setState({proBannerData:data.imgPath});
        //        console.log("请求到的产品info:", this.state.proBannerData);
        //        bannerSwiper.update();
        //        bannerSwiper.slideTo(1, 0);
        //    })

        homeService.getProductPictureData(this.state.location.state)
            .then((data)=>{
                this.setState({proPictureData:data});
                console.log("产品picture:", this.state.proPictureData);
            })




        unsubscribe = store.subscribe(()=>{
            console.log('shop详情页-用户登录监听触发了');
            this.setState({username: store.getState().username,show: store.getState().show});
        })

        setTimeout(function(){
            contentScroll.refresh()
        },2000);

    }
    toMe(){
        this.setState({isLogin:store.getState().show});
        if(isLogin){
            this.state.history.push({
                pathname: '/shopDetail',
                state: {
                    username: state.username,
                    show:state.show
                }
            });
        }else{
            //进人登录页面
            alert('请登录');
            this.props.history.push("/me")
        }
    }
    componentDidMount(){
        console.log(this.state.proBannerData.length);
        bannerSwiper = new Swiper(this.refs.banner, {
            loop: true,
            pagination: '.swiper-pagination'
        });

        contentScroll = new IScroll(".shopDetail-page ", {
            probeType: 3
        });

    }

    //销毁组件
    componentWillUnmount(){
        unsubscribe();
    }


}