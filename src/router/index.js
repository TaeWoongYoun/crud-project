import { createRouter, createWebHistory } from 'vue-router';
import AppRead from '@/components/AppRead.vue';
import AppCreate from '@/components/AppCreate.vue';

const routes = [
    {
        path: '/',
        name: 'AppRead',
        component: AppRead
    },
    {
        path: '/create',
        name: 'AppCreate',
        component: AppCreate
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
