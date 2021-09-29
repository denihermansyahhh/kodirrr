<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <!-- mini statistic start -->
        <v-flex lg4 sm6 xs12>
          <mini-statistic
            icon="people_alt"
            title="23"
            sub-title="Total Pasien Terdaftar"
            color="blue darken-2"
          >
          </mini-statistic>
        </v-flex>
        <v-flex lg4 sm6 xs12>
          <mini-statistic
            icon="people_alt"
            title="17"
            sub-title="Pasien Dalam Antrian"
            color="yellow darken-2"
          >
          </mini-statistic>
        </v-flex>
        <v-flex lg4 sm6 xs12>
          <mini-statistic
            icon="people_alt"
            title="3"
            sub-title="Pasien Selesai"
            color="green darken-1"
          >
          </mini-statistic>
        </v-flex>
        <!-- mini statistic  end -->
        <!-- Tabel -->
        <v-flex sm12>
          <h3>Jadwal Dokter</h3>
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
                <template slot="items" slot-scope="props">
                  <td>{{ props.index }}</td>
                  <td>{{ props.item.id }}</td>
                  <td>{{ props.item.name }}</td>
                  <td>{{ props.item.hari }}</td>
                  <td>{{ props.item.jam }}</td>
                  <td>{{ props.item.jenis_kelamin }}</td>
                  <td>{{ props.item.alamat }}</td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-flex>
        <!-- end tabel -->
      </v-layout>
    </v-container>
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

import { Items as Users } from "@/api/dokter/jadwal";

export default {
  layout: "dokter/dashboard",
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
            // value: 'avatar'
          },
          {
            text: "ID Dokter",
            value: "id",
          },
          {
            text: "Nama",
            value: "name",
          },
          {
            text: "Hari",
            value: "hari",
          },
          {
            text: "Jam",
            value: "jam",
          },
          {
            text: "Jenis Kelamin",
            value: "jenis_kelamin",
          },
          {
            text: "Alamat",
            value: "alamat",
          },
        ],
        items: Users,
      },
    };
  },
};
</script>