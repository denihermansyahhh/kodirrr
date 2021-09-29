<template>
  <div id="page-statistic">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <a href="/pendaftaran/daftar_pasien">
          <v-flex sm12>
            <v-btn class="warning">Kembali</v-btn>
          </v-flex>
        </a>
        <v-flex sm12>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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

            <b-form-group id="input-group-2" label="NIK :" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.nik"
                placeholder="Masukan NIK"
                type="number"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Tempat Lahir :"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.tmp_lahir"
                placeholder="Masukan Tempat Lahir"
                type="text"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Tanggal Lahir :"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.tgl_lahir"
                placeholder="Pilih Tanggal Lahir"
                type="date"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Alamat lengkap :"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.alamat"
                placeholder="Masukan Alamat Lengkap"
                type="text"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Jenis Kelamin :"
              label-for="input-2"
            >
              <b-form-select v-model="form.jk" class="mb-3" required>
                <b-form-select-option value="Laki-laki"
                  >Laki-laki</b-form-select-option
                >
                <b-form-select-option value="Perempuan"
                  >Perempuan</b-form-select-option
                >
              </b-form-select>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Kategori :"
              label-for="input-2"
            >
              <b-form-select v-model="form.kp" class="mb-3" required>
                <b-form-select-option value="bpjs"
                  >BPJS Kesehatan</b-form-select-option
                >
                <b-form-select-option value="pribadi"
                  >Pribadi</b-form-select-option
                >
              </b-form-select>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Agama :"
              label-for="input-2"
            >
              <b-form-select v-model="form.agama" class="mb-3" placeholder="Masukan Agama Anda">
                <b-form-select-option value="islam"
                  >Islam</b-form-select-option
                >
                <b-form-select-option value="hindu"
                  >Hindu</b-form-select-option
                >
                <b-form-select-option value="budha"
                  >Budha</b-form-select-option
                >
                <b-form-select-option value="kristen"
                  >Kristen</b-form-select-option
                >
                <b-form-select-option value="katholik"
                  >Katholik</b-form-select-option
                >
              </b-form-select>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Pekerjaan :"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.pekerjaan"
                placeholder="Masukan Pekerjaan Anda"
                type="text"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="No. Handphone:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.no_hp"
                placeholder="Masukan No Handphone"
                type="number"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Usia" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.usia"
                placeholder="Masukan Usia"
                type="number"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Golongan Darah"
              label-for="input-2"
            >
              <b-form-select v-model="form.goldar" class="mb-3">
                <b-form-select-option value="A">A</b-form-select-option>
                <b-form-select-option value="AB">AB</b-form-select-option>
                <b-form-select-option value="B">B</b-form-select-option>
                <b-form-select-option value="O">O</b-form-select-option>
                <b-form-select-option value="Belum Di Ketahui"
                  >Belum Di Ketahui</b-form-select-option
                >
              </b-form-select>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: "pendaftaran/dashboard",
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
