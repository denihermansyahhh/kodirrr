<template>
<div id="page-statistic">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <!-- mini statistic start -->
        <v-flex lg4 sm6 xs12>
          <mini-statistic
            icon="medical_services"
            title="2"
            sub-title="Hampir Habis"
            color="green darken-2">
          </mini-statistic>
        </v-flex>
        <v-flex lg4 sm6 xs12>
          <mini-statistic
            icon="medical_services"
            title="2"
            sub-title="Hampir Kadaluarsa"
            color="blue darken-2">
          </mini-statistic>
        </v-flex>
        <v-flex lg4 sm6 xs12>
          <mini-statistic
            icon="medical_services"
            title="7"
            sub-title="Stok Obat Habis" 
            color="red darken-2">
          </mini-statistic>
        </v-flex>
        <v-flex lg4 sm6 xs12>
          <mini-statistic
            icon="medical_services"
            title="7"
            sub-title="Obat Kadaluarsa" 
            color="yellow darken-2">
          </mini-statistic>
        </v-flex>
        <!-- linear statistic  end -->
        <v-flex sm12>
          <h3>Pelayanan Apotek Hari Ini</h3>
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
                :rows-per-page-items="[5,10,25,50,{text:'All','value':-1}]"
                class="elevation-1"
                item-key="name"
              >
                              <!-- select-all
                v-model="complex.selected" -->
                <template slot="items" slot-scope="props">
                  <!-- <td>
                    <v-checkbox
                      primary
                      hide-details
                      v-model="props.selected"
                    ></v-checkbox>
                  </td>
                  <td>
                    <v-avatar size="32">
                      <img :src="props.item.avatar" alt="">
                    </v-avatar>
                  </td> -->
                  <td>{{ props.index }}</td>
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
  
  import MiniStatistic from '@/components/widgets/statistic/MiniStatistic';
  import {Items as Users} from '@/api/user';

  export default {
    layout: 'apotek/dashboard',
    components: {
      MiniStatistic,
    },
    data() {
      return {
        search: '',
        complex: {
          selected: [],
          headers: [
            // {
            //   text: 'Avatar',
            //   value: 'avatar'
            // },
            {
              text: 'Waktu',
              value: 'waktu'
            },
            {
              text: 'No. Rekam Medis',
              value: 'no_rekam_medis'
            },
            {
              text: 'Nama',
              value: 'name'
            },
            {
              text: 'Alamat',
              value: 'alamat'
            },
          ],
          items: Users
        }
      };
    }
  };
</script>
<style scoped>

</style>