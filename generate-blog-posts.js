const fs = require('fs')
const data = require('./src/data/blog/posts.json')

const { posts, users } = data.db[0].data

const authorKeys = ['name', 'slug', 'image', 'cover', 'facebook', 'twitter']

// Converts "null" to null, "false" to false etc. Everything is returned as a string wrapped in "s
const convertType = value => {
  try {
    return JSON.parse(value)
  } catch (e) {
    return JSON.stringify(value.replace('/content/', ''))
  }
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
    .map(([key, value]) => `${key}: ${convertType(value)}`)
    .join('\n')}\n${authorEntries
    .map(([key, value]) => `author_${key}: ${convertType(value)}`)
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
