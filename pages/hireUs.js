import { useRef } from 'react';
import styles from '@/styles/Form.module.scss';
import Layout from '@/components/Layout';

function Form() {
  const form = useRef();

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
      encodeURI(`🤝🏻Type:hireUs\n\n👤Name: ${data.name}\n\n📧Email: ${data.email}\n\n🌐Website: ${data.website}\n\n💬Discuss: ${data.discuss}\n
    `);

    if (validation) {
      fetch(
        `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=761026981&text=${sendigFormat}&parse_mode=HTML`
      );

      document.getElementById('form').classList.add(styles.done);
    }
  };

  const onChange = (e) => {};

  return (
    <Layout>
      <main>
        <div className={styles.form} id="form">
          <form id="form" onSubmit={onSubmit} ref={form} onChange={onChange}>
            <h2>Request a free consultation session and website analysis</h2>

            <div className={styles.info}>
              <div>
                <label htmlFor="name">name:</label>
                <input type="text" name="name" id="name" />
              </div>

              <div>
                <label htmlFor="email">email:</label>
                <input type="email" name="email" id="email" />
              </div>
            </div>

            <div>
              <label htmlFor="website">website url/link for analysis:</label>
              <input type="url" name="website" id="website" />
            </div>

            <div>
              <label htmlFor="discuss">
                anything else you wish to discuss and comments:
              </label>
              <textarea
                id="discuss"
                className={styles.discuss}
                name="discuss"
              ></textarea>
            </div>

            <button className={styles.submit}>submit ✉️</button>
          </form>

          <div className={styles.final_message}>
            <p>
              your request has been submitted 🎉 <br /> we&apos;ll contact you
              as soon as possible.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Form;
