<template>
  <div class="paragraph paragraph--quote">
    <blockquote class="content">
      <header
        v-if="$slots.title"
        class="title"
      >
        <slot name="title" />
      </header>
      <section class="quote">
        <slot :name="$slots.quote ? 'quote': 'default'" />
      </section>
      <footer
        v-if="$slots.author"
        class="author"
      >
        <slot name="author" />
      </footer>
    </blockquote>
  </div>
</template>
<script>
  export default {
    name: 'PgQuote'
  };
</script>
<style lang="scss" scoped>
.paragraph--quote {
  .content {
    padding: 1em 2em;
    border-left: 3px solid grey;
  }

  .title {
    h1,
    h2,
    h3,
    h4,
    h5 {
      margin-top: 0;
    }
  }

  .author {
    font-weight: bold;

    &::before {
      content: '\2014\00a0';
    }
  }
}
</style>
