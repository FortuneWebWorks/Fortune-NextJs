import Image from 'next/image';
import { useRef } from 'react';
import Router from 'next/router';
import styles from '@/styles/Form.module.scss';
import headStyle from '@/styles/Header.module.scss';
import Layout from '@/components/Layout';

function Form() {
  const form = useRef();

  const imageClick = () => {
    Router.push('/');
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const name = form.current.name.value;
    const email = form.current.email.value;
    const website = form.current.website.value;
    const discuss = form.current.discuss.value;
    const data = {
      name,
      email,
      website,
      discuss,
    };
    let validation = true;

    if (!data.name || data.name === '') {
      form.current.name.classList.add(styles.error);
      validation = false;
    }
    if (!data.email || data.email === '') {
      form.current.email.classList.add(styles.error);
      validation = false;
    }
    if (!data.website || data.website === '') {
      form.current.website.classList.add(styles.error);
      validation = false;
    }
    if (!data.discuss || data.discuss === '') {
      form.current.discuss.classList.add(styles.error);
      validation = false;
    }

    const sendigFormat =
      encodeURI(`👤Name: ${data.name}\n\n📧Email: ${data.email}\n\n🌐Website: ${data.website}\n\n💬Discuss: ${data.discuss}\n
    `);

    if (validation) {
      fetch(
        `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=761026981&text=${sendigFormat}&parse_mode=HTML`
      );
    }
  };

  const onChange = (e) => {};

  return (
    <Layout>
      {/* <header
        className={headStyle.header}
        style={{ justifyContent: 'center', height: '5rem', padding: '16px' }}
      >
        <div className={headStyle.head_content_1}>
          <div className={headStyle.logo}>
            <Image
              src="http://localhost:3000/favicon.jpg"
              alt="logo"
              objectFit="cover"
              width="100"
              height="100"
              onClick={imageClick}
            />
          </div>
        </div>
      </header> */}

      <main>
        <div className={styles.form}>
          <form id="form" onSubmit={onSubmit} ref={form} onChange={onChange}>
            <h2>
              PLEASE INFORM US OF YOUR WEBSITE AND WE WILL SEND YOU THE
              ANALYSIS:
            </h2>

            <div className={styles.info}>
              <div>
                <label htmlFor="name">your name:</label>
                <input type="text" name="name" id="name" />
              </div>

              <div>
                <label htmlFor="email">your email:</label>
                <input type="email" name="email" id="email" />
              </div>
            </div>

            <div>
              <label htmlFor="website">your website address:</label>
              <input type="url" name="website" id="website" />
            </div>

            <div>
              <label htmlFor="discuss">
                anything that you want to discuss:
              </label>
              <textarea
                id="discuss"
                className={styles.discuss}
                name="discuss"
              ></textarea>
            </div>

            <button className={styles.submit}>submit ✉️</button>
          </form>
        </div>
      </main>
    </Layout>
  );
}

export default Form;
