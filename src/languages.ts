export type SupportedLanguage = 'python' | 'nodejs' | 'bash' | 'java' | 'prolog' | 'go' | 'cpp' | 'php';

export interface LanguageData {
    names: {
        display: string;
        code: SupportedLanguage;
        image: string;
    }
    extension: string;
    entrypoint: string;
}

export const languageData = [
    {
        names: {
            display: 'Python',
            code: 'python',
            image: 'python',
        },
        extension: 'py',
        entrypoint: 'main.py',
    },
    {
        names: {
            display: 'Node.JS',
            code: 'nodejs',
            image: 'node',
        },
        extension: 'js',
        entrypoint: 'index.js',
    },
    {
        names: {
            display: 'Bash',
            code: 'bash',
            image: 'bash',
        },
        extension: 'sh',
        entrypoint: 'main.sh',
    },
    {
        names: {
            display: 'Java',
            code: 'java',
            image: 'java',
        },
        extension: 'java',
        entrypoint: 'Main.java',
    },
    {
        names: {
            display: 'Prolog',
            code: 'prolog',
            image: 'prolog',
        },
        extension: 'pl',
        entrypoint: 'main.pl',
    },
    {
        names: {
            display: 'Golang',
            code: 'go',
            image: 'go',
        },
        extension: 'go',
        entrypoint: 'main.go',
    },
    {
        names: {
            display: 'C++',
            code: 'cpp',
            image: 'cpp',
        },
        extension: 'cpp',
        entrypoint: 'main.cpp',
    },
    {
        names: {
            display: 'PHP',
            code: 'php',
            image: 'php',
        },
        extension: 'php',
        entrypoint: 'index.php',
    },
] as LanguageData[];

export function isValidLanguage(
    language: any,
    by: 'code',
): language is SupportedLanguage;
export function isValidLanguage(
    language: any,
    by: 'code' | 'image' | 'display',
): boolean {
    return languageData
        .map(e => e.names[by])
        .includes(language);
}
