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
import Order from "@/views/Order.vue";
import Calendar from "@/views/Calendar.vue";
import EntranceApp from "@/views/Mobile-app/Entrance.vue";
import MyDataApp from "@/views/Mobile-app/MyData.vue";
import DocumentsApp from "@/views/Mobile-app/Documents.vue";
import Contract from "@/views/Mobile-app/Contract.vue";
import Statistic from "@/views/Mobile-app/Statistic.vue";
import CalendarApp from "@/views/Mobile-app/Calendar.vue";

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

    {
        path: "/order",
        name: "order",
        component: Order,
    },
    {
        path: "/calendar",
        name: "calendar",
        component: Calendar,
    },

    {
        path: "/entrance-app",
        name: "entrance-app",
        component: EntranceApp,
    },

    {
        path: "/my-data-app",
        name: "my-data-app",
        component: MyDataApp,
    },

    {
        path: "/documents-app",
        name: "documents-app",
        component: DocumentsApp,
    },    

    {
        path: "/contract-app",
        name: "contract-app",
        component: Contract,
    },  

    {
        path: "/statistic-app",
        name: "statistic-app",
        component: Statistic,
    },  

    {
        path: "/calendar-app",
        name: "calendar-app",
        component: CalendarApp,
    },  
  
];

const router = createRouter({
    history: createWebHistory('/mrpl/'),
    routes,
});

export default router;