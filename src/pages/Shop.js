import React, {Component} from 'react'
import ReactSwipe from 'react-swipe';

import homeService from '../services/homeService.js'


import '../../src/css/shop.css'

let bannerSwiper = null;
export default class Shop extends Component{
    constructor(){
        super();
        this.state={
            ShopListMenuData:[],
            ShopSubjectData:[],
            ShopBannerData:[],
            ShopExhibitionData:[],
            ShopRecommendData:[]

        }
    }
    render(){
        return (
            <div class="shop page" >
                <div class="shopBanner  swiper-container shop-banner" ref="banner" >
                        <div class="swiper-wrapper">
                            {
                                this.state.ShopBannerData.map((item,index)=>{
                                    return (
                                        <div key={index} class="swiper-slide">
                                            <img src={item.imageSrc} alt={item.name}/>
                                        </div>
                                    )
                                })
                            }

                            {
                                //<div class="swiper-slide">
                                //    <img src="../../static/img/shop/banner1.jpg" />
                                //</div>
                                //<div class="swiper-slide">
                                //    <img src="../../static/img/shop/banner2.jpg" />
                                //</div>
                            }
                        </div>
                </div>

                <div class="shopMenu">
                    {
                        this.state.ShopListMenuData.map( (item,index)=>{
                            return(
                                <li class="shopMenuItem" key={index}>
                                    <a href={item.url}>
                                        <img src={item.imageSrc} alt=""/>
                                    </a>
                                    <div class="category-name">{item.name}</div>
                                </li>
                            )

                        })
                    }
                </div>

                <div class="exhibition">
                    <div class="exhibition-box">
                    {
                        this.state.ShopExhibitionData.map( (item,index)=>{
                            return(
                                    <div class="img-box" key={index}><img src={item.imageSrc} alt={item.name}/></div>
                            )
                        })
                    }
                    </div>
                </div>

                <div class="subject">
                    {
                       this.state.ShopSubjectData.map( (item,index)=>{
                           return(
                               <div class="subject-box" key={index}>
                                   <div class="subject-banner"><img src={item.imageSrc} alt=""/></div>
                                   <div class="subject-main" >
                                       {
                                          item.products.map((pro,index2)=>{
                                              return(
                                                  <div class="product-box" key={index2}>
                                                      <div class="product">
                                                          <img src={pro.image} alt=""/>
                                                          <p>{pro.name}</p>
                                                          <p>￥{((pro.price)/100).toFixed(2)}</p>
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

                <div class="recommend">
                    <div class="title">-&nbsp;精选好货&nbsp;-</div>
                    <div class="items">
                         <div class="tailLoader">

                             {
                                 this.state.ShopRecommendData.map( (item,index)=>{
                                     return(
                                         <div class="item" key={index}>
                                             <div class="log">
                                                 <img src={item.skuList[0].image} alt=""/>
                                                 <div class="name">{item.masterName}</div>
                                                 <div class="content">
                                                     <span>￥{((item.skuList[0].price)/100).toFixed(2)}</span><span>已售{item.displaySalesCount}</span>
                                                 </div>
                                             </div>
                                         </div>
                                     )
                                 })
                             }

                         </div>
                         <div class="tips">貌似没有更多了</div>
                    </div>
                </div>
            </div>
        )
    }
    componentWillMount(){
        //	请求菜单列表
        homeService.getShopListData()
            .then((data)=>{
                console.log('菜单数据请求到了');

                //data   splice(0,8)取数据前8条数据-菜单menu数据
                this.setState({ShopListMenuData:  data.splice(0,8)});
                //第一次切割后  剩下的数据 形成 data
                console.log("完整data的前8条数据ShopListMenuData:",this.state.ShopListMenuData);



                //data  splice(0,2)取 当前剩余数据前2条数据（也就是完整数组的第9-10条数据）-轮播图banner数据
                this.setState({ShopBannerData:  data.splice(0,2)});
                console.log("完整data的第2组9-10条数据ShopBannerData:",this.state.ShopBannerData);
                ////因为需要设置loop，而dom被js绑定了
                ////数据需要添加第一张和最后一张
                ////将最后一张添加到第一位置
                //this.state.ShopBannerData.splice(0, 0, this.state.ShopBannerData[this.state.ShopBannerData.length-1]);
                ////将第一张添加最后一个位置
                //this.state.ShopBannerData.push(this.state.ShopBannerData[1]);
                bannerSwiper.update();
                bannerSwiper.slideTo(1, 0);




                //data  splice(0,2)取 当前剩余数据前2条数据（也就是完整数组的第11-12条数据）-展览exhibition数据
                this.setState({ShopExhibitionData:  data.splice(0,2)});
                console.log("完整data的第3组11-12条数据ShopExhibitionData:",this.state.ShopExhibitionData);

                //data   当前剩余 所有数据（也就是完整数组的第12条以后所有的数据）-主推subject数据
                this.setState({ShopSubjectData:  data});
                console.log("完整data的第4组第12条以后所有数据ShopSubjectData:",this.state.ShopSubjectData);

            })

        homeService.getShopRecommendData()
            .then((data)=>{
                console.log('推荐Recommend商品数据请求到了');
                this.setState({ShopRecommendData:  data});
            })
    }
    componentDidMount() {
        console.log(this.state.ShopBannerData.length);
        bannerSwiper = new Swiper(this.refs.banner, {
            loop: true
        });
    }

}