import HomeTemplate from './home/home.template.vue';
import LoadingTemplate from './loading/loading.template.vue';
import StreamTemplate from './stream/stream.template.vue';
import ErrorTemplate from './error/error.template.vue';

export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: HomeTemplate
    },
    { 
        path: '/loading', 
        component: LoadingTemplate 
    },
    { 
        path: '/stream/:stream_name', 
        component: StreamTemplate 
    },
    { 
        path: "*", 
        component: ErrorTemplate 
    }
];