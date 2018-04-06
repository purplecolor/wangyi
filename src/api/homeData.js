import myajax from "@/tool/myajax.js";

export default {
  goodMv(cb){
    const config = {
      // url: "http://localhost:3000/personalized/mv",
        url:"http://localhost:3000/top/mv",
      options:{},
      success:(data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  },
  mvurl(id,cb){

    const config={
      url:"http://localhost:3000/mv?mvid="+id,
        option:{},
        success:(data)=>{
        cb(data)
        }
    }
      myajax.fetch(config);
  }
}
