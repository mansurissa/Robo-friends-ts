import * as React from 'react';

interface ICardProp {
  name: string;
  email: string;
  id: number;
}

const Card = ({ name, email, id }: ICardProp): any => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
