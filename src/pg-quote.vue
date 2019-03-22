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
