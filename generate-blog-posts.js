const fs = require('fs')
const data = require('./src/data/blog/posts.json')

const { posts } = data.db[0].data

const getMeta = post => {
  const keysFilter = ([key]) => key !== 'markdown' && key !== 'html'
  const entries = Object.entries(post).filter(keysFilter)
  return `---\n${entries
    .map(([key, value]) => `${key}: '${value}'`)
    .join('\n')}\n---`
}

posts
  .filter(post => !post.page)
  .forEach(post => {
    const data = `${getMeta(post)}\n${post.markdown}`

    fs.writeFile(`./src/data/blog/${post.slug}.md`, data, err => {
      if (err) return console.log(err)
      console.log(`${post.slug}.md was saved.`)
    })
  })
