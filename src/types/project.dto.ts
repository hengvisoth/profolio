export interface projectType {
    id: number;
    code: string;
    title: string;
    role:string;
    company?: string;
    outcome?: string;
    caseStudy?: {
        problem: string;
        architecture: string;
        challenge: string;
        result: string;
    };
    startDate: string;
    endDate: string;
    art?: 'pos' | 'plate' | 'face' | 'delivery' | 'shop';
    highlights?: {
        icon: string;
        label: string;
    }[];
    short_desc: string;
    description: string;
    technologies: {
        name: string;
        icon: any;
    }[];
    imageUrl: string;
    gitHubRepo: string;
    demo: string;
    screenshots: string[];
}