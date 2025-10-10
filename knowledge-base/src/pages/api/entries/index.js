import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const entries = await prisma.entry.findMany();
    res.status(200).json(entries);
  } else if (req.method === 'POST') {
    const { title, content, category, tags } = req.body;
    const entry = await prisma.entry.create({
      data: { title, content, category, tags },
    });
    res.status(201).json(entry);
  } else {
    res.status(405).end();
  }
}
