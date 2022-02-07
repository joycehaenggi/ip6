<template>
  <v-row>
    <v-col cols="12">
      <v-data-table
          v-model="selected"
          :headers="headers"
          :items="desserts"
          item-key="name"
          show-select
          class="elevation-1"
      >
        <template v-slot:top>
          <div class="my-2 mx-4 text-h5 font-weight-medium">
            My custom title
          </div>
        </template>
        <template #item.fat="{item}">
          <div class="d-flex">
            <div>
              {{ item.fat }}
            </div>
            <div class="ml-2">
              <img v-if="item.name == 'Donut'" src="../assets/img/toThin.svg" width="20" alt=""/>
              <i v-else :class="`fi fi-rr-${item.icon}`"></i>
            </div>
          </div>
        </template>

        <template #item.data-table-select="{item}">
          <div >

            <div>
            <append-icon><img
                v-if="item.name == 'Designvorgabe Mindestdicke kann nicht eingehalten werden - Dicke des Implantsts zu dünn.'"
                src="../assets/img/toThin.svg" width="20" alt=""/></append-icon>
              <i></i>
            </div>
            <div>
            </div>
          </div>
        </template>


      </v-data-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      selected: [],
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
          icon: 'home'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
          icon: 'user'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
          icon: 'heart'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
          icon: 'add'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
          icon: 'apple'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
          icon: 'beer'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
          icon: 'bow'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
          icon: 'candy'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
          icon: 'bell-ring'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
          icon: 'caret-square-down'
        },
      ],
    }
  },
}
</script>

<style>
/* <style> blocks that doesn't have the 'scoped' attribute
 make the CSS available in all your components, I usually put
 my global CSS in the App.vue file or in a external css file.

 In this case I'm just importing the regular rounded style
 of flaticons, if you want to use bold, solid, straight icons
 you'll need to import those as well */
@import url("https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css");

i {
  font-size: 1.2em;
}
</style>