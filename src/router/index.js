import Vue from 'vue'
import Router from 'vue-router'
import grid from '@/components/grid'
import hello from '@/components/HelloWorld'
import resume from '@/components/resume'
import gamePage from "@/components/gamePage";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Grid',
            component: grid
        },
        {
            path: '/hello',
            name:'Hello World',
            component: hello
        },
        {
            path: '/resume',
            name:'Resume',
            component: resume
        },
        {
            path: '/workplacehazards',
            name:'Workplace Hazards',
            component: gamePage,
            props: {
                theme: "Help",
                name: "hola"
            }
        }
    ],
    data () {
        return {
            publicPath: process.env.BASE_URL
        }
    }
})