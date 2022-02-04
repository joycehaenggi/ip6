import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';


Vue.use(Vuetify);

export default new Vuetify({
    theme: { disable: true },
    vuetify: new Vuetify(vuetifyOpts),
    data: function() {
        return {
            myiconname: "$vuetify.icons.myicon",

        };
    }
});


Vue.component("my-icon", {
    template: `<svg height="24" width="24">
        <circle cx="12" cy="12" r="9" fill="red" />
    </svg>`
});

const vuetifyOpts = {
    icons: {
        iconfont: "mdi",
        values: {
            myicon: {
                component: "my-icon"
            },

        }
    }
};


