type VenueProperties={
    Name:string,
    Image?:string,
    Description:string,
    Available:string,
    Location:string,
    Capacity?:number,
    price?:number,
    id:string
}
export interface CardProps{
    length: any;
    venue:{
        map(arg0: (place: any) => JSX.Element): import("react").ReactNode;
        Name:string,
        Image?:string,
        Description:string,
        Available:string,
        Location:string,
        Capacity?:number,
        price?:number,
        id:string
    },
    venues:{
        map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
        Name:string,
        Image?:string,
        Description:string,
        Available:string,
        Location:string,
        Capacity?:number,
        price?:number,
        id:string
    },
    venuesToRender:{
        map(arg0: (venue: VenueProperties) => JSX.Element): import("react").ReactNode,
        Name:string,
        Image?:string,
        Description:string,
        Available:string,
        Location:string,
        Capacity?:number,
        price?:number,
        id:string
    },
}

export interface VenueProps{
    data:{
        Name:string,
        Image?:string,
        Description:string,
        Available:string,
        Location:string,
        Capacity?:number,
        price?:number,
        id:string
    }
}


export  const fetcher = (...args) => fetch(...args).then((res) => res.json())