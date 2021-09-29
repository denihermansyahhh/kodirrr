<template>
  <div id="pageTable">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h3>Rujukan Rawat Inap</h3>
        </v-flex>

        <v-flex lg12>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            
            <b-form-group
              id="input-group-1"
              label="Nama Pasien :"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.nama_pasien"
                type="text"
                placeholder="Nama Pasien"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="Usia :"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.usia"
                type="text"
                placeholder="Usia Pasien"
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
                placeholder="Alamat"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="Hasil Pemeriksaan :"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.hasil_pemeriksaan"
                type="text"
                placeholder="Hasil Pemeriksaan Sementara"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="Catatan :"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.catatan"
                type="text"
                required
              ></b-form-input>
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