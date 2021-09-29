<template>
  <div id="pageTable">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h3>Daftar Pemeriksaan</h3>
        </v-flex>
        <v-flex sm12>
          <a href="/pendaftaran/daftar_pemeriksaan/tambah">
            <v-btn class="primary"> Tambah Data</v-btn></a
          >
        </v-flex>
        <v-flex lg12>
          <v-card>
            <v-toolbar card color="white">
              <v-text-field
                flat
                solo
                prepend-icon="search"
                placeholder="Ketik Nama Pasien"
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
                :rows-per-page-items="[10,25,50,{text:'All','value':-1}]"
                class="elevation-1"
                item-key="name"
                
              >
                <template slot="items" slot-scope="props">
                  <td>{{props.index}}</td>
                  <td>{{ props.item.name }}</td>
                  <td>{{ props.item.nik }}</td>
                  <td>{{ props.item.tgl_periksa }}</td>
                  <td>{{ props.item.jadwal_dokter }}</td>
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
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import {Items as Users} from '@/api/pendaftaran/pasien';

  export default {
    layout: "pendaftaran/dashboard",
    data() {
      return {
        search: '',
        complex: {
   
          headers: [
            {
              text: 'No',
              // value: 'avatar'
            },
            {
              text: 'Name',
              value: 'name'
            },
            {
              text: 'NIK',
              value: 'nik'
            },
            {
              text: 'Tanggal Periksa',
              value: 'tgl_periksa'
            },
            {
              text: 'Action',
              value: ''
            },
          ],
          items: Users
        },
      };
    }
  };
</script>
