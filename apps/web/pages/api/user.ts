/* eslint-disable import/no-anonymous-default-export */

// see https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'

type User = {
  name: string,
  email: string
}

export default (req: NextApiRequest, res: NextApiResponse<User>) => {
    const requestMethod = req.method;

    // todo: do something with body

    switch (requestMethod) {
        case 'GET':
            res.status(200).json({ name: 'josh', email: 'jfisher@whitebox.com' });
            break;

        case 'POST':
            res.status(200).json({ name: 'josh', email: 'jfisher@whitebox.com' });
            break;

     }
}