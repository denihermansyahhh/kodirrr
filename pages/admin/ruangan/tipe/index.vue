<template>
  <div id="page-statistic">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h3>Data Tipe Ruangan</h3>
        </v-flex>
        <v-flex sm12>
          <a href="/admin/ruangan/tipe/tambah"><v-btn class="primary">Tambah Data</v-btn></a>
        </v-flex>
        <v-flex lg12>
          <v-card class="pa-0">
            <v-data-table
              :headers="complex.headers"
              :search="search"
              :items="complex.items"
              :rows-per-page-items="[5, 10, 25, 50, { text: 'All', value: -1 }]"
              class="elevation-1"
              item-key="name"
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.index }}</td>
                <td>{{ props.item.tipe_ruangan }}</td>
                <td>
                  <v-btn depressed outline icon fab dark color="warning" small>
                    <v-icon>edit</v-icon>
                  </v-btn>
                  <v-btn depressed outline icon fab dark color="pink" small>
                    <v-icon>delete</v-icon>
                  </v-btn>
                </td>
              </template>
            </v-data-table>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import MiniStatistic from "@/components/widgets/statistic/MiniStatistic";
import { Items as Tipe_ruangan } from "@/api/admin/ruangan/tipe";
export default {
  layout: "admin/dashboard",
  components: {
    MiniStatistic,
  },
  data() {
    return {
      search: "",
      complex: {
        selected: [],
        headers: [
          {
            text: "No. ",
            value: "no",
          },
          {
            text: "Tipe",
            value: "tipe_ruangan",
          },
          {
              text: 'Action',
              value: ''
            },
        ],
        items: Tipe_ruangan,
      },
    };
  },
};
</script>

<style scoped>
</style>
