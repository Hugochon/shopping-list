import { addToDB, getCollection } from "../../scripts/interact_firebase";

export default async function handler(req, res) {
    const { method } = req;

    switch (method) {
        case "GET":
            const myCollection = await getCollection();
            res.status(200).json(myCollection)
            break;
        case "POST":
            const { list, username,listName } = req.body;         
            addToDB({"username" : username , "list" : list,"listName" :listName });
            res.status(200).json({ success: true })
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
}