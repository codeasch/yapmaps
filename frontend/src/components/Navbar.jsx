'use client'

import { useState, useEffect } from 'react'
import YapLogoType from '../assets/logo/YapLogoTypography.png'
import { YoutubeIcon, InstagramIcon, TwitterIcon, DiscIcon as DiscordIcon, Menu, X } from 'lucide-react'
import '../styles/navbar-animations.css'

const navItemClass = `
  px-3 py-2 rounded-full text-sm font-extrabold tracking-wide
  transition-all duration-300 font-sans
  hover:bg-white hover:shadow-sm
`

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home')
  const [animate, setAnimate] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  const navigation = [
    { name: 'HOME', href: '#' },
    { name: 'GAMES', href: '#' },
    { name: 'MEET US', href: '#' },
    { name: 'CONTACT', href: '#' },
  ]

  const socialLinks = [
    { 
      name: 'Discord',
      href: 'https://discord.gg/yapmaps',
      icon: DiscordIcon,
      hoverColor: 'hover:text-[#5865F2]'
    },
    { 
      name: 'Twitter',
      href: 'https://twitter.com/yapmapsfnc',
      icon: TwitterIcon,
      hoverColor: 'hover:text-[#1DA1F2]'
    },
    { 
      name: 'YouTube',
      href: 'https://youtube.com/@yapmaps',
      icon: YoutubeIcon,
      hoverColor: 'hover:text-[#FF0000]'
    },
    { 
      name: 'Instagram',
      href: 'https://instagram.com/yapmaps',
      icon: InstagramIcon,
      hoverColor: 'hover:text-[#E4405F]'
    }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`fixed w-full z-50 bg-white shadow-sm ${animate ? 'navbar-animate-in' : 'opacity-0'}`}>
      {/* Rainbow gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500"></div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className={`flex-shrink-0 ${animate ? 'navbar-logo-animate-in' : 'opacity-0'}`}>
            <img
              src={YapLogoType}
              alt="YapMaps"
              className="h-10 w-auto"
            />
          </div>

          {/* Center Navigation (Desktop) */}
          <div className="hidden md:flex items-center justify-center flex-1 ml-4 lg:ml-16">
            <div className="flex space-x-2 bg-gray-100 p-1 rounded-full shadow-inner">
              {navigation.map((item, index) => {
                const isActive = activeLink === item.name.toLowerCase()
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`
                      px-4 py-2 rounded-full text-sm font-extrabold tracking-wide
                      transition-all duration-300 font-sans
                      ${isActive 
                        ? 'bg-yap-red text-white shadow-md scale-105 hover:bg-yap-red/90' 
                        : 'text-gray-700 hover:bg-white hover:shadow-sm hover:scale-105'
                      }
                      ${animate ? 'navbar-item-animate-in' : 'opacity-0'}
                    `}
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                    onClick={(e) => {
                      e.preventDefault()
                      setActiveLink(item.name.toLowerCase())
                    }}
                  >
                    {item.name}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Social Icons (Desktop) */}
          <div className={`hidden md:flex items-center space-x-2 ${animate ? 'navbar-social-animate-in' : 'opacity-0'}`}>
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 text-gray-500 transition-colors duration-200 ${item.hoverColor}`}
                aria-label={item.name}
              >
                <item.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-600 hover:text-yap-red hover:bg-gray-100 transition-colors duration-200"
            >
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50">
          {navigation.map((item) => {
            const isActive = activeLink === item.name.toLowerCase()
            return (
              <a
                key={item.name}
                href={item.href}
                className={`
                  block ${navItemClass}
                  ${isActive
                    ? 'bg-yap-red text-white shadow-md hover:bg-yap-red/90'
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveLink(item.name.toLowerCase())
                  setIsMenuOpen(false)
                }}
              >
                {item.name}
              </a>
            )
          })}
          <div className="flex justify-around pt-4 border-t border-gray-200">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 text-gray-500 ${item.hoverColor}`}
                aria-label={item.name}
              >
                <item.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

