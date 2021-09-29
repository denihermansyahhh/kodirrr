<template>
  <div id="page-statistic">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <!-- linear statistic  end -->
        <v-flex sm12>
          <h3>Daftar Penebusan Obat Pasien</h3>
          <v-layout row wrap>
            <v-flex sm4 lg4></v-flex>
            <v-flex sm2 lg2>
              <v-select
                label="Status Penebusan"
                :items="countries"
                v-model="e7"
                autocomplete
                item-text="country"
                item-value="abbr"
              ></v-select>
            </v-flex>
            <v-flex sm2 lg2>
              <v-menu
                class="pr-2"
                ref="statDate"
                lazy
                :close-on-content-click="false"
                v-model="startDateMenu"
                transition="scale-transition"
                offset-y
                full-width
                :nudge-bottom="-22"
                max-width="290px"
                :return-value.sync="startDate"
              >
                <v-text-field
                  slot="activator"
                  label="Tanggal Mulai"
                  v-model="startDate"
                  append-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="startDate" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="startDateMenu = false"
                    >Batal</v-btn
                  >
                  <v-btn
                    flat
                    color="primary"
                    @click="$refs.statDate.save(startDate)"
                    >Terapkan</v-btn
                  >
                </v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex sm2 lg2>
              <v-menu
                ref="endDate"
                lazy
                class="pr-2"
                :close-on-content-click="false"
                v-model="endDateMenu"
                transition="scale-transition"
                offset-y
                full-width
                :nudge-bottom="-22"
                min-width="290px"
                :return-value.sync="endDate"
              >
                <v-text-field
                  slot="activator"
                  label="Tanggal Akhir"
                  v-model="endDate"
                  append-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="endDate" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="endDateMenu = false"
                    >Batal</v-btn
                  >
                  <v-btn
                    flat
                    color="primary"
                    @click="$refs.endDate.save(endDate)"
                    >Terapkan</v-btn
                  >
                </v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex sm2 lg2>
              <v-btn color="info" >
                <v-icon class="pr-2">filter_list</v-icon>Tampilkan</v-btn
              >
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex lg12>
          <v-card>
            <v-toolbar card color="white">
              <v-text-field
                flat
                solo
                prepend-icon="search"
                placeholder="Tuliskan Nama Pasien"
                v-model="search"
                hide-details
                class="hidden-sm-and-down"
              ></v-text-field>
              <!-- <v-btn icon>
                <v-icon>filter_list</v-icon>
              </v-btn> -->
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
                <!-- select-all
                v-model="complex.selected" -->
                <template slot="items" slot-scope="props">
                  <td>{{ props.item.no_rm }}</td>
                  <td>{{ props.item.name }}</td>
                  <td>{{ props.item.alamat }}</td>
                  <td>{{ props.item.tanggal_periksa }}</td>
                  <td class="text-xs-left">
                    <v-chip
                      small
                      :color="props.item.color"
                      text-color="white"
                      >{{ props.item.status_tebus }}</v-chip
                    >
                  </td>
                  <td>{{ props.item.dokter }}</td>
                  <td>
                    <!-- <v-btn depressed outline icon fab dark color="success" small>
                      <v-icon>done_outline</v-icon>
                    </v-btn> -->
                    <v-btn
                      color="info"
                      depressed
                      outline
                      small
                      round
                      to="/apotek/permintaan/detail_tebus_obat"
                      >Detail</v-btn
                    >
                  </td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- <h3>
      Tabel inforasi stok obat , antrian dengan status pemeriksaan<br />
      Tabel pelayanan apoteker tersebut dalam 1 harı,( bisa edit Bila status
      pembayaran belum terkonfirmasi)
    </h3> -->
  </div>
</template>

<script>
import API from "@/api";
import EChart from "@/components/chart/echart";
import MiniStatistic from "@/components/widgets/statistic/MiniStatistic";
import PostListCard from "@/components/widgets/card/PostListCard";
import ProfileCard from "@/components/widgets/card/ProfileCard";
import PostSingleCard from "@/components/widgets/card/PostSingleCard";
import WeatherCard from "@/components/widgets/card/WeatherCard";
import PlainTable from "@/components/widgets/list/PlainTable";
import PlainTableOrder from "@/components/widgets/list/PlainTableOrder";
import VWidget from "@/components/VWidget";
import Material from "vuetify/es5/util/colors";
import VCircle from "@/components/circle/VCircle";
import BoxChart from "@/components/widgets/chart/BoxChart";
import ChatWindow from "@/components/chat/ChatWindow";
import CircleStatistic from "@/components/widgets/statistic/CircleStatistic";
import LinearStatistic from "@/components/widgets/statistic/LinearStatistic";

import { Items as Users } from "@/api/apotek/riwayat_tebus_obat";

export default {
  layout: "apotek/dashboard",
  components: {
    MiniStatistic,
  },
  data() {
    return {
      title: null,
      valid: true,
      date: null,
      startDateMenu: false,
      startDate: null,
      startTimeMenu: false,
      startTime: null,
      endDateMenu: false,
      endDate: null,
      endTimeMenu: false,
      endTime: null,
      modal: false,
      search: "",
      complex: {
        headers: [
          {
            text: "No. rekam medis",
            value: "no_rm",
            align: "center",
          },
          {
            text: "Nama",
            value: "nama",
            align: "center",
          },
          {
            text: "Alamat",
            value: "alamat",
            align: "center",
          },
          {
            text: "Tanggal periksa",
            value: "tanggal_periksa",
            align: "center",
          },
          {
            text: "Status Penebusan",
            value: "status_penebusan",
            align: "center",
          },
          {
            text: "Nama dokter",
            value: "dokter",
            align: "center",
          },
          {
            text: "Tindakan",
            value: "",
            align: "center",
          },
        ],
        items: Users,
      },
    };
  },
};
</script>