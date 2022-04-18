import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '@/styles/Blog.module.scss';
import { getDatabase, getBlocks } from '@/lib/notion';
import Layout from '@/components/Layout';

export const Text = ({ text }) => {
  if (!text) {
    return null;
  }

  return text.map((value, index) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        key={index}
        className={[
          bold ? styles.bold : '',
          code ? styles.code : '',
          italic ? styles.italic : '',
          strikethrough ? styles.strikethrough : '',
          underline ? styles.underline : '',
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

const renderNestedList = (block) => {
  const { type } = block;
  const value = block[type];
  if (!value) return null;

  const isNumberedList = value.children[0].type === 'numbered_list_item';

  if (isNumberedList) {
    return <ol>{value.children.map((block) => renderBlock(block))}</ol>;
  }
  return <ul>{value.children.map((block) => renderBlock(block))}</ul>;
};

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case 'paragraph':
      return (
        <p>
          <Text text={value.rich_text} />
        </p>
      );
    case 'heading_1':
      return (
        <h1>
          <Text text={value.rich_text} />
        </h1>
      );
    case 'heading_2':
      return (
        <h2>
          <Text text={value.rich_text} />
        </h2>
      );
    case 'heading_3':
      return (
        <h3>
          <Text text={value.rich_text} />
        </h3>
      );
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li>
          <Text text={value.rich_text} />
          {!!value.children && renderNestedList(block)}
        </li>
      );
    case 'to_do':
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{' '}
            <Text text={value.rich_text} />
          </label>
        </div>
      );
    case 'toggle':
      return (
        <details>
          <summary>
            <Text text={value.rich_text} />
          </summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case 'child_page':
      return <p>{value.title}</p>;
    case 'image':
      const src =
        value.type === 'external' ? value.external.url : value.file.url;

      const caption = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case 'divider':
      return <hr key={id} />;
    case 'quote':
      return <blockquote key={id}>{value.rich_text[0].plain_text}</blockquote>;
    case 'code':
      return (
        <pre className={styles.pre}>
          <code className={styles.code_block} key={id}>
            {value.rich_text[0].plain_text}
          </code>
        </pre>
      );
    case 'file':
      const src_file =
        value.type === 'external' ? value.external.url : value.file.url;
      const splitSourceArray = src_file.split('/');
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <figure>
          <div className={styles.file}>
            📎{' '}
            <Link href={src_file} passHref>
              {lastElementInArray.split('?')[0]}
            </Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      );
    case 'bookmark':
      const href = value.url;
      return (
        <a href={href} target="_brank" className={styles.bookmark}>
          {href}
        </a>
      );
    default:
      return `❌ Unsupported block (${
        type === 'unsupported' ? 'unsupported by Notion API' : type
      })`;
  }
};

export default function Post({ blocks, database }) {
  const router = useRouter();
  const onClick = (e) => {
    const isOpen = e.target.parentElement.hasAttribute('hide');
    // const parent = e.target.parentElement.children;
    // Display all none
    // Fade in the target elemnt
    // if (!isOpen) {
    //   setTimeout(() => {
    //     e.target.setAttribute('target', '');
    //     for (let item of parent) {
    //       item !== e.target
    //         ? (item.style.display = 'none')
    //         : (item.style.display = 'flex');
    //       item.querySelector('.excerpt').style.display = 'none';
    //       item.querySelector('.content').style.display = 'block';
    //     }
    //   }, 700);
    // } else {
    //   // Remove all previous targets
    //   setTimeout(() => {
    //     for (let item of parent) {
    //       item.removeAttribute('target');
    //       item.style.display = 'flex';
    //       item.querySelector('.content').style.display = 'none';
    //       item.querySelector('.excerpt').style.display = 'block';
    //     }
    //   }, 900);
    // }
    // Fade in and out the container
    isOpen
      ? e.target.parentElement.removeAttribute('hide')
      : e.target.parentElement.removeAttribute('show');
    e.target.parentElement.toggleAttribute(isOpen ? 'show' : 'hide');

    router.push(`/blog/${e.target.id}`);
  };

  return (
    <Layout>
      <div className={styles.blog_body} onClick={onClick}>
        {blocks.map((block, index) => (
          <Fragment key={block[0].id}>
            <div
              className={styles.blog_post}
              id={database[index].properties.slug.rich_text[0].text.content}
            >
              <h2 className={styles.blog_post_title}>
                {database[index].properties.Name.title[0].text.content}
              </h2>
              <div className={styles.blog_post_info}>
                <span className={styles.dude}>
                  🟠
                  {database[index].properties.Auther.rich_text[0].text.content}
                </span>
                <span className={styles.date}>
                  📅{database[index].properties.Date.date.start}
                </span>
              </div>
              <p className={`excerpt`}>
                {database[index].properties.Excerpt.rich_text[0].text.content}
              </p>
              <div className={`content`} style={{ display: 'none' }}>
                {renderBlock(block[0])}
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(process.env.NOTION_DATABASE_ID);

  const blocks = await Promise.all(
    database.map(async (item) => {
      return await getBlocks(item.id);
    })
  );

  return {
    props: {
      database,
      blocks,
    },
    revalidate: 1,
  };
};
