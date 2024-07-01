import React from 'react';
import { FaPhoneFlip } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import SocialLink from '../SocialLink';
export default function Contact() {
  const contactDetails = [
    {
      Icon: <FaPhoneFlip />,
      url: 'tel:9380230082',
      name: 'Phone_No',
    },
    {
      Icon: <IoMail />,
      url: 'mailto:varunnaik1121@gmail.com',
      name: 'mail',
    },
  ];
  return (
    <div>
      {contactDetails.map((contact, index) => {
        return (
          <SocialLink
            key={index}
            Icon={contact.Icon}
            url={contact.url}
            name={contact.name}
          />
        );
      })}
    </div>
  );
}
