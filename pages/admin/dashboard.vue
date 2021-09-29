<template>
  <div id="page-statistic">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg4 sm6 xs12>
          <mini-statistic
            icon="people_alt"
            title="1+"
            sub-title="Permintaan Surat Rujukan"
            color="yellow darken-2"
          >
          </mini-statistic>
        </v-flex>
        <v-flex lg4 sm6 xs12>
          <mini-statistic
            icon="people_alt"
            title="1"
            sub-title="Pasien Mendapat Rujukan"
            color="red darken-2"
          >
          </mini-statistic>
        </v-flex>
        <v-flex lg4 sm6 xs12>
          <mini-statistic
            icon="people_alt"
            title="7"
            sub-title="Pasien Rawat Jalan"
            color="blue darken-1"
          >
          </mini-statistic>
        </v-flex>
        <v-flex sm12>
          <h3>Permintaan Surat Rujukan</h3>
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
                <!-- select-all
                v-model="complex.selected" -->
                <template slot="items" slot-scope="props">
                  <td>{{ props.item.no_rm }}</td>
                  <td>{{ props.item.name }}</td>
                  <td>{{ props.item.alamat }}</td>
                  <td>{{ props.item.tanggal_periksa }}</td>
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
                      to="/admin/rujukan/proses"
                      >Proses</v-btn
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
    Statistiek pemeriksaan dan data passen <br>
		statistik data karyawan dan bagian kerja <br>
		statistik data ruangan dan fungsinya <br>
		statistik data obat stok pejualan dan masuk <br>
		statistik estimasi data pendapatan klinik dan pengeluaran klinik bulan ini <br>
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

import {Items as Users} from '@/api/admin/rujukan//data';


export default {
    layout: 'admin/dashboard',
    components: {
      MiniStatistic,
    },
    data() {
      return {
        search: '',
        complex: {
   
          headers: [
            {
              text: 'No. rekam medis',
              value: 'no_rm'
            },
            {
              text: 'Nama',
              value: 'nama'
            },
            {
              text: 'Alamat',
              value: 'alamat'
            },
            {
              text: 'Tanggal periksa',
              value: 'tanggal_periksa'
            },
            {
              text: 'Nama dokter',
              value: 'dokter'
            },
            {
              text: 'Tindakan',
              value: ''
            },
          ],
          items: Users
        },
      };
    }
  };</script>
