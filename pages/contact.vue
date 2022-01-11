<template>
  <v-container>
    <h1 class="title text-h3 text-center">Contact</h1>
    <v-divider class="my-5" />
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form name="contact" method="POST" netlify>
        <input type="hidden" name="form-name" value="contact" />
        <validation-provider v-slot="{ errors }" name="Name" rules="required">
          <v-text-field
            v-model="name"
            label="Name"
            outlined
            dense
            type="text"
            name="name"
            :error-messages="errors"
          />
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="MailAddress"
          rules="required|email"
        >
          <v-text-field
            v-model="email"
            label="MailAddress"
            :error-messages="errors"
            outlined
            dense
            type="email"
            name="email"
          />
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="Message"
          rules="required"
        >
          <v-textarea
            v-model="message"
            label="Message"
            outlined
            dense
            name="message"
            :error-messages="errors"
          />
        </validation-provider>
        <div class="my-5" data-netlify-recaptcha="true"></div>
        <v-btn type="submit" :disabled="invalid">Send</v-btn>
      </form>
    </validation-observer>
  </v-container>
</template>

<script>
import {
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from 'vee-validate'
setInteractionMode('eager')
export default {
  name: 'ContactPage',
  components: { ValidationProvider, ValidationObserver },
  data: () => ({
    name: '',
    email: '',
    message: '',
  }),
}
</script>

<style scoped>
h1.title {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Audrey, sans-serif !important;
  font-weight: 100;
}
</style>
