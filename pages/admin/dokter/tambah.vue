<template>
  <div id="page-statistic">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <a href="/admin/dokter">
          <v-flex sm12>
            <v-btn class="warning">Kembali</v-btn>
          </v-flex>
        </a>
        <v-flex sm12>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              id="input-group-1"
              label="Photo Dokter:"
              label-for="input-1"
            >
              <b-form-file
                v-model="form.photo"
                :state="Boolean(photo)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
                accept="image/jpeg, image/png, image/gif, image/jpg"
              ></b-form-file>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="Nama Dokter:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.nama"
                type="text"
                placeholder="Masukan Nama Dokter"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Email:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.email"
                placeholder="Masukan Email"
                type="email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Nomer Handphone:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.no_hp"
                placeholder="Nomer Handphone"
                type="number"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Spesialis:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.spesialis"
                placeholder="Spesialis Dokter"
                type="text"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Praktek:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.praktek"
                placeholder="Jadwal Praktek Dokter"
                type="text"
                required
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
          <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
          </b-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: "admin/dashboard",
  data() {
    return {
      form: {
        photo: "",
        nama: "",
        email: "",
        no_hp: "",
        spesialis: "",
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
      this.form.nama = "";
      this.form.email = "";
      this.form.no_hp = "";
      this.form.spesialis = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>