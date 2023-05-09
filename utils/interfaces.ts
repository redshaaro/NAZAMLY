export interface CardProps{
    venue:{
        Name:string
        Image?:string
        Description:string
        Available:string
        Location:string
        Capacity?:number
        price?:number
        id:string
    }[]
}

export interface VenueProps{
    data:{
        Name:string
        Image?:string
        Description:string
        Available:string
        Location:string
        Capacity?:number
        price?:number
        id:string
    }[]
}

export  const fetcher = (...args) => fetch(...args).then((res) => res.json())