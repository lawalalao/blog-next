import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

// join the current working directory, and the posts folder
const postsDirectory = join(process.cwd(), 'posts')

export function getPosts() {
    // read the file names of each post, which are also the slugs (e.g. it returns 'hello-world.md')
    const fileNames = fs.readdirSync(postsDirectory)

    // map over posts
    const postsData = fileNames.map(fileName => {
        const postID = fileName.replace(/\.md$/, '')
        const fullPath = join(postsDirectory, fileName)
        // read the content of each file (post), and return its content
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        // use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        return {
            postID,
            ...matterResult.data
        }
    })

    return postsData.sort((post1, post2) => {
        return post1 < post2 ? 1 : -1
    })
}

export function getPostsIDs() {
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map(fileName => {
        return {
            params: {
                postID: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getPostData(postID) {
    const fullPath = join(postsDirectory, `${postID}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHTML = processedContent.toString()

    return {
        postID,
        contentHTML,
        ...matterResult.data
    }
}