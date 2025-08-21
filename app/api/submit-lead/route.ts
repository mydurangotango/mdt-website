import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const filename = `leads/${data.type}/${Date.now()}_${data.email.replace('@', '_at_')}.json`;
    
    const blob = await put(filename, JSON.stringify(data, null, 2), {
      access: 'public',
      contentType: 'application/json',
    });

    return NextResponse.json({ 
      success: true, 
      url: blob.url 
    });
  } catch (error) {
    console.error('Error saving to Vercel Blob:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save data' },
      { status: 500 }
    );
  }
}