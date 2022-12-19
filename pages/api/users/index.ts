import dbConnect from 'libs/dbConnect';
import type { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../models/User';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	await dbConnect();

	switch (method) {
		// Get all users
		case 'GET':
			try {
				const users = await User.find({});
				res.status(200).json({ data: users });
			} catch (error) {
				res.status(400).json({ msg: error });
			}
			break;
		default:
			res.status(400).json({ success: false });
      break;
	}
};

export default handler;

