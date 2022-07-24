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
    content: IFinalContent[]
}

export interface IPage {
    title: Record<string, string>,
    url: string,
    style?: string,
    content: ISubContent[]
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
    page: IPage[]
}