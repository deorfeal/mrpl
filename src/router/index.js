import {
    createWebHistory,
    createRouter
} from "vue-router";
import Entrance from "@/views/Entrance.vue";

const routes = [{
    path: "/",
    name: "Entrance",
    component: Entrance,
},
];

const router = createRouter({
history: createWebHistory('/mrpl/'),
routes,
});

export default router;