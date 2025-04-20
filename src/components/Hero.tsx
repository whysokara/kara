"use client"

import Image from 'next/image'
import { LinkText } from './LinkText'
import { Mail, Github, Instagram } from 'lucide-react'
import { useState } from 'react'

export function Hero() {
  const [showCopied, setShowCopied] = useState(false)

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText('kara_himanshu@yahoo.com')
    setShowCopied(true)
    setTimeout(() => setShowCopied(false), 2000)
  }

  return (
    <div className="mx-auto w-full max-w-[1084px] px-4 py-8 md:grid md:grid-cols-12 md:gap-5 md:px-0 md:py-16">
      {/* One column gap at start - desktop only */}
      <div className="hidden md:block md:col-span-1" />
      
      {/* Mobile layout */}
      <div className="flex flex-col md:hidden gap-8">
        {/* Two-column layout for intro section on mobile */}
        <div className="flex flex-row gap-4 items-start">
          {/* Welcome paragraph - 75% width */}
          <div className="w-3/4">
            <p className="text-base text-gray-600">
            {/* Hi! I&apos;m Kara, and for over 5.5 years, I&apos;ve been working with data, <br/>
          using BI tools, SQL, and Python to build things that make sense. <br/> <br/>
          Welcome to my corner of the web! */}
          Hello! I&apos;m Kara, a data enthusiast with 5.5+ years of experience using BI, SQL, and Python. <br/>
          I love building things that make data meaningful—and occasionally, I explore other creative outlets. <br/> <br/>
          You&apos;ll find a bit of that here too.
            </p>
          </div>
          
          {/* Image - 25% width */}
          <div className="w-1/4 aspect-square relative">
            <Image
              src="/k-hero.jpg"
              alt="kara"
              fill
              className="rounded-lg object-cover"
              priority
              // height={600}
            />
          </div>
        </div>
        
        {/* Rest of mobile content */}
        <div className="space-y-8">
          {/* Summary section */}
          <div className="space-y-4">
            <h2 className="text-sm font-medium uppercase text-gray-400">Summary</h2>
            <ul className="list-disc space-y-2 pl-4 text-gray-600 [&>li::marker]:text-gray-300">
            <li>
            Currently I turn chaos into insights at{' '}
              <LinkText
                variant="single-image-link"
                text="KPMG"
                href="https://kpmg.com/in/en.html"
                images={{ src: "/logos/kpmg.jpeg", alt: "KPMG" }}
                withBorder
              />
            </li>
            <li>
            Previously did BI + SQL at {' '}
              <LinkText
                variant="single-image-link"
                text="Capgemini"
                href="https://www.capgemini.com/in-en/"
                images={{ src: "/logos/capgemini.png", alt: "Capgemini" }}
                withBorder
              />
              
                {/* <LinkText
                  variant="single-image-link"
                  text="Network State"
                  href="https://ns.com"
                  images={{ src: "/logos/ns.png", alt: "Network State" }}
                  withBorder
                /> */}
              </li>
              {/* <li>
              Got my hands on some robotic tech at {' '} 
                <LinkText
                  variant="image-stack"
                  text="DRDO"
                  href="https://ns.com"
                  images={{ src: "/logos/ns.png", alt: "Network State" }}
                 
                />
              </li> */}

              <li>
                Got my hands on some robotic tech at{' '}
              <LinkText
                variant="single-image-link"
                text="DRDO"
                href="https://www.drdo.gov.in/drdo/labs-and-establishments/centre-artificial-intelligence-robotics-cair"
                images={{ src: "/logos/drdo.jpeg", alt: "DRDO" }}
                withBorder
              />
            </li>
              <li>27, based in Bengaluru</li>
              {/* <li>
                I built the first meme page network in India to 16M followers{' '}
                <LinkText
                  variant="image-stack"
                  text=""
                  images={[
                    { src: "/logos/im.png", alt: "Indian Memes" }
                  ]}
                />
              </li>
              <li>
                I write a pretty smart newsletter called{' '}
                <LinkText
                  variant="single-image-link"
                  text="Product Hacks"
                  href="https://producthacks.io"
                  images={{ src: "/logos/producthacks.png", alt: "Product Hacks" }}
                  withBorder
                />
              </li> */}
            </ul>
          </div>

          {/* Social and Music section */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 w-full">
              <a 
                href="mailto:kara_himanshu@yahoo.com" 
                onClick={handleEmailClick}
                className="group relative text-gray-400 hover:text-gray-600"
              >
                <Mail className="h-5 w-5" />
                {showCopied && (
                  <div className="absolute bottom-full left-1/2 mb-1 -translate-x-1/2 transform whitespace-nowrap rounded-full bg-gray-900 px-2 py-0.5 text-xs text-white">
                    Copied
                  </div>
                )}
              </a>
              <a 
                href="https://x.com/whysokara" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
              >
                <Image 
                  src="/x.svg" 
                  alt="X (Twitter)" 
                  width={20} 
                  height={20}
                  className="[&>path]:fill-gray-100 hover:[&>path]:fill-gray-600"
                />
              </a>
              <a 
                href="https://instagram.com/whysokara" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/whysokara" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
              >
                <Github className="h-5 w-5" />
              </a>
              
              {/* Divider */}
              <div className="h-4 w-px bg-gray-200" />
              
              {/* Music section - inline with social icons */}
              <div className="group flex items-center gap-2 text-gray-600 flex-1 min-w-0">
                <div className="flex items-center gap-2 whitespace-nowrap overflow-hidden">
                  <div className="overflow-hidden rounded-full flex-shrink-0">
                    <Image
                      src="/cd.png"
                      alt="Album Art"
                      width={24}
                      height={24}
                      className="animate-[spin_3s_linear_infinite_paused] group-hover:animate-[spin_3s_linear_infinite]"
                    />
                  </div>
                  <span className="text-sm">
                    ♪ Listening to{' '}
                    <span className="inline-flex max-w-[80px] sm:max-w-none overflow-hidden">
                      <LinkText
                        variant="text-link"
                        text="Dissolve"
                        href="https://www.youtube.com/watch?v=xe2FPP4lX14"
                      />
                      <span className="truncate"> by Absafacto</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Desktop layout - Main content - 7 columns */}
      <div className="hidden md:block md:col-span-7 space-y-12">
        {/* Welcome paragraph */}
        <p className="text-base text-gray-600">
        Hello! I&apos;m Kara, a data enthusiast with 5.5+ years of experience using BI, SQL,
         and Python. 
          I love building things that make data meaningful .. and <br/> <br/>occasionally, I explore other creative outlets. 
         You&apos;ll find a bit of that here too.
        </p>

        {/* Summary section */}
        <div className="space-y-4">
          <h2 className="text-sm font-medium uppercase text-gray-400">Summary</h2>
          <ul className="list-disc space-y-2 pl-4 text-gray-600 [&>li::marker]:text-gray-300">
            <li>
              Currently I turn chaos into insights at {' '}
              <LinkText
                variant="single-image-link"
                text="KPMG"
                href="https://kpmg.com/in/en.html"
                images={{ src: "/logos/kpmg.jpeg", alt: "KPMG" }}
                withBorder
              />
            </li>
            <li>
            Previously did BI + SQL at {' '}
              <LinkText
                variant="single-image-link"
                text="Capgemini"
                href="https://www.capgemini.com/in-en/"
                images={{ src: "/logos/capgemini.png", alt: "Capgemini" }}
                withBorder
              />
              {/* {' '}&{' '}
              <LinkText
                variant="single-image-link"
                text="Network State"
                href="https://ns.com"
                images={{ src: "/logos/ns.png", alt: "Network State" }}
                withBorder
              /> */}
            </li>
            {/* <li>
              I&apos;ve worked for 220 companies since 2016{' '}
              <LinkText
                variant="image-stack"
                text=""
                images={[
                  { src: "/logos/gates.png", alt: "Gates Foundation" },
                  { src: "/logos/userpilot.png", alt: "Userpilot" },
                  { src: "/logos/asy.png", alt: "Asymmetric" },
                  { src: "/logos/cointelegraph.png", alt: "CoinTelegraph" },
                  { src: "/logos/synthesis.png", alt: "Synthesis" },
                  { src: "/logos/alpaca.png", alt: "Alpaca" },
                ]}
              />
            </li> */}
            <li>
                Got my hands on some robotic tech at{' '}
              <LinkText
                variant="single-image-link"
                text="DRDO"
                href="https://www.drdo.gov.in/drdo/labs-and-establishments/centre-artificial-intelligence-robotics-cair"
                images={{ src: "/logos/drdo.jpeg", alt: "DRDO" }}
                withBorder
              />
            </li>
            



            <li>27, based in Bengaluru</li>
            {/* <li>
              I built the first meme page network in India to 16M followers{' '}
              <LinkText
                variant="image-stack"
                text=""
                images={[
                  { src: "/logos/im.png", alt: "Indian Memes" }
                ]}
              />
            </li> */}
            {/* <li>
              I write a pretty smart newsletter {' '}
              <LinkText
                variant="single-image-link"
                text="Product Hacks"
                href="https://producthacks.io"
                images={{ src: "/logos/producthacks.png", alt: "Product Hacks" }}
                withBorder
              />
            </li> */}
          </ul>
        </div>

        {/* Social and Music section */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a 
              href="mailto:kara_himanshu@yahoo.com" 
              onClick={handleEmailClick}
              className="group relative text-gray-400 hover:text-gray-600"
            >
              <Mail className="h-5 w-5" />
              {showCopied && (
                <div className="absolute bottom-full left-1/2 mb-1 -translate-x-1/2 transform whitespace-nowrap rounded-full bg-gray-900 px-2 py-0.5 text-xs text-white">
                  Copied
                </div>
              )}
            </a>
            <a 
              href="https://x.com/whysokara" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600"
            >
              <Image 
                src="/x.svg" 
                alt="X (Twitter)" 
                width={20} 
                height={20}
                className="[&>path]:fill-gray-100 hover:[&>path]:fill-gray-600"
              />
            </a>
            <a 
              href="https://instagram.com/whysokara" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/whysokara" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
          
          {/* Divider */}
          <div className="h-4 w-px bg-gray-200" />
          
          {/* Music section */}
          <div className="group flex items-center gap-2 text-gray-600">
            <div className="flex items-center gap-2 whitespace-nowrap overflow-hidden">
              <div className="overflow-hidden rounded-full flex-shrink-0">
                <Image
                  src="/cd.png"
                  alt="Album Art"
                  width={24}
                  height={24}
                  className="animate-[spin_3s_linear_infinite_paused] group-hover:animate-[spin_3s_linear_infinite]"
                />
              </div>
              <span className="text-sm">
                ♪ Listening to{' '}
                <LinkText
                  variant="text-link"
                  text="Dissolve by Absafacto"
                  href="https://www.youtube.com/watch?v=xe2FPP4lX14"
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Image - 3 columns */}
      <div className="hidden md:block md:col-span-3">
        <Image
          src="/k-hero.jpg"
          alt="kara"
          width={400}
          height={1200}
          className="rounded-lg"
          priority
        />
      </div>

      {/* One column gap at end - desktop only */}
      <div className="hidden md:block md:col-span-1" />
    </div>
  )
} 