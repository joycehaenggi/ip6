<template>
  <div id="app">
    <v-app id="inspire">

      <template>
  <thead class="v-data-table-header">
  <tr>
    <th role="columnheader" scope="col" aria-label="Icon: Not sorted. Activate to sort ascending." aria-sort="none"
        class="text-start sortable"><span>Icon</span><i aria-hidden="true"
                                                        class="v-icon notranslate v-data-table-header__icon mdi mdi-arrow-up theme--light"
                                                        style="font-size: 18px;"></i></th>
    <th role="columnheader" scope="col" aria-label="Risikoprioritätszahl: Not sorted. Activate to sort ascending."
        aria-sort="none" class="text-start sortable"><span>Risikoprioritätszahl</span><i aria-hidden="true"
                                                                                         class="v-icon notranslate v-data-table-header__icon mdi mdi-arrow-up theme--light"
                                                                                         style="font-size: 18px;"></i>
    </th>
    <th role="columnheader" scope="col" aria-label="Definition Gefährdung: Not sorted. Activate to sort ascending."
        aria-sort="none" class="text-start sortable"><span>Definition Gefährdung</span><i aria-hidden="true"
                                                                                          class="v-icon notranslate v-data-table-header__icon mdi mdi-arrow-up theme--light"
                                                                                          style="font-size: 18px;"></i>
    </th>
    <th role="columnheader" scope="col" aria-label="Nicht zutreffend" class="text-start"
        style="width: 1px; min-width: 1px;">
      <div class="v-data-table__checkbox v-simple-checkbox">
        <div> test</div>
      </div>
    </th>
    <th role="columnheader" scope="col" aria-label="Akzeptiert: Not sorted. Activate to sort ascending."
        aria-sort="none" class="text-start sortable"><span>Akzeptiert</span><i aria-hidden="true"
                                                                               class="v-icon notranslate v-data-table-header__icon mdi mdi-arrow-up theme--light"
                                                                               style="font-size: 18px;"></i></th>
    <th role="columnheader" scope="col" aria-label="Gefährdung verifizieren" class="text-start"
        style="width: 1px; min-width: 1px;"><span>Gefährdung verifizieren</span></th>
  </tr>
  </thead>
      </template>

    </v-app>

    <template slot="items" slot-scope="props">
      <tr @click="props.expanded = !props.expanded">
        <td>{{ props.item.title }}</td>
        <td>{{ format(props.item.premiere) }}</td>
        <td>{{ props.item.rating }}</td>
      </tr>
    </template>

  </div>
</template>

<script>
export default {
  name: "Test",

  data: () => ({
    headers: [
      {
        text: 'Title',
        value: 'title',
        align: 'left',
        sortable: false
      },
      { text: 'Premiere', value: 'premiere' },
      { text: 'Rating', value: 'rating' }
    ],
    movies: [
      {
        title: 'Star Wars: A new Hope',
        premiere: new Date('1977-11-18'),
        rating: 9.5,
        poster: `https://goo.gl/dfqeUe`,
        description: `Em uma galáxia muito muito distante...`
      },
      {
        title: 'Star Wars: The Empire Strike back',
        premiere: new Date('1980-07-21'),
        rating: 8.2,
        poster: `https://goo.gl/kV2VGr`,
        description: `The empire strikes back the resistence force in huth`
      },
      {
        title: 'Star Wars: The Return of Jedi',
        premiere: new Date('1983-10-06'),
        rating: 8.1,
        poster: `https://goo.gl/exb9B9`,
        description: `The final conclusion of this awesome story.`
      },
      {
        title: 'Star Wars: The Phanton Menace',
        premiere: new Date('1999-06-24'),
        rating: 6.5,
        poster: `https://goo.gl/G2wPeX`,
        description: 'The story that happend before everything'
      },
      {
        title: 'Star Wars: Attack of the Clones',
        premiere: new Date('2002-05-16'),
        rating: 7.0,
        poster: `https://goo.gl/mYG7zQ`,
        description: 'The galatic war flashpoint'
      },
      {
        title: 'Star Wars: The Revenge of the Sith',
        premiere: new Date('2005-05-19'),
        rating: 8.2,
        poster: `https://goo.gl/uTcLKC`,
        description: 'The fall of the Jedi order'
      }
    ],
    lazy: `https://goo.gl/jbJWmK`
  }),
  created () {},
  computed: {},
  mounted: {},
  methods: {
    format (date) {
      date = new Date(date)
      const day = `${date.getUTCDate()}`.padStart(2, '0')
      const month = `${date.getUTCMonth() + 1}`.padStart(2, '0')
      const year = date.getFullYear()
      return `${month}/${day}/${year}`
    }
  },
  watch: {}



}
</script>

<style scoped>

</style>