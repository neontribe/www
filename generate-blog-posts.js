const fs = require('fs')
const data = require('./src/data/blog/posts.json')

const { posts } = data.db[0].data

// Converts "null" to null, "false" to false etc. Everything is returned as a string wrapped in "s
const convertType = value => {
  try {
    return new Function('return ' + value + ';')()
  } catch (e) {
    return JSON.stringify(value)
  }
}

// Creats frontmatter for all keys except 'markdown' and 'html'
const createFrontmatter = post => {
  const keysFilter = ([key]) => key !== 'markdown' && key !== 'html'
  const entries = Object.entries(post).filter(keysFilter)
  return `---\n${entries
    .map(([key, value]) => `${key}: ${convertType(value)}`)
    .join('\n')}\n---`
}

posts
  .filter(post => !post.page)
  .forEach(post => {
    const data = `${createFrontmatter(post)}\n${post.markdown}`

    fs.writeFile(`./src/data/blog/${post.slug}.md`, data, err => {
      if (err) return console.log(err)
      console.log(`${post.slug}.md was saved.`)
    })
  })
