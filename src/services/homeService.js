import axios from 'axios'
import API from '../api'

function getHomeBanner(){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.homeBannerApi}?__t=${new Date().getTime()}`)
		.then((response)=>{
			console.log(response.data.data.billboards);
			resolve(response.data.data.billboards);
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}

function test(){
	axios.get("/v4/api/cinema?__t=1502955788535")
	.then((response)=>{
		console.log(response);
	})
	.catch((error)=>{
		console.log(error)
	})
}

test();

function getHtmlData(){
	axios.get("htmlApi")
		.then((response)=>{
			console.log(response);
		})
		.catch((error)=>{
			console.log(error)
		})
}




export default {
	getHomeBanner,
	getHtmlData
}
