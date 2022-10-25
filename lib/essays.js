import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

export const essaysDirectory = path.join(process.cwd(), 'essays')

export const getFileContent = (fileName) => {
  return fs.readFileSync(path.join(essaysDirectory, fileName), "utf-8")
}

export const getAllEssays = () => {
  return fs
    .readdirSync(essaysDirectory)
    .filter((path) => /\.mdx$/.test(path))
    .map((fileName) => {
      const source = getFileContent(fileName)
      const slug = fileName.replace(/\.mdx$/, '')
      const { data } = matter(source)
      return {
        frontmatter: data,
        slug: slug,
      }
    })
    .sort((a, b) => {
      if (a.frontmatter.date < b.frontmatter.date) {
        return 1
      } else {
        return -1
      }
    })
}

export const getEssayData = async (id) => {
  const source = getFileContent(`${id}.mdx`)

  const { code, frontmatter } = await bundleMDX({
    source: source,
  })

  return {
    frontmatter,
    code,
  }
}
