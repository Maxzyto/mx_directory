import React from 'react'
import { formatDate } from "@/lib/utils";
import { EyeIcon } from 'lucide-react';

const StartupCard = ({post}: {post: StartupTypeCard}) => {
  return (
    <>
      <li className="startup-card group">
        <div className="flex-between">
          <p className="startup_card_date">{formatDate(post._createdAt)}</p>
        </div>

        <div className='flex gap-1.5'>
          <EyeIcon className='size-5 text-primary' />
          <span className='text-16-medium'> {post.views} </span>

        </div>
      </li>
    </>
  );
}

export default StartupCard