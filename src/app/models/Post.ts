export class Post {
    id: number
    title: string
    content: string
    created: number
    modified: number
    blogId: number
    comments: []

    constructor(id: number, title: string, content: string, created: number, modified: number, blogId: number, comments:[]) {
        this.id = id
        this.title = title
        this.content = content
        this.created = created
        this.modified = modified
        this.blogId = blogId
        this.comments = comments
    }
}