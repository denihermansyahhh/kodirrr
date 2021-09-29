<template>
  <div id="pageTable">
    <v-container grid-list-xl fluid>
      <v-widget title="Laporan Data Pasien" class="mt-3">
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
                    label="Picker in menu"
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
              <v-spacer></v-spacer>
              <v-flex xs11 sm5>
                <v-dialog
                  ref="dialog"
                  persistent
                  v-model="modal"
                  lazy
                  full-width
                  width="290px"
                  :return-value.sync="date"
                >
                  <v-text-field
                    slot="activator"
                    label="Picker in dialog"
                    v-model="date"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="date" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="modal = false"
                      >Cancel</v-btn
                    >
                    <v-btn flat color="primary" @click="$refs.dialog.save(date)"
                      >OK</v-btn
                    >
                  </v-date-picker>
                </v-dialog>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </v-widget>
      <v-layout row wrap>
        <v-flex sm12>
          <h3>Data Pasien</h3>
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
                  <!-- <td>
                    <v-avatar size="32">
                      <img :src="props.item.avatar" alt="">
                    </v-avatar>
                  </td> -->
                  <td>{{ props.item.name }}</td>
                  <td>{{ props.item.email }}</td>
                  <td>{{ props.item.phone }}</td>
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
import { Items as Users } from "@/api/admin/dokter/data";

export default {
  layout: "admin/dashboard",
  components: {
    VWidget,
  },
  data() {
    return {
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
          //   {
          //     text: "Photo",
          //     value: "avatar",
          //   },
          {
            text: "Name",
            value: "name",
          },
          {
            text: "Email",
            value: "email",
          },
          {
            text: "Phone",
            value: "phone",
          },
        ],
        items: Users,
      },
    };
  },
  mounted() {
    this.arrayEvents = [...Array(6)].map(() => {
      const day = Math.floor(Math.random() * 30);
      const d = new Date();
      d.setDate(day);
      return d.toISOString().substr(0, 10);
    });
  },

  methods: {
    functionEvents(date) {
      const [, , day] = date.split("-");
      return parseInt(day, 10) % 3 === 0;
    },
  },
};
</script>

<style scoped>
</style>
