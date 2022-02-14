import Head from 'next/head'
import Banner from '../components/Banner'
import Fandom from '../assets/fandom.svg'
import HangingOut from '../assets/hanging-out.svg'
import HeaderBanner from '../components/HeaderBanner/HeaderBanner'
import InviteOnlyImage from '../assets/invite-only.svg'
import JustChilling from '../components/JustChilling/JustChilling'
import Footer from '../components/Footer'
import Drawer from '../components/Drawer'

export default function Home() {
  return (
    <div className="h-screen overflow-x-hidden">
      <Head>
        <title>Discord</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderBanner />
      <Banner
        BannerImage={InviteOnlyImage}
        heading="Create an invite-only place where you belong"
        brief="Discord servers are organized into topic-based channels where you can
        collaborate, share, and just talk about your day without clogging up a
        group chat."
        order={0}
      />
      <Banner
        BannerImage={HangingOut}
        heading="Where hanging out is easy"
        brief="Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call."
        order={1}
        bgColor="bg-slate-100"
      />
      <Banner
        BannerImage={Fandom}
        heading="From few to a fandom"
        brief="Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more."
        order={0}
      />
      <JustChilling />
      <Footer />
      <Drawer />
    </div>
  )
}
