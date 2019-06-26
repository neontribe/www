const fs = require('fs')
const data = require('../ghost-source/blog-posts.json')

const { posts, users } = data.db[0].data

const authorKeys = ['name', 'slug', 'image', 'cover', 'facebook', 'twitter']

const convertToRelativeImports = value => {
  if (typeof value === 'string') {
    return JSON.stringify(
      value.replace(/\(\/content\//g, '(').replace(/"\/content\//g, '"')
    )
  }
  return value
}

const getAuthorEntries = author =>
  Object.entries(author).filter(([key]) => authorKeys.includes(key))
const getPostEntries = post =>
  Object.entries(post).filter(([key]) => key !== 'markdown' && key !== 'html')

// Creates frontmatter for all keys except 'markdown' and 'html'
const createFrontmatter = post => {
  const author = users.find(user => user.id === post.author_id)
  const authorEntries = getAuthorEntries(author)

  const postEntries = getPostEntries(post)

  return `---\n${postEntries
    .map(([key, value]) => `${key}: ${convertToRelativeImports(value)}`)
    .join('\n')}\n${authorEntries
    .map(([key, value]) => `author_${key}: ${convertToRelativeImports(value)}`)
    .join('\n')}\n---`
}

posts
  .filter(post => !post.page)
  .filter(post => post.status === 'published')
  .forEach(post => {
    const data = `${createFrontmatter(post)}\n${post.markdown}`

    fs.writeFile(`./src/data/blog/${post.slug}.md`, data, err => {
      if (err) return console.log(err)
      console.log(`${post.slug}.md was saved.`)
    })
  })
