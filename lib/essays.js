import fs from 'fs'
import path from 'path'
import remark from 'remark'
import matter from 'gray-matter'

const essaysDirectory = path.join(process.cwd(), 'essays')

export function getSortedEssayData() {
  // Get file names under /essays
  const fileNames = fs.readdirSync(essaysDirectory)
  const allEssaysData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(essaysDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the essay metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    }
  })
  // Sort posts by date
  return allEssaysData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllEssayIds() {
  const fileNames = fs.readdirSync(essaysDirectory)

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export async function getEssayData(id) {
  const fullPath = path.join(essaysDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the essay metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(require('remark-html'))
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}
