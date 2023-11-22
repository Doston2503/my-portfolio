import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const emailAddress = 'rajabov2503@gmail.com';
  const subject = 'Rajabov Doston';
  const body = 'Body of the email';

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
      <div
          className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div

            variants={slideIn("left", "tween", 0.2, 1)}
            className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <div className="my-contact-info">
            <div className="d-flex">
              <h1>Phone</h1>
              <a href="tel: +998942221998">+99894-222-19-98</a>
            </div>
            <div className="d-flex">
              <h1>Telegram</h1>
              <a target="_blank" href="https://t.me/rajabov_doston">@rajabov_doston</a>
            </div>
            <div className="d-flex">
              <h1>YouTube</h1>
              <a target="_blank" href="https://www.youtube.com/channel/UCLNc5Vze5_XjaUJ9curcN9g">Rajabov Doston</a>
            </div>
            <div className="d-flex">
              <h1>Email</h1>
              <a href={mailtoLink}>rajabov2503@gmail.com</a>
            </div>
          </div>

        </motion.div>

        <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>
  );
};

export default SectionWrapper(Contact, "contact");
