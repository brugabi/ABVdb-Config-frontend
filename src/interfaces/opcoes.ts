export type OptionsType = "link" | "modal" | "rota"

export interface OpcaoI {
    title: string,
    img: string,
    type: OptionsType,
    action?: string
}