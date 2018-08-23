<template>
  <div class="paragraph paragraph--quote">
    <div class="paragraph__field-quote" v-html="fieldText">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'PgQuote',
    props: {
      dataFieldText: { type: String, default: () => '' },
    },
    computed: {
      fieldText() {
        return JSON.parse(this.dataFieldText);
      },
    },
  };
</script>
