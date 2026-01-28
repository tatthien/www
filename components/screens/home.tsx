import Page from '@/app/page'
import { Posts } from '@/components/posts'
import Image from 'next/image'
import Link from 'next/link'
import { SVGProps } from 'react'

const projects = [
  {
    name: 'Obsidian Study for Vietnamese',
    description: 'This Obsidian plugin aims to make Bible study easier and more productive for Vietnamese Christians',
    url: 'https://github.com/tatthien/obsidian-bible-kit',
  },
  {
    name: 'Church election app',
    description: 'A micro app for my local church\'s leadership elections',
    url: 'https://vote.thien.dev',
  },
  {
    name: 'Static site generator',
    description: 'An opinionated static site generator written in Go',
    url: 'https://github.com/tatthien/giraffe',
  },
]

export function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-4">
          Hi! I'm <Badge label="Daniel Nguyen" logoSize={24} logo="data:image/webp;base64,UklGRtgEAABXRUJQVlA4IMwEAACQWwCdASoAAgACPpFEnkqlo6KhqNOIYLASCWdu4W8OAP4B+Bf6L/wz376HaBeC/0X/kWKAYvpBL/Cvyn2cTk/8Y/bH8eenK4c+Z9P8/3VAP4B+AFN+iGSQWcOiSgn45xXFGi0gs4dElBPxziuKNFpBZw6JKCfjnFcUaLSCzh0SUE/HOK4o0WkFnDokoJ+OcVxRotILOHRJQT8c4p0xCdV7ifDnFcUaLSCzh0SUEnx1dFMmP5qSCzh0SUE/HOK4oV8paSglQf9AjRaQWcOiSgn4IM6MSzhzKFSwXFcUaLSCzh0NgfZ+OcVt5zWkFnDokoJ+OcJN62fFpBRc4ESUE/HOK4o0OpXo/neQnVe421aHe1i9ElBPxzitvM8Q5ToAdXRB087VNBPxziuKNFohOmHOu6nGnZzjem8BPxziuKNFo/WgIhQ53DCHGqbopA1pBZw6JKCfjbdw1MEfozU+0h/H/WElBPxziuKNFhP/iND7bYhQqMywUaLSCzh0SUE9toULPWOHexTlvN9OfjnFcUaLRCduCYpambnonxXFGi0gs4dEk/+i86z0J7oLO1ijRaQWcOiSgn423cDWj83o6L0SUE/HOK4o0Wj9t4TX2zt8sFxXFGi0gs4dElBPwaAzTV51axRotILOHRJQT8cyK1OsO9inWeW5BZw6JKCfjnFOmDt26lPQmTsKZrkWEs4dElBPxzhJU1v3h1dmDqb2tK6n5iDBURFsXFcUaLR+aVotrs06QE2KufbidvASNrhnVRc4dElBPxzKIoJu3nlIeURxE+MAbrXE2s2QF49rF6JKCfjmURRquDHSyL5O+v3vmNgKTAsFxXFGi0gobWIl6Z8m1rUEl232BfMd51+u6Q6BGi/jnFcUaLCdAjbPv3IL13MlR/W1M/sYZk8gBXFGi0gsnKI1tG6BzBBEWQpiv5VPlLbl5NrXj2sXokoJ+Cwyltyy73glRiNkG2En182LWo1VaxRoYAAA+W+AAAAAAABSF8wMQLwdx2QIHEYfOfOrcYgcdXNO60JuiBwAAAB856AJliSwqkmntEZQaJuXjUvAADoEHMK3CbQLycWatCSj6ZHALdHKBGNU3R+ocyTUEynoAI9ZVNjW5kBMp6AChYhAdXKQEuYI/6Wq/Juqo70L+tp8AhBVRHolPXBuxGXJDldKB30zN3UxWvFBHdR7Alv79qd0L+tpwXLAMP/5FJ3sTYjNRrbJ9PqANW5FelSwDVRwyw0f2AjK9ZH6Wq/Juqo70L+tpwXjJ+FQt0RQv62rmfMbXstajBtp+3nWg49DdszUluEbGrxszCyfHzBSYtY68AFZ/sQzLWkNU4gzVeZVS1MElmANW5FelStO+saGK6tgrsOcWSB/lVB1bi2f21XByDnCCElM0ZGKv62q97srzqO9AJXCH4YBzZEhYzlJQB/R1QAGlVkETq7YCzIaQfjAlv79qd0L+tp1RUKWpeRCH27NxAhFt5F5wfwQB8/7EMy1pFTLSpL71clOmIQG7gcFLgD3onzJjrvLjScIyUL1U1z0S1J7QEfgpwl4QoqcyFTpSvQutOMLthGP54ReJZ0NPw6uZPMKDPXMj9DY1wp4QeQfRExmw8d8kybVxOp69l5hCgP6MSj5uor2AAAA" />.
          I'm a Software Engineer specializing in <Badge label="JavaScript" logo={<JavaScriptIcon width={22} className='relative top-1' />} />,{' '}
          including its ecosystem like <Badge label="React" logo={<ReactIcon width={22} className='relative top-1' />} />,{' '}
          <Badge label="React Native" logo={<ReactIcon width={22} className='relative top-1' />} />,{' '}
          <Badge label="Next.js" logo={<NextIcon width={22} className='relative top-1' />} />,{' '}
          and <Badge label="Node.js" logo={<NodeIcon width={20} className='relative top-1' />} />.{' '}
          I also work with Go on occasion. This is my digital garden where I share my interest in a little of everything that crosses my mind, but mostly
          about technology.
        </p>
      </div>
      <div>
        <h2 className="py-2 text-gray-9">Side projects</h2>
        <div className="flex flex-col gap-2">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              className="-mx-2 px-2 py-1 no-underline after:hidden hover:bg-gray-3 hover:opacity-100"
              rel="noreferrer"
            >
              <h3>{project.name}</h3>
              <p className="my-0 text-gray-9 text-sm">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
      <div>
        <Link href="/w" prefetch={true} className="flex justify-between text-primary">
          <h2 className="py-2 capitalize">Writing</h2>
        </Link>
        <Posts category="w" group />
      </div>
    </div>
  )
}

function Badge({ label, logo, logoSize = 20 }: { label: string, logo: string | React.ReactNode, logoSize?: number }) {
  return (
    <span className='inline-flex items-baseline gap-1 group relative'>
      {typeof logo === 'string' ? (
        <Image
          src={logo}
          alt="Avatar"
          width={logoSize}
          height={logoSize}
          className="rounded-sm flex-shrink-0 self-center"
          fetchPriority="high"
          loading="eager"
        />
      ) : (
        logo
      )}
      <span className="text-nowrap whitespace-nowrap">{label}</span>
    </span>
  )
}

function JavaScriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
      viewBox="0 0 256 256"
      {...props}
    >
      <path fill="#F7DF1E" d="M0 0h256v256H0V0z" />
      <path d="m67.312 213.932 19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576 19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" />
    </svg>
  )
}

function ReactIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#53C1DE"
        d="M18.679 15.976c0-1.435-1.2-2.598-2.679-2.598-1.48 0-2.679 1.163-2.679 2.598 0 1.434 1.2 2.597 2.679 2.597 1.48 0 2.679-1.163 2.679-2.597Z"
      />
      <path
        fill="#53C1DE"
        fillRule="evenodd"
        d="M24.7 11.154c.566-2.23 1.277-6.363-1.23-7.764-2.495-1.395-5.742 1.278-7.456 2.883-1.71-1.589-5.048-4.25-7.552-2.845-2.494 1.4-1.725 5.465-1.147 7.708-2.327.64-6.315 2.02-6.315 4.84 0 2.811 3.984 4.313 6.297 4.953-.58 2.255-1.311 6.262 1.186 7.659 2.514 1.405 5.842-1.194 7.572-2.816 1.726 1.614 4.942 4.23 7.437 2.83 2.504-1.406 1.852-5.484 1.273-7.74 2.242-.641 6.235-2.11 6.235-4.886 0-2.793-4.01-4.184-6.3-4.822Zm-.284 8.513a28.65 28.65 0 0 0-1.519-3.685 28.625 28.625 0 0 0 1.46-3.631c1.679.472 5.361 1.55 5.361 3.625 0 2.094-3.533 3.183-5.302 3.691Zm-1.566 7.859c-1.862 1.045-4.628-1.456-5.902-2.645a29.352 29.352 0 0 0 2.514-3.096c1.45-.125 2.821-.329 4.064-.607.407 1.595 1.194 5.298-.676 6.348Zm-13.726-.015c-1.863-1.041-1.011-4.616-.584-6.278 1.228.264 2.589.453 4.042.568.83 1.132 1.7 2.173 2.576 3.085-1.083 1.015-4.163 3.671-6.034 2.625ZM2.28 15.976c0-2.102 3.661-3.173 5.378-3.643a29.257 29.257 0 0 0 1.462 3.673 29.689 29.689 0 0 0-1.48 3.726c-1.637-.454-5.36-1.653-5.36-3.756ZM9.104 4.504c1.87-1.05 4.77 1.506 6.012 2.656a29.97 29.97 0 0 0-2.556 3.066c-1.41.127-2.761.33-4.003.604-.466-1.81-1.321-5.278.547-6.326Zm11.275 7.073c.957.117 1.875.273 2.736.464-.259.803-.581 1.643-.96 2.504a41.165 41.165 0 0 0-1.776-2.968Zm-4.365-3.529c.591.621 1.183 1.314 1.766 2.066a38.897 38.897 0 0 0-3.546 0 27.651 27.651 0 0 1 1.78-2.066Zm-6.157 6.496a26.884 26.884 0 0 1-.954-2.517 29.762 29.762 0 0 1 2.72-.452 36.303 36.303 0 0 0-1.766 2.97Zm1.793 5.922a28.076 28.076 0 0 1-2.764-.431c.264-.83.59-1.692.972-2.568a36.306 36.306 0 0 0 1.792 2.999Zm4.4 3.525a28.142 28.142 0 0 1-1.805-2.094c1.188.045 2.378.045 3.566-.006a26.611 26.611 0 0 1-1.761 2.1Zm6.117-6.569c.4.886.739 1.744 1.007 2.559a27.97 27.97 0 0 1-2.798.462c.639-.982 1.239-1.99 1.79-3.02Zm-3.42 3.172a41.486 41.486 0 0 1-5.463.01 34.923 34.923 0 0 1-2.746-4.598 34.908 34.908 0 0 1 2.73-4.59c1.82-.133 3.65-.134 5.469 0a39.137 39.137 0 0 1 2.739 4.572 39.146 39.146 0 0 1-2.729 4.606ZM22.83 4.467c1.87 1.046 1.038 4.76.63 6.376a31.597 31.597 0 0 0-4.012-.615 29.379 29.379 0 0 0-2.536-3.069c1.258-1.175 4.066-3.728 5.918-2.692Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function NextIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      strokeLinejoin="round"
      data-testid="geist-icon"
      viewBox="0 0 16 16"
      style={{
        color: 'currentColor',
      }}
      {...props}
    >
      <g clipPath="url(#a)">
        <circle
          cx={8}
          cy={8}
          r={7.375}
          stroke="var(--ds-gray-1000)"
          strokeLinecap="round"
        />
        <path stroke="url(#b)" strokeMiterlimit={1.414} d="M10.63 11V5" />
        <path
          fill="url(#c)"
          fillRule="evenodd"
          d="M5.995 5h-1.25v6h1.25V6.968l6.366 7.74c.351-.229.682-.484.992-.763L5.995 5.001Z"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1={11.13}
          x2={11.13}
          y1={5}
          y2={11}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={0.609} stopColor="#fff" stopOpacity={0.57} />
          <stop offset={0.797} stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="c"
          x1={9.938}
          x2={13.557}
          y1={9.063}
          y2={13.399}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <clipPath id="a">
          <path fill="red" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

function NodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 71 80"
      fill="none"
      {...props}
    >
      <g fill="#5FA04E">
        <path d="M35.625 79.5c-1.081 0-2.09-.288-3.028-.792l-9.59-5.686c-1.442-.792-.721-1.08-.289-1.224 1.947-.648 2.308-.792 4.327-1.944.216-.144.504-.072.72.072l7.356 4.391c.288.144.649.144.865 0l28.77-16.628c.289-.144.433-.431.433-.791V23.714c0-.36-.144-.648-.432-.792L35.986 6.366c-.288-.144-.65-.144-.865 0L6.35 22.922c-.29.144-.434.504-.434.792v33.184c0 .287.145.647.433.791l7.86 4.535c4.254 2.16 6.922-.36 6.922-2.879V26.593c0-.432.36-.864.865-.864h3.678c.432 0 .865.36.865.864v32.752c0 5.687-3.1 8.998-8.509 8.998-1.658 0-2.956 0-6.633-1.8l-7.572-4.319A6.073 6.073 0 0 1 .798 56.97V23.786a6.073 6.073 0 0 1 3.028-5.255l28.77-16.628c1.804-1.008 4.255-1.008 6.058 0l28.77 16.628a6.073 6.073 0 0 1 3.029 5.255V56.97a6.073 6.073 0 0 1-3.029 5.254l-28.77 16.628c-.865.36-1.947.648-3.029.648Z" />
        <path d="M44.567 56.682c-12.62 0-15.215-5.759-15.215-10.654 0-.432.36-.864.865-.864h3.75c.433 0 .793.288.793.72.577 3.815 2.235 5.687 9.879 5.687 6.057 0 8.652-1.368 8.652-4.607 0-1.871-.72-3.24-10.167-4.175-7.86-.792-12.762-2.52-12.762-8.782 0-5.83 4.903-9.285 13.123-9.285 9.23 0 13.772 3.167 14.35 10.077 0 .216-.073.432-.217.648-.144.144-.36.288-.577.288h-3.822a.844.844 0 0 1-.793-.648c-.865-3.96-3.1-5.255-9.013-5.255-6.634 0-7.427 2.304-7.427 4.031 0 2.088.937 2.736 9.879 3.887 8.869 1.152 13.05 2.808 13.05 8.998 0 6.335-5.263 9.934-14.348 9.934Z" />
      </g>
    </svg>
  )
}
