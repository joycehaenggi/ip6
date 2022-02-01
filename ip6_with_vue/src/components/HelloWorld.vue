<template>
  <div id="app">
    <v-app id="inspire">
      <v-data-table
          v-model="selected"
          :headers="hazardsHeader"
          :items="hazards"
          :single-expand="singleExpand"
          :expanded.sync="expanded"
          :single-select="singleSelect"
          item-key="name"
          show-select
          show-expand
          class="elevation-1"
      >


        <template v-slot:item.risikoprioritätszahl="{ item }">
          <v-chip
              :color="getColor(item.risikoprioritätszahl)"
              dark
          >
            {{ item.risikoprioritätszahl }}
          </v-chip>
        </template>

        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            More info about {{ item.name }}
          </td>
        </template>
      </v-data-table>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',


  data () {
    return {
      singleSelect: false,
      selected: [],
      expanded: [],
      singleExpand: false,
      hazardsHeader: [

        { text: 'Icon', value: 'icon' },
        { text: 'Risikoprioritätszahl', value: 'risikoprioritätszahl' },
        {
          text: 'Definition Gefährdung',
          align: 'start',
          sortable: true,
          value: 'definition',
        },
        { text: 'Nicht zutreffend', value: 'data-table-select' },
        { text: 'Akzeptiert', value: 'akzeptiert' },
        { text: 'Gefährdung verifizieren', value: 'data-table-expand' },
      ],
      hazards: [
        {
          icon: "test",
          risikoprioritätszahl: "400",
          definition: "Designvorgabe Mindestdicke kann nicht eingehalten werden - Dicke des Implantsts zu dünn.",
          nichtZutreffend: "test",
          akzeptiert: "test",
          verfizieren: "test",

        }
      ],
    }
  },
  methods: {
    getColor (risikoprioritätszahl) {
      if (risikoprioritätszahl > 400) return 'red'
      else if (risikoprioritätszahl > 200) return 'orange'
      else return 'green'
    },
  },
}
</script>

<style>
.v-application--wrap{
  min-height: 0vh !important;
}
</style>
