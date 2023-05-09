import prisma from '../../../lib/prisma'
export default async function handle(req, res) {
    const id = req.query.id
    const { Name, Description, Image, Capacity, price, Location, Available } =
        req.body;



    if (req.method === "PUT") {
        const venues = await prisma.venue.update({
            where: { id: id },
            data: {
                Name: Name || undefined,
                Description: Description || undefined,
                Image: Image || undefined,
                Capacity: Capacity || undefined,
                price: price || undefined,
                Location: Location || undefined,
                Available: Available,
            },


        })


        res.status(200).json(venues)




    } else if (req.method === "DELETE") {
        const venue = await prisma.venue.delete({
            where: { id: id }

        })
        res.status(200).json(venue)
    }
    else if (req.method === "GET") {
        const venue = await prisma.venue.findMany({
            where: { id: id }
        })
        res.status(200).json(venue)
    }


}