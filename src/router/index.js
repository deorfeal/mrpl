import {
    createWebHistory,
    createRouter
} from "vue-router";

import Entrance from "@/views/Entrance.vue";
import MyData from "@/views/MyData.vue";
import Orders from "@/views/Orders.vue";

const routes = [{
        path: "/",
        name: "Entrance",
        component: Entrance,
    },
    {
        path: "/my-data",
        name: "my-data",
        component: MyData,
    },
    {
        path: "/orders",
        name: "orders",
        component: Orders,
    },
];

const router = createRouter({
    history: createWebHistory('/mrpl/'),
    routes,
});

export default router;