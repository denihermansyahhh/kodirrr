<template>
  <div id="pageTable">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <!-- mini statistic start -->
        <v-flex lg6 sm6 xs12>
          <mini-statistic
            icon="people_alt"
            title="23"
            sub-title="Total Pasien Terdaftar"
            color="blue darken-2"
          >
          </mini-statistic>
        </v-flex>
        <v-flex lg6 sm6 xs12>
          <mini-statistic
            icon="people_alt"
            title="17"
            sub-title="Pasien Dalam Antrian"
            color="yellow darken-2"
          >
          </mini-statistic>
        </v-flex>
        <v-flex lg6 sm6 xs12>
          <mini-statistic
            icon="people_alt"
            title="3"
            sub-title="Pasien Selesai"
            color="green darken-1"
          >
          </mini-statistic>
        </v-flex>
        <v-flex lg6 sm6 xs12>
          <mini-statistic
            icon="people_alt"
            title="1"
            sub-title="Pasien Batal"
            color="red darken-1"
          >
          </mini-statistic>
        </v-flex>
        <!-- linear statistic  end -->
        <v-flex sm12>
          <h3>Antrian Pasien</h3>
        </v-flex>

        <v-toolbar card color="white">
          <v-flex xs6>
            <v-select
              :items="poli"
              v-model="e1"
              label="Nama poli"
              item-text="poli"
              item-value="poli"
              single-line
            ></v-select>
          </v-flex>
        </v-toolbar>

        <v-flex sm12>
          <v-card>
            <v-toolbar card color="white">
              <h3>Poli Umum</h3>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text class="pa-0">
              <v-data-table
                :headers="complex.headers"
                :search="search"
                :items="complex.items"
                :rows-per-page-items="[
                  5,
                  10,
                  25,
                  50,
                  { text: 'All', value: -1 },
                ]"
                class="elevation-1"
                item-key="name"
              >
                <template slot="items" slot-scope="props">
                  <td>{{ props.index }}</td>
                  <td>{{ props.item.name }}</td>
                  <td>{{ props.item.alamat }}</td>
                  <td>{{ props.item.jenis_kelamin }}</td>
                  <td>{{ props.item.usia }}</td>
                  <td>
                    <v-btn
                      depressed
                      outline
                      icon
                      fab
                      dark
                      color="warning"
                      small
                    >
                      <!-- <a href="/kasir/detail_pasien"> -->
                      <v-icon>edit</v-icon>
                    </v-btn>
                    <v-btn depressed outline icon fab dark color="pink" small>
                      <v-icon>delete</v-icon>
                    </v-btn>
                  </td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import MiniStatistic from "@/components/widgets/statistic/MiniStatistic";
import { Items as Users } from "@/api/kasir/pasien";

export default {
  layout: "pendaftaran/dashboard",
  components: {
    MiniStatistic,
  },
  data() {
    return {
      search: "",
      complex: {
        headers: [
          {
            text: "No",
            // value: 'no'
          },
          {
            text: "Name",
            value: "name",
          },
          {
            text: "Alamat",
            value: "alamat",
          },
          {
            text: "Jenis Kelamin",
            value: "jenis_kelamin",
          },
          {
            text: "Usia",
            value: "usia",
          },
          {
            text: "Action",
            value: "",
          },
        ],
        items: Users,
      },
    };
  },
};
</script>