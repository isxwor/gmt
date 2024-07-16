export const dynamic = 'force-dynamic';

const CATEGORIES = [
  'amazing',
  'change',
  'courage',
  'dreams',
  'faith',
  'friendship',
  'good',
  'great',
  'happiness',
  'hope',
  'humor',
  'inspirational',
  'life',
  'love',
  'success',
];

const { API_NINJA_TOKEN } = process.env;

export const GET = async () => {
  const randomCategory =
    CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];

  try {
    const res = await fetch(
      `https://api.api-ninjas.com/v1/quotes?category=${randomCategory}`,
      {
        // @ts-ignore
        headers: {
          'X-Api-Key': API_NINJA_TOKEN,
        },
      }
    );

    if (!res.ok) {
      return Response.json({ success: false, message: res.statusText });
    }

    const data = await res.json();

    return Response.json({ success: true, data: data[0] });
  } catch (error) {
    return Response.json({ success: false, message: (error as Error).message });
  }
};
