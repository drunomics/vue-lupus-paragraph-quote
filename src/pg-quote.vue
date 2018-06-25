<template>
  <div class="paragraph paragraph--quote">
    <div class="paragraph__field-quote">
      {{ fieldText }}
      <slot/>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'PgQuote',
    props: {
      fieldText: { type: String, default: () => '' },
    },
  };
</script>
