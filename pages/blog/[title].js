import { Fragment, useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getDatabase, getPage, getBlocks, getPageWithSlug } from '@/lib/notion';

export default function Post({ page, blocks, paths }) {
  return <h1>Hell</h1>;
}

export const getStaticPaths = async () => {
  const database = await getDatabase(process.env.NOTION_DATABASE_ID);

  return {
    paths: database.map((page) => {
      return { params: { title: page.properties.Name.title[0].plain_text } };
    }),
    fallback: true,
  };
};

export const getStaticProps = async (paths) => {
  const database = await getDatabase(process.env.NOTION_DATABASE_ID);
  const { title } = paths.params;

  const slugyPage = await getPageWithSlug(title);

  const page = await slugyPage[0];

  const id = await page.id;

  const blocks = await getBlocks(id);
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = await blocks.map((block) => {
    if (block.has_children && !block[block.type].children) {
      block[block.type]['children'] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
      paths: database,
    },
    revalidate: 60,
  };
};
