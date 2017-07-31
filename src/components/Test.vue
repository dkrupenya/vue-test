<template>
  <test class="hello"
         :message="message">
    asdfasdfasdf dfg
  </test>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({
    components: {
      hello: TestComponent
    }
  })
  export default class TestComponent extends Vue {
    public message = 'Hello there, Vue works!'
  }

</script>

<style lang="scss">

  .hello {
    display: block;
    font-size: 16px;
  }
</style>
