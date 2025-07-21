export interface projectType {
    id: number;
    code: string;
    title: string;
    role:string;
    startDate: string;
    endDate: string;
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