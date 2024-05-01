import dbConnect from "@/lib/dbConnect";
import Blog from "@/models/blog.model";
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/'); // Specify the directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
      const fileName = uuidv4() + '-' + file.originalname; // Generate a unique filename
      cb(null, fileName);
    }
  });
  
  // Multer instance
  const upload = multer({ storage: storage });
  
  // Middleware function to handle file upload
  const uploadMiddleware = upload.single('image');


export async function POST(req: NextRequest, res: NextResponse) {
    await dbConnect();
   try {
    await uploadMiddleware(req, res);

    const {title, description, image, category, author,isPublished, isDraft} = await req.json();

    if(!title || !description || !req.file || !category){
        return new NextResponse('Please fill all the fields', {status: 400})
    }

    const blog = await Blog.create({
        title, description, image:req.file.filename, category, author, isPublished, isDraft
    })

    const createdBlog = await Blog.findById(blog._id)

    if(!createdBlog){
        return new NextResponse('Something went wrong creating a blog post', {status: 500})
   }

   return new NextResponse(JSON.stringify(createdBlog), {status: 200})
 } catch (error) {
    return new NextResponse('Something went wrong creating a blog post', {status: 500})
   }
}