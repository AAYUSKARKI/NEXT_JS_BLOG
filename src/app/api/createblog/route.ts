import dbConnect from "@/lib/dbConnect";
import Blog from "@/models/blog.model";
import { NextResponse , NextRequest} from 'next/server'

export async function POST(request:NextRequest) {
  console.log(request.method);
  console.log(request.body);
  const body=await request.json()
  console.log('body',body)
  console.log('hi hello');
  await dbConnect();
  try {

    const { title, description, category, author, isPublished, isDraft } = await request.json()

    if (!title || !description || !category) {
      return NextResponse.json({message:'all fields are required', success:true}, {status:400})
    }

    const blog = await Blog.create({
      title, description, category, author, isPublished, isDraft
    });

    const createdBlog = await Blog.findById(blog._id);

    if (!createdBlog) {
      return NextResponse.json({message:'unsucessssss', success:true, createdBlog}, {status:404})
    }

    return NextResponse.json({message:'blog created successful', success:true, createdBlog}, {status:200})
  } catch (error) {
    console.error(error);
    return NextResponse.json({message:'something wrong', success:true}, {status:500})
  }
}

