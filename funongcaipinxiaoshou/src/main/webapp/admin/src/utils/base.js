const base = {
    get() {
                return {
            url : "http://localhost:8080/funongcaipinxiaoshou/",
            name: "funongcaipinxiaoshou",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/funongcaipinxiaoshou/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "农副产品销售网站"
        } 
    }
}
export default base
