import prisma from "@/lib/prisma";
import hash from "@/lib/hash";
export default async function handler(req, res) {
    //SIGNUP
    if (req.method === "POST") {
        //getting the data from body
        const data = req.body
        //encrypting ths password
        data.PassWord = await hash(data.PassWord)



        const user = await prisma.user.create({
            data: data


        })
        res.status(200).json(user)

    }

}
