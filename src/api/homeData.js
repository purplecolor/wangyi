import myajax from "@/tool/myajax.js";

export default {
  goodMv(index,cb){
    const config = {
      // url: "http://localhost:3000/personalized/mv",
      //   url:"http://localhost:3000/top/mv",
        url:"http://localhost:3000/top/mv?limit=10&offset="+index,
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
  },
    sousuo(val,cb){
      const config={
          url:"http://localhost:3000/search?limit=10&keywords="+val,
          option:{},
          success:(data)=>{
              cb(data)
          }
      }
      myajax.fetch(config);
    },
    sousuourl(id,cb){
      const config={
          url:"http://localhost:3000/music/url?id="+id,
          option:{},
          success:(data)=>{
              cb(data)
          }
      }
      myajax.fetch(config);
    },
}
