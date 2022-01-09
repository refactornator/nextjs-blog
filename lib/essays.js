import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export const essaysDirectory = path.join(process.cwd(), 'essays')

export const getSourceOfFile = (fileName) => {
  return fs.readFileSync(path.join(essaysDirectory, fileName))
}

export const getAllEssays = () => {
  return fs
    .readdirSync(essaysDirectory)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getSourceOfFile(fileName)
      const slug = fileName.replace(/\.mdx?$/, '')
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
  const fullPath = path.join(essaysDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}
