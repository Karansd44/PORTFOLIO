import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const Contact = () => {
  const formRef = useRef();
  const ref = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const isInView = useInView(ref, { marigin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_sp2x4km", "template_4ce881d", formRef.current, {
        publicKey: "jq9Ddc42cH33YKiad",
      })
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Work Together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>Karansd442004@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Ayyappanager KR Puram Bangalore</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+91 8549902860</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            fill="#000000"
            height="450px"
            width="450px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 60.062 60.062"
            xml:space="preserve"
          >
            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M60.046,11.196c0.004-0.024,0.011-0.048,0.013-0.072c0.007-0.074-0.001-0.149-0.01-0.224
	c-0.002-0.019,0.001-0.037-0.002-0.056c-0.018-0.099-0.051-0.196-0.1-0.289c-0.008-0.016-0.019-0.031-0.028-0.047
	c-0.002-0.002-0.002-0.005-0.003-0.008c-0.001-0.002-0.004-0.003-0.005-0.006c-0.007-0.011-0.013-0.023-0.02-0.033
	c-0.062-0.091-0.137-0.166-0.221-0.23c-0.019-0.014-0.041-0.022-0.061-0.035c-0.074-0.049-0.152-0.089-0.236-0.116
	c-0.037-0.012-0.074-0.018-0.112-0.025c-0.073-0.015-0.146-0.022-0.222-0.02c-0.04,0.001-0.078,0.003-0.118,0.009
	c-0.026,0.004-0.051,0-0.077,0.006L0.798,22.046c-0.413,0.086-0.729,0.421-0.788,0.839s0.15,0.828,0.523,1.025l16.632,8.773
	l2.917,16.187c-0.002,0.012,0.001,0.025,0,0.037c-0.01,0.08-0.011,0.158-0.001,0.237c0.005,0.04,0.01,0.078,0.02,0.117
	c0.023,0.095,0.06,0.184,0.11,0.268c0.01,0.016,0.01,0.035,0.021,0.051c0.003,0.005,0.008,0.009,0.012,0.013
	c0.013,0.019,0.031,0.034,0.046,0.053c0.047,0.058,0.096,0.111,0.152,0.156c0.009,0.007,0.015,0.018,0.025,0.025
	c0.015,0.011,0.032,0.014,0.047,0.024c0.061,0.04,0.124,0.073,0.191,0.099c0.027,0.01,0.052,0.022,0.08,0.03
	c0.09,0.026,0.183,0.044,0.277,0.044c0.001,0,0.002,0,0.003,0h0c0,0,0,0,0,0c0.004,0,0.008-0.002,0.012-0.002
	c0.017,0.001,0.034,0.002,0.051,0.002c0.277,0,0.527-0.124,0.712-0.315l11.079-7.386l11.6,7.54c0.164,0.106,0.354,0.161,0.545,0.161
	c0.105,0,0.212-0.017,0.315-0.051c0.288-0.096,0.518-0.318,0.623-0.604l13.996-37.989c0.013-0.034,0.024-0.069,0.033-0.105
	c0.004-0.015,0.005-0.03,0.008-0.044C60.042,11.22,60.044,11.208,60.046,11.196z M48.464,17.579L24.471,35.22
	c-0.039,0.029-0.07,0.065-0.104,0.099c-0.013,0.012-0.026,0.022-0.037,0.035c-0.021,0.023-0.04,0.046-0.059,0.071
	c-0.018,0.024-0.032,0.049-0.048,0.074c-0.037,0.06-0.068,0.122-0.092,0.188c-0.005,0.013-0.013,0.023-0.017,0.036
	c-0.001,0.004-0.005,0.006-0.006,0.01l-2.75,8.937l-2.179-12.091L48.464,17.579z M22.908,46.594l2.726-9.004l4.244,2.759
	l1.214,0.789l-4.124,2.749L22.908,46.594z M52.044,13.498L18.071,30.899l-14.14-7.458L52.044,13.498z M44.559,47.504L29.154,37.492
	l-2.333-1.517l30.154-22.172L44.559,47.504z"
            />
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
