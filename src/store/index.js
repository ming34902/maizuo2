/**
 * Created by Administrator on 2017/8/23 0023.
 */
import  {createStore} from 'redux'

//state(全局状态)
//	外部方法访问state，执行store.getState()

//action(操作全局状态的事件)
//	外部调用action，执行store.dispatch();

//外部监听state
//var unsubscribe = store.subscribe(function(){ 监听函数 });
//移除监听 unsubscribe();

let count = 0;
let reducer=function(state,action){
    console.log('第'+(++count)+'次调用');
   if (state==null){
       //state==null  即 没有用户登录  show:false   me页面的login组件展示
       state={
           username:'',
           password:'',
           show:false
       }
   }else {
       state={
           username:'',
           password:'',
           show:true
       }
   }
    if(action.type === 'changename'){
        state.username = action.nameVal;
        state.password = action.pwdVal;
        state.show = action.show
    }
    if(action.type==='adminExit'){
        state.username = action.nameVal;
        state.password = action.pwdVal;
        state.show = action.show
    }


    console.log('第'+(count)+'次return');
    console.log(state);
    return state;
}
//let reducer2=function(name){
//    if (name=null){
//        name:'卖座电影'
//    }else {
//        name:''
//    }
//
//}


export default createStore(reducer);