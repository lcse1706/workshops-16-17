import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // const data = request.body;
  const data = await request.json();

  console.log(data);

  return NextResponse.json({ status: 'ok' });
}
