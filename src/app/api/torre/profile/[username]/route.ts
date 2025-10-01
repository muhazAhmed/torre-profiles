import { API } from "@/config/server";
import axios from "axios";

export async function GET(
    _: Request,
    { params }: { params: { username: string } }
) {
    try {
        const { username } = params;

        const { data } = await axios.get(API.profile(username), {
            headers: { "Content-Type": "application/json" },
        });

        return Response.json(data);
    } catch (error: any) {
        return Response.json(
            { error: "Failed to fetch profile", details: error.message },
            { status: 500 }
        );
    }
}
