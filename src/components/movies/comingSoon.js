/**
 * Created by Administrator on 2017/8/18 0018.
 */
import React, {Component} from 'react'

import homeService from '../../services/homeService.js'

import '../../css/movies.css'
export  default class  ComPlay extends  Component{
    constructor({history,location,match}){
        super();
        this.state={
            location
        }

    }
    render(){
        return(
            <div class="film-list">
                <ul class="list-ul">
                    {
                        //子组件接收父组件数据 要用 props
                        this.props.data.map((item,index)=>{
                        return(
                            <li key={index}  onClick={this.toMovieDetail.bind(this, item.id,item.name)}>
                                <div  class="filmItem complay">
                                    <div class="img-box">
                                        <img src={item.cover.origin} alt="" />
                                    </div>
                                    <div class="filmItem-info">
                                        <p><b><span>{item.name}</span></b><b><span class="iconfont">&#xe7f1;</span></b></p>
                                        <p><span>{item.intro}</span></p>
                                        <p><span>{item.cinemaCount}家影院上映</span><span>{item.watchCount}人购票</span></p>
                                    </div>
                                </div>
                            </li>
                        )
                          })
                    }
                </ul>
            </div>
        )
    }
    toMovieDetail(id,name){
        //向父级发送数据
        this.props.toSend({ movieID:id, movieName:name});
        //this.props.history.push({
        //    pathname:'/movieDetail',
        //    state: {
        //        movieID:id,
        //        movieName:name
        //    }
        //});
    }

}