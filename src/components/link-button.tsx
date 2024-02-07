import { Link, LinkProps } from 'expo-router'
import React from 'react'

type LinkButtonProps = LinkProps<string> & {
    title: string
}

const LinkButton = ({title, ...rest}: LinkButtonProps) => {
  return (
    <Link {...rest} className='text-slate-300 text-center text-base font-body'>
        {title}
    </Link>
  )
}

export default LinkButton