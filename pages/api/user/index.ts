import prisma from "@/lib/prisma";
export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body
        

        const user = await prisma.user.create({
            data: data
        })
        res.status(200).json(user)

    }

}
