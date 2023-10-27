import React from 'react';
import Link from 'next/link';

function ScreenSaverIndexPage() {
  return (
    <main>
      <p>Choose your color:</p>
        <ul>
          <li><Link href='/exercises/01-screensaver/pink'>Pink</Link></li>
          <li><Link href='/exercises/01-screensaver/red'>Red</Link></li>
          <li><Link href='/exercises/01-screensaver/orange'>Orange</Link></li>
          <li><Link href='/exercises/01-screensaver/green'>Green</Link></li>
        </ul>
    </main>
  );
}

export default ScreenSaverIndexPage;
