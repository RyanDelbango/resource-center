import dbConnect from 'libs/dbConnect';
import type { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../models/User';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await dbConnect();

	try {
		const user = await User.create(req.body);
		const token = user.createJWT();
		res.status(201).json({ token: token, data: user });
	} catch (error) {
		res.status(400).json({ msg: error });
	}
};

export default handler;

