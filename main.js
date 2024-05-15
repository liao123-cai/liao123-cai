
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
//引入初始化样式文件
import "@/styles/common.scss"
import { directivePlugin } from '@/directives'


//测试接口函数
// import {getCategory} from '@/apis/testAPI'
// getCategory().then(res=>{
//     console.log(res)
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app')

app.use(directivePlugin)