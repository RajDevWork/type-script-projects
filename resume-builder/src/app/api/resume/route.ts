import { getCurrentUser } from "@/lib/getCurrentUser";
import { connectToMongoDB } from "@/lib/mongodb";
import ResumeModel from "@/models/Resume.model";
import { ApiResponse } from "@/types/api.types";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToMongoDB();

    const userId = await getCurrentUser();

    const resumes = await ResumeModel.find({
      user_id: userId,
    })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json<ApiResponse>({
      success: true,
      message: "Resumes fetched successfully",
      data: resumes,
    });
  } catch (error) {
    console.error("Error fetching resumes:", error);

    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}