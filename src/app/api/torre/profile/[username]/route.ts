import { API } from "@/config/server";
import axios from "axios";
import { NextRequest } from "next/server";

export async function GET(
    _req: NextRequest,
    context: { params: Promise<{ username: string }> }
) {
    try {
        const { username } = await context.params; // 👈 await here

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
