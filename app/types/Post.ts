export type PostType = {
    id: string,
    title: string
    updatedAt?: string
    user: {
        email: string
        id: string
        name: String
        image: string
    }
    Comment: {
        createAt?: string
        id: string
        postId: string
        userId: string
        user: {
            email: string
            id: string
            name: String
            image: string
        }
    }[]
}