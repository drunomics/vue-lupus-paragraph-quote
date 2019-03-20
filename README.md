# vue-lupus-paragraph-quote
Vue slider component.



## Install

via npm:
`npm install https://github.com/drunomics/vue-lupus-paragraph-quote.git`


import it:

```
import PgQuote from 'vue-lupus-paragraph-quote';

Vue.component('pg-quote', PgQuote);
```

## Slots
You can use the following slots

- `title` ( optional )
  A title.
- `content` ( default )
  All other content.
- `author` ( optional )
  Quote author.

## Example
```
<paragraph-quote>
  <h1 slot="title">Title</h1>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  <span slot="author">Quote author</span>
</paragraph-quote>
```
