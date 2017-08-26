/**
 * Created by Administrator on 2017/8/23 0023.
 */
import React, {Component} from 'react'
import homeService from '../../services/homeService.js'

import '../../css/movies.css'
export  default class  MovieDetail extends  Component {
    constructor({history,location,match}) {
        //console.log(history)//第一个参数写跳转路径，第二个参数为跳转传的参数
        //console.log(location)//可以取到Home页面history传过来的参数location.state
        //console.log(match)
        super();
        this.state = {
            location,
            movieInfo:{}
        }
    }
    render(){
        let element=this.state.movieInfo.actors?(
            <p class="actors">
                主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演:&nbsp;&nbsp;{
                    this.state.movieInfo.actors.map( (item,index)=>{
                        return(
                            <span key={index}>{item.name}<em>|</em> </span>
                        )
                    })
                }
            </p>
        ):null;
        return(
            <div class="page movieDetail">
                <img src={this.state.movieInfo.img} alt=""/>
                <div class="movie-info">
                    <p>影片介绍</p>
                    <p><span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演:</span><span>&nbsp;&nbsp;{this.state.movieInfo.director}</span></p>
                     {element}
                    <p><span>地区语言:</span><span>&nbsp;&nbsp;{this.state.movieInfo.nation}</span><span>({this.state.movieInfo.language})</span></p>
                    <p><span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型:</span><span>&nbsp;&nbsp;{this.state.movieInfo.category}</span></p>
                    <p><span>上映日期:</span><span>&nbsp;&nbsp;8月17日上映</span></p>
                    <p><span>{this.state.movieInfo.synopsis}</span></p>
                </div>
                <div class="buy-btn-box">
                     <div class="buy-btn" onClick={this.toCinemaPage.bind(this)}>立即购票</div>
                </div>

            </div>
        )
    }
    toCinemaPage(){
        this.props.history.push("/cinema")
    }
    //等挂载dom结果犯之后  进行数据请求
    componentDidMount(){
        console.log(this.state.location.state);
        homeService.getHomeDetailData(this.state.location.state)
        .then( (data)=>{
            console.log("当前请求到的点击的电影数据location.state:",data);
            this.setState({movieInfo:data});

        })

    }


}