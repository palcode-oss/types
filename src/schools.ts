export type SchoolAuthService = 'microsoft.com' | 'google.com';

export interface SchoolAuth {
    domains: string[];
    service: SchoolAuthService;
    tenant: string;
    setupToken?: string;
}

export interface SchoolBilling {
    customerId: string;
}

export interface SchoolResources {
    RAM: number;
    CPUs: number;
}

export interface SchoolFeatures {
    examMode: boolean;
}

export interface School {
    id: string;
    name: string;
    auth: SchoolAuth;
    billing: SchoolBilling;
    resources: SchoolResources;
    features: SchoolFeatures;
}
