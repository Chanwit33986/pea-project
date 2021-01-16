<template>
  <div>
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col col lg="6">
          <center><h2>Create your account</h2></center>
          <br />
          <b-form>
            <b-form-group
              id="input-group-1"
              label="Username"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="text"
                placeholder=""
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="Email Address"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder=""
                required
              ></b-form-input>
            </b-form-group>
            <b-form @submit.stop.prevent>
              <label for="text-password">Password</label>
              <b-form-input
                type="password"
                id="text-password"
                aria-describedby="password-help-block"
              ></b-form-input>
              <b-form-text id="password-help-block">
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </b-form-text>
            </b-form>

            <b-button
              type="submit"
              variant="primary"
              block
              style="margin-top:10px;"
              size="lg"
              >Create Account</b-button
            >
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      form: {
        email: "",
        name: ""
      }
    };
  },
  methods: {}
};
</script>
