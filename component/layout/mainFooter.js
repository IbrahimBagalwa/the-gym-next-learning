import React from 'react';
import Link from 'next/link';
import classes from './mainFooter.module.css';
export default function MainFooter() {
  return (
    <footer className={classes.footer}>
      <ul>
        <li>
          <Link href='/'>All meetup</Link>
        </li>
        <li>
          <Link href='/'>Add your meet</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href='/'>twitter</Link>
        </li>
        <li>
          <Link href='/'>Linkedin</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href='/'>Hiring</Link>
        </li>
        <li>
          <Link href='/'>Blogs</Link>
        </li>
      </ul>
    </footer>
  );
}
