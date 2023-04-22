import prisma from '../../../lib/prisma'

export default async function handler(req,res){
    if(req.method==="GET"){
        const data=await prisma.venue.findMany({
            where:{Available:true}
        })
        res.status(200).json(data)
    }else{
        throw new Error(`THE HTTP METHOD ${req.method} is not avaialble right now `)
    }
}