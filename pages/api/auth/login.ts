import dbConnect from 'libs/dbConnect';
import type { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../models/User';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await dbConnect();

	const { username, password } = req.body;

	if (!username || !password) {
		throw new Error('Please provide username and password');
	}

	const user = await User.findOne({username});
	if (!user) {
		throw new Error('Invalid credentials');
	}

	console.log(password);

	const passwordIsMatch = await user.comparePassword(password);
	if (!passwordIsMatch) {
		throw new Error('Invalid credentials');
	}

	const token = user.createJWT();
	res.status(200).json({user: user, token: token});
};

export default handler;

