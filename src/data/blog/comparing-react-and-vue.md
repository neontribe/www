---
id: 80
uuid: 'cd7bd15a-4c6d-4d5a-821a-ae665f242d86'
title: 'Comparing React and Vue'
slug: 'comparing-react-and-vue'
image: null
featured: 0
page: 0
status: 'published'
language: 'en_US'
meta_title: null
meta_description: null
author_id: 25
created_at: '2017-12-04T08:33:56.000Z'
created_by: 25
updated_at: '2017-12-04T10:17:15.000Z'
updated_by: 1
published_at: '2017-12-04T09:20:01.000Z'
published_by: 25
visibility: 'public'
mobiledoc: null
amp: null
author_name: 'Steve Lee'
author_slug: 'steve-lee'
author_image: 'images/2017/11/R-S.png'
author_cover: null
author_facebook: null
author_twitter: null
---

As part of Neontribe's ongoing technology evaluation for projects, Nick and myself recently performed a comparative review of React and Vue, looking at both technical and community aspects. This post provides a very brief overview of what we discovered.

It's very clear that both projects are broadly similar and are closely monitoring each other, so that features that appear in one often also appear in the other. For example, SPA build support is available in Vue's Nuxt and will soon be appearing for React too. Given that, YMMV depending on when you read this post.

# Current differences

<table>
<tr><th>React</th><th>Vue<th></tr>
<tr><td><i>tl;dr - code based with many choices, unlikely to hit technical, HR or market limits</I></td><td><I>tl;dr; declarative, more opinionated/structured, easier onramp and potential faster dev<I></td></tr>
<tr><td>Massive, mature ecosystem provides many learning resources, strong support and wide component choices</td><td>Smaller ecosystem, newer but growing fast and looks sustainable. Relatively opinionated means less choice</td></tr>
<tr><td>Everything is just Javascript</td><td>Declarative HTML based - Single File Components</td></tr>
<tr><td>View is Render functions or JSX</td><td>Optional view templates with DSL - somewhat simpler for common cases</td></tr>
<tr><td>Enforced unary state flow within a component</td><td>Reactive state updates and optional 2-way binding</td></tr>
<tr><td>Many non-core CSS options</td><td>Scoped CSS directly supported</td></tr>
<tr><td>Possibly better for v big apps</td><td>Low barrier to entry, eg using Nuxt framework for SPAs</td></tr>
<tr><td>Working native app support</td><td>Faster (sometimes - largely due to snabbdom)</td></tr>
</table>

# Similarities

- Components
- Render functions or JSX for view
- State and event handling, HTTP library agnostic
- ES6+ or TypeScript
- SSR
- Dev tooling - eg webpack with HMR
- Deployment sizes
- Support for PWA
- Low churn in core elements
- MIT License

# Useful resources

- Obviously biased, but well considered with input from React community - [vue docs comparison](https://vuejs.org/v2/guide/comparison.html)
- A good high level comparison - [Angular vs. React vs. Vue: A 2017 comparison](https://medium.com/unicorn-supplies/angular-vs-react-vs-vue-a-2017-comparison-c5c52d620176)
- Comparison of all the components typically used in a SPA - [Can Vue Fight for the Throne with React?](https://rubygarage.org/blog/vuejs-vs-react-battle)
- ToDoMVC - [React](https://github.com/tastejs/todomvc/tree/gh-pages/examples/react) and [Vue](https://github.com/tastejs/todomvc/tree/gh-pages/examples/vue)
- Realworld App - [React/Redux](https://github.com/gothinkster/react-redux-realworld-example-app) and [Vue/Vuex (incomplete)](https://github.com/vilsbole/realworld-vue)
