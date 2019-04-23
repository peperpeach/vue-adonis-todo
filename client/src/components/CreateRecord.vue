<template>
  <v-layout row wrap class="mt-4">
    <v-flex xs-9>
      <v-text-field
        :placeholder="placeholder"
        :value="value"
        @input="$emit('onInput', $event)"
        @keyup.enter="$emit('create')"
      ></v-text-field>
    </v-flex>
    <v-flex xs-3 class="text-xs-right">
      <v-btn
        dark
        class="mt-2"
        color="green"
        @click="$emit('create')"
      >
        <v-icon class="mr-2">add_circle</v-icon>
        Create
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: [
    'placeholder',
    'value',
  ],
};
</script>

<style>

</style>
