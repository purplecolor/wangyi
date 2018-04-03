import myajax from "@/tool/myajax.js";

export default {
  goodMv(cb){
    const config = {
      url: "http://localhost:3000/personalized/mv",
      options:{},
      success:(data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  }
}
