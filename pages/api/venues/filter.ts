import prisma from "@/lib/prisma";


export default async function handler(req, res) {
    const data = await prisma.venue.findMany({
        where: { Available: true },
    });
    const { location, price, Available } = req.query;


    if (location) {
        const data = await prisma.venue.findMany({
            where: { Location: location },
        });
        return res.status(200).json(data)


    }
    if (price) {
        const data = await prisma.venue.findMany({
            where: { price: price },
        });
        return res.status(200).json(data)

    }
    if (Available) {
        const data = await prisma.venue.findMany({
            where: { Available: Available },
        });
        return res.status(200).json(data)



    }








    res.status(200).json(data)


}