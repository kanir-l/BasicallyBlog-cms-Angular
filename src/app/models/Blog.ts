export class Blog {
    id: number
    title: string
    created: number
    userId: number
    posts: []

    constructor(id: number, title: string, created: number, userId: number, posts: [] ) {
        this.id = id
        this.title = title
        this.created = created
        this.userId = userId
        this.posts = posts
    }
}