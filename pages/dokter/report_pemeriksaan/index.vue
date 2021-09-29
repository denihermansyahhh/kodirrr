<template>
  <div id="pageTable">
    <v-container grid-list-xl fluid>
      <v-widget title="Laporan Data Pemeriksaan" class="mt-3">
        <div slot="widget-content">
          <v-container>
            <v-layout row wrap>
              <v-flex xs11 sm5>
                <v-menu
                  ref="menu"
                  lazy
                  :close-on-content-click="false"
                  v-model="menu"
                  transition="scale-transition"
                  offset-y
                  full-width
                  :nudge-right="40"
                  min-width="290px"
                  :return-value.sync="date"
                >
                  <v-text-field
                    slot="activator"
                    label="Periode"
                    v-model="date"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="menu = false"
                      >Cancel</v-btn
                    >
                    <v-btn flat color="primary" @click="$refs.menu.save(date)"
                      >OK</v-btn
                    >
                  </v-date-picker>
                </v-menu>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </v-widget>
      <v-layout row wrap>
        <v-flex sm12>
          <h3>Data Pemeriksaan</h3>
        </v-flex>
        <v-flex lg12>
          <v-card>
            <div>
              <b-button variant="outline-danger">Export PDF</b-button>
              <b-button variant="outline-success">Export Excel</b-button>
              <b-button variant="outline-primary">Print</b-button>
            </div>
            <!-- <v-toolbar card color="white">
              <v-text-field
                flat
                solo
                prepend-icon="search"
                placeholder="Ketik Nama Dokter"
                v-model="search"
                hide-details
                class="hidden-sm-and-down"
              ></v-text-field>
              <v-btn icon>
                <v-icon>filter_list</v-icon>
              </v-btn>
            </v-toolbar> -->
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
                  <td>{{ props.item.alamat }}</td>
                  <td>{{ props.item.poli }}</td>
                  <td>{{ props.item.keluhan }}</td>
                  <td>{{ props.item.tindakan }}</td>
                  <td>{{ props.item.resep_obat }}</td>
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
import VWidget from "@/components/VWidget";
import { Items as Users } from "@/api/dokter/data_pasien";

export default {
  layout: "dokter/dashboard",
  components: {
    VWidget,
  },
  data() {
    return {
      search: "",
      picker: null,
      picker2: null,
      //
      arrayEvents: null,
      date1: null,
      date2: null,
      //
      date: null,
      menu: false,
      modal: false,

      complex: {
        headers: [
          {
            text: "No",
            // value: "avatar",
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
            text: "Poli",
            value: "poli",
          },
          {
            text: "Keluhan",
            value: "keluhan",
          },
          {
            text: "Tindakan",
            value: "tindakan",
          },
          {
            text: "Resep Obat",
            value: "resep_obat",
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

