import dbConnect from "@/lib/dbConnect";
import Blog from "@/models/blog.model";
import { NextRequest, NextResponse } from "next/server";

interface ApiResponse {
    data?: any;
    error?: string;
}

export async function GET(request: NextRequest) {
    try {
        await dbConnect();

        const blogs = await Blog.find({ isDraft: false });

        if (!blogs) {
            const response: ApiResponse = { error: 'No published blog posts found' };
            return new NextResponse(JSON.stringify(response), { status: 404 });
        }

        const response: ApiResponse = { data: blogs };
        return new NextResponse(JSON.stringify(response), { status: 200 });
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        const response: ApiResponse = { error: 'Something went wrong while fetching blog posts' };
        return new NextResponse(JSON.stringify(response), { status: 500 });
    }
}
