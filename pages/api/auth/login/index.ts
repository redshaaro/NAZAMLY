import prisma from "@/lib/prisma";
import compare from '../../../../lib/compare'

// login
export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const user = await prisma.user.findUnique({
                where: { UserName: req.body.UserName },
            });

            if (!user) {
                return res.status(401).json({ message: "Invalid UserName" });
            }
            const validate = await compare(req.body.PassWord, user.PassWord)
            if (validate) {
                return res.status(200).json(user)
            } else {
                return res.status(500).json({ message: "Wrong Password" });
            }






        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
