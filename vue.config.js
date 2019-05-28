module.exports = {
    configureWebpack: {
        devServer: {
          before(app) {
            app.get("/api/list", function(req, res) {
              setTimeout(function(){
                res.json({
                  code: 0,
                  list: [
                    { id: 1, date: "2019-09-01 12:22:22", name: "1000.json",size:'121313',type:"file",right:null },
                    { id: 1, date: "2019-07-01 12:22:22", name: "222.json",size:'123113',type:"file",right:null },
                    { id: 1, date: "2019-06-01 12:22:22", name: "333.json",size:'123113',type:"file",right:null },
                    { id: 1, date: "2019-03-01 12:22:22", name: "1111123.json",size:'11313',type:"file",right:null }
                  ]
                });
              },1000)
              
            });
          },
        }
    }
}