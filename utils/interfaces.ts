import { isTupleTypeNode } from "typescript";

type VenueProperties = {
    Name: string,
    Image?: string,
    Description: string,
    Available: string,
    Location: string,
    Capacity?: number,
    price?: number,
    id: string,
    map(arg0: (venue: VenueProperties) => JSX.Element): import("react").ReactNode,

}
export interface CardProps {
    length: any;
    venue: {
        map(arg0: (place: any) => JSX.Element): import("react").ReactNode;
        Name: string,
        Image?: string,
        Description: string,
        Available: string,
        Location: string,
        Capacity?: number,
        price?: number,
        id: string
    },


    venues: {
        Name: string,
        Image?: string,
        Description: string,
        Available: string,
        Location: string,
        Capacity?: number,
        price?: number,
        id: string
        map(arg0: (venue: VenueProperties) => JSX.Element): import("react").ReactNode,
    },
    venuesToRender: {
        map(arg0: (venue: VenueProperties) => JSX.Element): import("react").ReactNode,
        Name: string,
        Image?: string,
        Description: string,
        Available: string,
        Location: string,
        Capacity?: number,
        price?: number,
        id: string
    },
}

export interface VenueProps {
    data: {
        Name: string,
        Image?: string,
        Description: string,
        Available: string,
        Location: string,
        Capacity?: number,
        price?: number,
        id: string,
        map(arg0: (venue: VenueProperties) => JSX.Element): import("react").ReactNode,

    }
}


export const fetcher = (...args: Parameters<typeof fetch>) => {
    return fetch(...args).then((res) => res.json())
}