export interface SpAdminLocaleText {
    languageCode: string;
    key: string;
    text?: string;
    enText: string;
    created?: string;
    grammaticalKey?: string;
    count: number;
}

export interface ALanguage {
    id: number;
    name: string;
    nativeName: string;
    code: string;
    speakers: number;
}
