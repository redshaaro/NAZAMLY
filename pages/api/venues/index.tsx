import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  console.log(req.params);
  if (req.method === "GET") {
    const data = await prisma.venue.findMany({
      where: { Available: true },
    });
    res.status(200).json(data);
  } else if (req.method === "POST") {
    const { Name, Description, Image, Capacity, price, Location, Available } =
      req.body;
    const result = await prisma.venue.create({
      data: {
        Name: Name,
        Description: Description,
        Image: Image,
        Capacity: Capacity,
        price: price,
        Location: Location,
        Available: Available,
      },
    });
    res.status(200).json(result);
  }
}
