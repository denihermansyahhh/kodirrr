<template>
  <div id="pageTable">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h3>Data Pemeriksaan</h3>
        </v-flex>

        <v-flex lg12>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              id="input-group-1"
              label="No. Antrian :"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.no_antrian"
                type="number"
                placeholder="012"
                disabled
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="Nama Pasien :"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.nama"
                type="text"
                placeholder="Masukan Nama Pasien"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="Alamat :"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.alamat"
                type="text"
                placeholder="Masukan Alamat"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="Poli :" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.poli"
                type="text"
                placeholder="Poli Umum"
                disabled
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="Keluhan :"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.keluhan"
                type="text"
                placeholder="Masukan Keluhan"
                required
                multiline
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="Tindakan :"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.tindakan"
                type="text"
                placeholder="Masukan tindakan"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="Resep Obat :"
              label-for="input-1"
            >
              <v-layout row wrap>
                <v-flex xs3>
                  <b-form-input
                    id="input-1"
                    v-model="form.obat"
                    type="text"
                    placeholder="Masukan Nama Obat"
                    required
                  ></b-form-input>
                </v-flex>

                <v-flex xs2>
                  <b-form-input
                    id="input-2"
                    v-model="form.jumlah"
                    type="text"
                    placeholder="Dosis Obat"
                    required
                  ></b-form-input>
                </v-flex>

                <v-flex xs2>
                  <b-form-input
                    id="input-2"
                    v-model="form.jumlah"
                    type="text"
                    placeholder="Aturan Minum"
                    required
                  ></b-form-input>
                </v-flex>

                <v-flex xs2>
                  <b-form-input
                    id="input-2"
                    v-model="form.jumlah"
                    type="text"
                    placeholder="jumlah Obat"
                    required
                  ></b-form-input>
                </v-flex>

                <v-flex xs2>
                  <b-form-input
                    id="input-2"
                    v-model="form.catatan"
                    type="text"
                    placeholder="Catatan"
                    required
                  ></b-form-input>
                </v-flex>

                <v-btn flat icon color="blue">
                  <v-icon>add</v-icon>
                </v-btn>
              </v-layout>
            </b-form-group>

            <b-button type="submit" variant="primary">Kirim ke Apotek</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: "dokter/dashboard",
  data() {
    return {
      form: {
        nama: "",
        no_hp: "",
        nip: "",
        tmp_lahir: "",
        tgl_lahir: "",
        umur: "",
        goldar: "",
        kp: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.photo = "";
      this.form.no_hp = "";
      this.form.nip = "";
      this.form.tmp_lahir = "";
      this.form.tgl_lahir = "";
      this.form.umur = "";
      this.form.goldar = "";
      this.form.kp = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>