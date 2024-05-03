import dbConnect from "@/lib/dbConnect";
import Blog from "@/models/blog.model";
import { NextRequest, NextResponse } from "next/server";

interface ApiResponse {
    data?: any;
    message?: string;
    error?: string;
}
export async function DELETE({id}: { id: string }, request: NextRequest) {
    try {
        await dbConnect();

        const blog = await Blog.findByIdAndDelete(id);

        if (!blog) {
            const response: ApiResponse = { error: 'Blog post not found' };
            return new NextResponse(JSON.stringify(response), { status: 404 });
        }

        const response: ApiResponse = { message: 'Blog post deleted successfully', data: blog };
        return new NextResponse(JSON.stringify(response), { status: 200 });
    } catch (error) {
        console.error('Error deleting blog post:', error);
        const response: ApiResponse = { error: 'Something went wrong while deleting blog post' };
        return new NextResponse(JSON.stringify(response), { status: 500 });
    }
}