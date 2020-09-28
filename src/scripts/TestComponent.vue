<template>
  <div>
    {{ text }}
    <img src="@/images/together.jpg" alt="together" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class TestComponent extends Vue {
  text = 'Simple component';
}
</script>
<style lang="scss" scoped>
div {
  background: #d9d9d9;
}
</style>
