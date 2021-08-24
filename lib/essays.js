import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

export const ESSAYS_PATH = path.join(process.cwd(), 'essays')

process.env.ESBUILD_BINARY_PATH = path.join(
  process.cwd(),
  'node_modules',
  'esbuild',
  'bin',
  'esbuild'
)

const doesFileExist = (fileName) => {
  return fs.existsSync(path.join(ESSAYS_PATH, fileName))
}

export const getSourceOfFile = (fileName) => {
  return fs.readFileSync(path.join(ESSAYS_PATH, fileName))
}

export const getAllEssays = () => {
  return fs
    .readdirSync(ESSAYS_PATH)
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

export const getSingleEssay = async (slug) => {
  let ext = '.mdx'
  try {
    if (!doesFileExist(slug + ext)) {
      ext = '.md'
    }
  } catch (err) {
    console.error(err)
  }
  const source = getSourceOfFile(slug + ext)

  const { code, frontmatter } = await bundleMDX(source, {
    cwd: ESSAYS_PATH,
  })

  return {
    frontmatter,
    code,
  }
}
