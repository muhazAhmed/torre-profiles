import { API } from "@/config/server";
import axios from "axios";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { query, limit = 10 } = body;
        if (!query) {
            return Response.json([], { status: 200 });
        }

        const response = await axios.post(
            API.search,
            {
                query,
                limit,
                identityType: "person",
            },
            { headers: { "Content-Type": "application/json" } }
        );

        const results = response.data;
        return Response.json([results]);
    } catch (err: any) {
        console.error("API /torre/search error:", err?.response?.data ?? err.message);
        return Response.json(
            { error: "Failed to fetch search results", details: err?.response?.data ?? err?.message },
            { status: 500 }
        );
    }
}
