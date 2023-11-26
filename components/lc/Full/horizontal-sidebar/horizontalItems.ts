import {
  CircleDotIcon,
} from 'vue-tabler-icons'

export interface menu {
  header?: string
  title?: string
  icon?: any
  to?: string
  divider?: boolean
  chip?: string
  chipColor?: string
  chipVariant?: string
  chipIcon?: string
  children?: menu[]
  disabled?: boolean
  subCaption?: string
  class?: string
  extraclass?: string
  type?: string
}

const horizontalItems: menu[] = [
  {
    title: 'Blogs',
    icon: CircleDotIcon,
    to: '/apps/blog/posts',
  },
  {
    title: 'Detail',
    icon: CircleDotIcon,
    to: '/apps/blog/early-black-friday-amazon-deals-cheap-tvs-headphones',
  },
]

export default horizontalItems
