
var projectName = '农副产品销售网站';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '农业行情',
	url: './pages/nongyexingqing/list.html'
}, 
{
	name: '农业技巧',
	url: './pages/nongyejiqiao/list.html'
}, 
{
	name: '商品信息',
	url: './pages/shangpinxinxi/list.html'
}, 

{
	name: '农业资讯',
	url: './pages/news/list.html'
},
{
	name: '留言反馈',
	url: './pages/messages/list.html'
}
]

var adminurl =  "http://localhost:8080/funongcaipinxiaoshou/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"商家","menuJump":"列表","tableName":"shangjia"}],"menu":"商家管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"农业行情","menuJump":"列表","tableName":"nongyexingqing"}],"menu":"农业行情管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"农业技巧","menuJump":"列表","tableName":"nongyejiqiao"}],"menu":"农业技巧管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"商品类型","menuJump":"列表","tableName":"shangpinleixing"}],"menu":"商品类型管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"商品信息","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"商品购买","menuJump":"列表","tableName":"shangpingoumai"}],"menu":"商品购买管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"交流信息","menuJump":"列表","tableName":"jiaoliuxinxi"}],"menu":"交流信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"交流回复","menuJump":"列表","tableName":"jiaoliuhuifu"}],"menu":"交流回复管理"},{"child":[{"buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"农业资讯","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"农业行情列表","menuJump":"列表","tableName":"nongyexingqing"}],"menu":"农业行情模块"},{"child":[{"buttons":["查看"],"menu":"农业技巧列表","menuJump":"列表","tableName":"nongyejiqiao"}],"menu":"农业技巧模块"},{"child":[{"buttons":["查看","购买","咨询"],"menu":"商品信息列表","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","删除","支付"],"menu":"商品购买","menuJump":"列表","tableName":"shangpingoumai"}],"menu":"商品购买管理"},{"child":[{"buttons":["查看","删除"],"menu":"交流信息","menuJump":"列表","tableName":"jiaoliuxinxi"}],"menu":"交流信息管理"},{"child":[{"buttons":["查看"],"menu":"交流回复","menuJump":"列表","tableName":"jiaoliuhuifu"}],"menu":"交流回复管理"},{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"},{"child":[{"buttons":["查看","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"农业行情列表","menuJump":"列表","tableName":"nongyexingqing"}],"menu":"农业行情模块"},{"child":[{"buttons":["查看"],"menu":"农业技巧列表","menuJump":"列表","tableName":"nongyejiqiao"}],"menu":"农业技巧模块"},{"child":[{"buttons":["查看","购买","咨询"],"menu":"商品信息列表","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"商品类型","menuJump":"列表","tableName":"shangpinleixing"}],"menu":"商品类型管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"商品信息","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息管理"},{"child":[{"buttons":["查看","删除"],"menu":"商品购买","menuJump":"列表","tableName":"shangpingoumai"}],"menu":"商品购买管理"},{"child":[{"buttons":["查看","回复"],"menu":"交流信息","menuJump":"列表","tableName":"jiaoliuxinxi"}],"menu":"交流信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"交流回复","menuJump":"列表","tableName":"jiaoliuhuifu"}],"menu":"交流回复管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"农业行情列表","menuJump":"列表","tableName":"nongyexingqing"}],"menu":"农业行情模块"},{"child":[{"buttons":["查看"],"menu":"农业技巧列表","menuJump":"列表","tableName":"nongyejiqiao"}],"menu":"农业技巧模块"},{"child":[{"buttons":["查看","购买","咨询"],"menu":"商品信息列表","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"是","roleName":"商家","tableName":"shangjia"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
