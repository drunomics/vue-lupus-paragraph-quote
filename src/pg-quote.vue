<template>
  <div class="paragraph paragraph--quote">
    <div 
      class="paragraph__field-quote" 
      v-html="fieldText"
      v-if="hasText"
    >
    </div>
    <slot name="field-text"></slot>
  </div>
</template>
<script>
  export default {
    name: 'PgQuote',
    props: {
      dataFieldText: { type: String, default: () => '' },
    },
    computed: {
      hasText() {
        return this.dataFieldText !== '';
      },
    }
  };
</script>
