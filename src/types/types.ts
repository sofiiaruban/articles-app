export interface ArticleItem {
    id: number,
    featured?: boolean,
    title: string,
    url: string,
    imageUrl: string,
    newsSite: string,
    summary: string,
    publishedAt: string,
    launches: Array<{
        id: string,
        provider: string
    }>
    events: Array<{
        id: string,
        provider: string
    }>     
}
export interface ArticleItems extends Array<ArticleItem>{}

export interface IdState {
    value: number,
}
export interface SearchData {
    
}