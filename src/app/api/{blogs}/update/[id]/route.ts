import dbConnect from "@/lib/dbConnect";
import Blog from "@/models/blog.model";
import { NextRequest, NextResponse } from "next/server";

interface ApiResponse {
    data?: any;
    message?: string;
    error?: string;
}
export async function PUT({ id }: { id: string }, request: NextRequest) {
    try {
        await dbConnect();

        const { title, description, image, category, author, isPublished, isDraft } = await request.json();

        if (!title || !description || !image || !category) {
            const response: ApiResponse = { error: 'Please fill all the fields' };
            return new NextResponse(JSON.stringify(response), { status: 400 });
        }

        const updatedBlog = await Blog.findByIdAndUpdate(id, {
            title,
            description,
            image,
            category,
            author,
            isPublished,
            isDraft
        }, { new: true });

        if (!updatedBlog) {
            const response: ApiResponse = { error: 'Blog post not found' };
            return new NextResponse(JSON.stringify(response), { status: 404 });
        }

        const response: ApiResponse = { message: 'Blog post updated successfully', data: updatedBlog };
        return new NextResponse(JSON.stringify(response), { status: 200 });
    
    } 
    
    catch (error) {
        console.error('Error deleting blog post:', error);
        const response: ApiResponse = { error: 'Something went wrong while updating blog post' };
        return new NextResponse(JSON.stringify(response), { status: 500 });
    }
}