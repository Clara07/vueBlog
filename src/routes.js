import Login from './views/Login.vue'
import Table from "./views/nav1/Table";
import SimpleForm from "./views/nav1/SimpleForm";
import Main from "./views/Main";
import Home from "./views/Home";

let routes = [
    {
        path:'/login',
        component:Login,
        name:'Login',
        hidden:true

    },
    // {
    //     path:'/404',
    //     component:NotFound,
    //     name:'',
    //     hidden:true
    // }
    {
        path:'/',
        component:Home,
        name:'导航一',
        iconCls:'el-icon-message',
        children:[
            {path:'/main',component:Main,name:'主页',hidden: true},
            {path:'/table',component:Table,name:'用户列表'},
            {path:'/simpleform',component:SimpleForm,name:'常用表单示例'}
        ]
    },

]
export default routes