import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import ToThin from "@/components/icons/ToThin";

Vue.use(Vuetify);

export default new Vuetify({
    theme: { disable: true },

    iconfont: "fa",
    icons: {
    myIcon: {
        component: ToThin,
            props: {
            name: "my-icon"
        }
    },
}
});