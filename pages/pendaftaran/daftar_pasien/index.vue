<template>
  <div id="pageTable">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h3>Data Pendaftaran Pasien</h3>
        </v-flex>
        <v-flex sm12>
          <a href="/pendaftaran/daftar_pasien/tambah">
            <v-btn class="primary"> Tambah Data</v-btn></a
          >
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

        <v-flex lg12>
          <v-card>
            <v-toolbar card color="white">
              <v-text-field
                flat
                solo
                prepend-icon="search"
                placeholder="Ketik nama pasien"
                v-model="search"
                hide-details
                class="hidden-sm-and-down"
              ></v-text-field>
              <v-btn icon>
                <v-icon>filter_list</v-icon>
              </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text class="pa-0">
              <v-data-table
                :headers="complex.headers"
                :search="search"
                :items="complex.items"
                :rows-per-page-items="[10, 25, 50, { text: 'All', value: -1 }]"
                class="elevation-1"
                item-key="name"
              >
                <template slot="items" slot-scope="props">
                  <td>{{ props.index }}</td>
                  <td>{{ props.item.name }}</td>
                  <td>{{ props.item.nik }}</td>
                  <td>{{ props.item.kategori }}</td>
                  <td>{{ props.item.tmpt_lahir }}</td>
                  <td>{{ props.item.jenis_kelamin }}</td>
                  <td>{{ props.item.alamat }}</td>
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
import { Items as Users } from "@/api/pendaftaran/pasien";

export default {
  layout: "pendaftaran/dashboard",
  data() {
    return {
      search: "",
      complex: {
        headers: [
          {
            text: "No",
            // value: 'avatar'
          },
          {
            text: "Name",
            value: "name",
          },
          {
            text: "NIK",
            value: "nik",
          },
          {
            text: "Kategori",
            value: "kategori",
          },
          {
            text: "Tempat Lahir",
            value: "tmpt_lahir",
          },
          {
            text: "Jenis Kelamin",
            value: "jenis_kelamin",
          },
          {
            text: "Alamat",
            value: "alamat",
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
