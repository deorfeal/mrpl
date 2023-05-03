import {
    createWebHistory,
    createRouter
} from "vue-router";

import ProductPage from "@/views/Product-page.vue";
import HomePageBlock from "@/views/Home-page-block.vue";

const routes = [{
        path: "/product-page",
        name: "product-page",
        component: ProductPage,
    },
    {
        path: "/home-page-block",
        name: "home-page-block",
        component: HomePageBlock,
    },
];

const router = createRouter({
    history: createWebHistory('/moonbird/'),
    routes,
});

export default router;