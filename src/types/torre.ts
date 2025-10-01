// Search Stream API Response
export interface TorreSearchResult {
    ardaId: number;
    name: string;
    comparableName?: string;
    username?: string | null;
    professionalHeadline?: string | null;
    imageUrl?: string | null;
    publicId?: string;
    organizationId?: string;
    status?: string;
    verified?: boolean;
    completion?: number;
    [key: string]: any;
}

// Profile Bio API Response
export interface TorreProfile {
    person: {
        name: string;
        picture?: string;
        professionalHeadline: string;
        location?: string;
        summaryOfBio?: string;
        links?: { name: string; address: string }[];
    };
    strengths?: {
        id: string;
        name: string;
        proficiency: string;
        weight: number;
    }[];
    experiences?: {
        id: string;
        category: string;
        name: string;
        organizations?: { name: string }[];
        fromMonth?: number;
        fromYear?: number;
        toMonth?: number;
        toYear?: number;
        responsibilities?: string[];
    }[];
    education?: {
        id: string;
        name: string;
        organizations?: { name: string }[];
        fromYear?: number;
        toYear?: number;
    }[];
}

// Generic Error Shape
export interface ApiError {
    error: string;
    details?: string;
}
