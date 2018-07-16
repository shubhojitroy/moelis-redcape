<template>
  <section class="section">
    <div class="container is-fullhd template-horizontal">
      <div class="content">
        <h2 class="subtitle">
          LOGIN FORM
        </h2>
        <div class="box">
          <h4 class="is-4">
            Enter your priority code:
          </h4>
          <form novalidate>
            <b-field label>Priority Code
              <b-input placeholder="Code" size="default" expanded=true>
                <!-- <option
                    v-for="option in data"
                    :value="option.id"
                    :key="option.id">
                    {{ option.user.first_name }}
                </option> -->
              </b-input>
            </b-field>
            <!-- <selected-country /> -->
            <div class="space"></div>
            <div class="control">
              <router-link to="/rego-details" class="button is-primary">Submit</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="loading" v-show="loading"></div>
  </section>
</template>

<script>
export default {
  name: 'LoginPage',
};
</script>

<style lang='scss' scoped>

</style>
