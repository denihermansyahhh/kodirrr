<template>
  <div id="page-text-fields">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <v-widget title="Detail Tagihan Pembayaran">
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
                      <v-flex xs12>
                        Status / Hasil Pemeriksaan :
                        <v-chip color="green" text-color="white" small
                          >Rawat Jalan</v-chip
                        >
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
                        <v-toolbar-title
                          ><h4>Data Pelayanan</h4></v-toolbar-title
                        >
                        <v-spacer></v-spacer>
                        <!-- <v-btn icon>
                          <v-icon>more_vert</v-icon>
                        </v-btn> -->
                      </v-toolbar>
                      <v-divider></v-divider>
                      <v-card-text class="">
                        <template>
                          <v-layout row>
                            <v-flex xs4>
                              <div class="title primary--text text--darken-1">
                                Pemeriksaan
                              </div>
                            </v-flex>
                            <v-flex xs6>
                              <div class="title">: Pemeriksaan Umum</div>
                            </v-flex>
                          </v-layout>
                          <v-layout row>
                            <v-flex xs4>
                              <div class="title primary--text text--darken-1">
                                Biaya Admin
                              </div>
                            </v-flex>
                            <v-flex xs6>
                              <div class="title">: Rp. 15.000</div>
                            </v-flex>
                          </v-layout>
                          <v-layout row>
                            <v-flex xs4>
                              <div class="title primary--text text--darken-1">
                                Biaya Pemeriksaan
                              </div>
                            </v-flex>
                            <v-flex xs6>
                              <div class="title">: Rp. 40.000</div>
                            </v-flex>
                          </v-layout>
                          <v-layout row>
                            <v-flex xs4>
                              <strong>: </strong>
                              <div class="title primary--text text--darken-1">
                                Status Penebusan Obat
                              </div>
                            </v-flex>
                            <v-flex xs6>
                              <v-chip color="green" text-color="white" small
                                >Tebus Semua</v-chip
                              >
                            </v-flex>
                          </v-layout>
                          <v-layout row>
                            <v-flex xs4>
                              <div class="title primary--text text--darken-1">
                                Farmasi
                              </div>
                            </v-flex>
                            <v-flex xs6>
                              <div class="title">
                                : Obat Kepala Pusing<small align="right">
                                  (Rp.20.000)</small
                                >
                              </div>
                              <div class="title">
                                : Obat Penurun Panas<small align="right">
                                  (Rp.10.000)</small
                                >
                              </div>
                              <div class="title">
                                : Vitamin<small align="right">
                                  (Rp.50.000)</small
                                >
                              </div>
                            </v-flex>
                          </v-layout>
                          <v-layout row>
                            <v-flex xs4>
                              <div class="title primary--text text--darken-1">
                                Total Farmasi
                              </div>
                            </v-flex>
                            <v-flex xs6>
                              <div class="title">: Rp. 80.000</div>
                            </v-flex>
                          </v-layout>
                          <v-layout row>
                            <v-flex xs4>
                              <div class="title primary--text text--darken-1">
                                Total Pembayaran
                              </div>
                            </v-flex>
                            <v-flex xs6>
                              <div class="title">: Rp. 135.000</div>
                            </v-flex>
                          </v-layout>
                          <v-layout row>
                            <v-flex xs4>
                              <div class="title primary--text text--darken-1">
                                Uang Diterima
                              </div>
                            </v-flex>
                            <v-flex xs6
                              ><h4>Rp.</h4>
                              <v-text-field
                                type="number"
                                value="200.000"
                              ></v-text-field>
                            </v-flex>
                          </v-layout>
                          <v-layout row>
                            <v-flex xs4>
                              <div class="title primary--text text--darken-1">
                                Total Kembalian
                              </div>
                            </v-flex>
                            <v-flex xs6>
                              <div class="title">: Rp. 135.000</div>
                              <v-divider></v-divider>
                              <v-btn
                                color="info"
                                depressed
                                outline
                                align="center"
                                >Bayar Dan Print</v-btn
                              >
                            </v-flex>
                          </v-layout>
                        </template>
                        <v-divider></v-divider>
                      </v-card-text>
                    </v-card>
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
  layout: "kasir/dashboard",

  components: {
    VWidget,
  },
  data() {
    return {
      headers: [
        { text: "Layanan", value: "layanan", align: "center", sortable: false },
        {
          text: "Keterangan",
          value: "keterangan",
          align: "center",
          sortable: false,
        },
      ],
      items: items,
      colors: {
        processing: "blue",
        sent: "red",
        delivered: "green",
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
