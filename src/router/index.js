import {
    createWebHistory,
    createRouter
} from "vue-router";

import Entrance from "@/views/Entrance.vue";
import MyData from "@/views/MyData.vue";
import Orders from "@/views/Orders.vue";
import Artists from "@/views/Artists.vue";
import AddArtists from "@/views/AddArtists.vue";
import EditArtists from "@/views/EditArtists.vue";

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
    {
        path: "/artists",
        name: "artists",
        component: Artists,
    },
    {
        path: "/add-artists",
        name: "add-artists",
        component: AddArtists,
    },
    {
        path: "/edit-artists",
        name: "edit-artists",
        component: EditArtists,
    },

];

const router = createRouter({
    history: createWebHistory('/mrpl/'),
    routes,
});

export default router;