<template>
  <div id="page-statistic">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <a href="/apotek/obat">
            <v-btn class="warning">Kembali</v-btn>
          </a>
        </v-flex>
        <v-flex sm12>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              id="input-group-1"
              label="Nama Obat:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.nama"
                type="text"
                placeholder="Masukan Nama Obat"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Jenis Obat:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.jenis"
                placeholder="Masukan Jenis Obat"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Stok Obat:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.stok"
                placeholder="Masukan Stok Obat"
                type="number"
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
  layout: "apotek/dashboard",
  data() {
    return {
      form: {
        nama: "",
        jenis: "",
        stok: "",
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
      this.form.nama = "";
      this.form.jenis = "";
      this.form.stok = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>