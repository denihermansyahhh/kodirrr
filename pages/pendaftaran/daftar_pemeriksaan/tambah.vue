<template>
  <div id="page-statistic">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <a href="/pendaftaran/daftar_pemeriksaan">
          <v-flex sm12>
            <v-btn class="warning">Kembali</v-btn>
          </v-flex>
        </a>
        <v-flex sm12>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              id="input-group-2"
              label="Nama :"
              label-for="input-2"
            >
              <b-form-select v-model="form.kp" class="mb-3" required>
                <b-form-select-option value="nama"
                  >Dessie</b-form-select-option
                >
                <b-form-select-option value="nama"
                  >Leonardo</b-form-select-option
                >
              </b-form-select>
            </b-form-group>

            <b-form-group id="input-group-2" label="NIK:" label-for="input-2">
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
              label="Tanggal Periksa:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.tgl_periksa"
                placeholder="Pilih Tanggal Periksa"
                type="date"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Jadwal Dokter :"
              label-for="input-2"
            >
              <b-form-select v-model="form.jadwal_dokter" class="mb-3" required>
                <b-form-select-option value="jadwal_dokter"
                  >Senin</b-form-select-option
                >
                <b-form-select-option value="jadwal_dokter"
                  >Selasa</b-form-select-option
                >
              </b-form-select>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Nama Dokter :"
              label-for="input-2"
            >
              <b-form-select v-model="form.nama_dokter" class="mb-3" required>
                <b-form-select-option value="dokter"
                  >dr. Tommi Kurniawan</b-form-select-option
                >
                <b-form-select-option value="dokter"
                  >dr. Bella Koffa</b-form-select-option
                >
              </b-form-select>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Jam Dokter :"
              label-for="input-2"
            >
              <b-form-select v-model="form.jam_dokter" class="mb-3" required>
                <b-form-select-option value="jam_dokter"
                  >08.00</b-form-select-option
                >
                <b-form-select-option value="dokter"
                  >13.00</b-form-select-option
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
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>