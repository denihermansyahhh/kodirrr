<template>
  <div id="page-statistic">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h3>Data Ruangan</h3>
        </v-flex>
        <v-flex sm12>
          <a href="/apotek/obat/tambah">
            <v-btn class="primary"> Tambah Data</v-btn></a
          >
        </v-flex>
        <v-flex lg12>
          <v-toolbar card color="white">
            <v-text-field
              flat
              solo
              prepend-icon="search"
              placeholder="Tuliskan Nama Ruangan"
              v-model="search"
              hide-details
              class="hidden-sm-and-down"
            ></v-text-field>
            <!-- <v-btn icon>
                <v-icon>filter_list</v-icon>
              </v-btn> -->
          </v-toolbar>
          <v-divider></v-divider>
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
                <td>{{ props.item.nama_ruangan }}</td>
                <td>{{ props.item.tipe }}</td>
                <td>{{ props.item.fasilitas }}</td>
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
import { Items as Nama_ruangan } from "@/api/admin/ruangan/data";
export default {
  layout: "apotek/dashboard",
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
            text: "Nama",
            value: "nama_ruangan",
          },
          {
            text: "Tipe Ruangan",
            value: "tipe",
          },
          {
            text: "Fasilitas",
            value: "fasilitas",
          },
          {
              text: 'Action',
              value: ''
            },
        ],
        items: Nama_ruangan,
      },
    };
  },
};
</script>

<style scoped>
</style>
