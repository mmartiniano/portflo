export interface IFinalContent {
    type: string,
    source?: string,
    value?: Record<string, string>
}

export interface ISubContent {
    title: Record<string, string>,
    expand?: boolean,
    subtitle?: Record<string, string>,
    description?: Record<string, string>,
    tags?: string[],
    thumbnail: string,
    content: IFinalContent[]
}

export interface IPage {
    title: Record<string, string>,
    columns: string,
    content?: Record<string, ISubContent>
}

export interface IContent {
    language: string[],
    username: Record<string, string>,
    icon: {
        source: string,
        round: boolean
    },
    social: Record<string, string>,
    footer: {
        content: Record<string, string>[],
        socialText: Record<string, string>
    },
    empty: Record<string, string>,
    page: Record<string, IPage>
}