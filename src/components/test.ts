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
