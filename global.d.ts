import { Mongoose } from 'mongoose';

/* eslint-disable no-var */

declare global {
  var mongoose: {
    promise: Promise<Mongoose> | null;
    conn: Mongoose | null;
  };
}

// https://gist.github.com/rashidmya/2c075330e636134f00ebe85fbb88fed8