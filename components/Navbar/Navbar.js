import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

const Navbar = () =>{

  const router = useRouter();

  return(
    <>
     <ul>
       <li><Link href="/Events">Events</Link></li>
       <li><Link href="/Articles">Articles</Link></li>
       <li><Link href="/team">Team</Link></li>
       <li><Link href="/Leaderboard">LeaderBoard</Link></li>
     </ul>
     </>
  );

};

export default Navbar;