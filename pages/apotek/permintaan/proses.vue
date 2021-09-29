<template>
  <div id="page-text-fields">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <v-widget title="Permintaan Obat">
            <div slot="widget-content">
              <v-container>
                <v-layout row>
                  <v-flex xs3>
                    <v-subheader>Data Pasien</v-subheader>
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                          name="input-3"
                          label="No. Keram Medis"
                          value="RM-21091108-157"
                          disabled
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field
                          name="input-3"
                          label="Tanggal Periksa"
                          value="2021-09-11"
                          disabled
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-layout row>
                          <v-flex xs12>
                            <v-text-field
                              name="input-3"
                              label="Nama Pasien"
                              value="Santiago"
                              disabled
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field
                              name="input-3"
                              label="Nama Dokter"
                              value="Maejuki"
                              disabled
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field
                          name="input-5"
                          label="Alamat"
                          value="Jalan Banyar No. 78 Desa Kupu Kec. Dukuh Turi Kab. Tegal"
                          multi-line
                          disabled
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs9>
                    <!-- <v-subheader>Data Obat</v-subheader>
                    <v-layout row>
                      <v-flex xs12>
                        <v-text class="pa-0">Horizontal</v-text>
                        <v-radio-group v-model="radio2" :mandatory="false" row>
                          <v-radio
                            label="Tebus Semua"
                            value="radio-1"
                            color="teal"
                            chaked
                          ></v-radio>
                          <v-radio
                            label="Tebus Sebagian"
                            value="radio-2"
                            color="info"
                          ></v-radio>
                          <v-radio
                            label="Tanpa Tebus"
                            value="radio-3"
                            color="pink"
                          ></v-radio>
                        </v-radio-group>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs6>
                        <v-text-field
                          name="input-3"
                          label="No. Keram Medis"
                          value="RM-21091108-157"
                          disabled
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs6>
                        <v-text-field
                          name="input-3"
                          label="Tanggal Periksa"
                          value="2021-09-11"
                          disabled
                        ></v-text-field>
                      </v-flex>
                    </v-layout> -->
                    <v-card>
                      <v-toolbar card dense color="transparent">
                        <v-toolbar-title><h4>Data Obat</h4></v-toolbar-title>
                        <v-spacer></v-spacer>
                        <!-- <v-btn icon>
                          <v-icon>more_vert</v-icon>
                        </v-btn> -->
                        <div class="basic">
                          <v-subheader class="pa-0"></v-subheader>
                          <v-radio-group
                            v-model="radio2"
                            :mandatory="false"
                            row
                          >
                            <v-radio
                              label="Tebus Semua"
                              value="radio-1"
                              color="teal"
                            ></v-radio>
                            <v-radio
                              label="Tebus Sebagian"
                              value="radio-2"
                              color="info"
                            ></v-radio>
                            <v-radio
                              label="Tanpa Tebus"
                              value="radio-3"
                              color="pink"
                            ></v-radio>
                          </v-radio-group>
                        </div>
                      </v-toolbar>
                      <v-divider></v-divider>
                      <v-card-text class="pa-0">
                        <template>
                          <v-data-table
                            :headers="headers"
                            :items="items"
                            hide-actions
                            class="elevation-0 table-striped"
                          >
                            <template slot="items" slot-scope="props">
                              <td>{{ props.item.obat }}</td>
                              <td class="text-xs-left">
                                {{ props.item.aturan_minum }}
                              </td>
                              <td class="text-xs-left">
                                {{ props.item.dosis }}
                              </td>
                              <td class="text-xs-left">
                                <v-text-field
                                  type="number"
                                  v-model.number="props.item.jumlah"
                                  disabled
                                ></v-text-field>
                              </td>
                              <td class="text-xs-left">
                                <v-chip
                                  label
                                  small
                                  :color="getColorByStatus(props.item.status)"
                                  text-color="white"
                                  >{{ props.item.status }}</v-chip
                                >
                              </td>
                              <td class="text-xs-left">
                                {{ props.item.catatan }}
                              </td>
                            </template>
                          </v-data-table>
                        </template>
                        <v-divider></v-divider>
                      </v-card-text>
                    </v-card>
                    <v-btn color="success" outline="">Simpan</v-btn>
                    <v-btn color="info" outline="" disabled
                      >Cetak Resep Kosong?Tak Ditebus</v-btn
                    >
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
          </v-widget>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VWidget from "@/components/VWidget";
import items from "@/api/apotek/permiintaan_obat";

export default {
  layout: "apotek/dashboard",

  components: {
    VWidget,
  },
  data() {
    return {
      radio2:'radio-1',
      headers: [
        { text: "Nama Obar", value: "obat", align: "center" },
        { text: "Aturan Minum", value: "aturan_minum", align: "center" },
        { text: "Dosis", value: "dosis", align: "center" },
        { text: "Jumlah", value: "jumlah", align: "center" },
        { text: "Status Tebus", value: "status", align: "center" },
        { text: "Catatan             ", value: "Catatan", align: "center" },
      ],
      items: items,
      colors: {
        processing: "blue",
        sent: "red",
        Tebus: "green",
      },
    };
  },
  computed: {},
  methods: {
    getColorByStatus(status) {
      return this.colors[status];
    },
  },
};
</script>
