
import type { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function POST(req: Request, res: NextApiResponse) {
  try {
    const { email } = await req.json();

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const MailchimpKey = process.env.MAILCHIMP_API_KEY;
    const MailchimpServer = process.env.MAILCHIMP_API_SERVER;
    const MailchimpAudience = process.env.MAILCHIMP_LIST_ID;



    const response = await fetch(`https://${process.env.NEXT_PUBLIC_SERVER}.api.mailchimp.com/3.0/lists/${process.env.NEXT_PUBLIC_Audience_ID}/members`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.detail },
        { status: response.status }
      );
    }

    const received = await response.json();
    return NextResponse.json(received, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
        { error: 'Internal Server Error' },
        { status: 500 }
      );
  }
}