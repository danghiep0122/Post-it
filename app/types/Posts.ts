export type PostType = {
    title: string
    id: string,
    createAt: string
    user: {
        name: String
        image: string
    }
    Comment?: {
        createAt: string
        id: string
        postId: string
        userId: string
    }[]
}