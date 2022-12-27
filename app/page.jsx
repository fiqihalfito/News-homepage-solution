"use client"

import Header from "../components/header";
import NewNews from "../components/new-news";
import MainNews from "../components/main-news"
import OtherNews from "../components/other-news"
import SidebarMenu from "../components/sidebar-menu";
import { useState } from "react";


export default function Home() {

  const [isOpen, setOpen] = useState(false)

  function handleMenu(status) {
    setOpen(status)
  }

  return (
    <div className="px-4 md:px-40">
      {isOpen && <SidebarMenu handleMenu={handleMenu} />}
      <Header handleMenu={handleMenu} />
      <div className="md:grid grid-cols-3 md:gap-x-8 md:gap-y-12">
        <MainNews />
        <NewNews />
        <OtherNews />
      </div>
    </div>
  )
}
