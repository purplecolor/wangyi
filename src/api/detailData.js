import myajax from "@/tool/myajax.js";
export default{
	goodsData(goodsID,cb){
		const config={
			url:"http://localhost:3000/api/list/weiyirexiao?goodsID="+goodsID,
			option:{},
			success:(data)=>{
				cb(data)
			}
		}
		myajax.fetch(config);
	}
}
