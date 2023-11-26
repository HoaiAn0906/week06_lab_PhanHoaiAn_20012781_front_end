import {
  ChartPieIcon,
  CoffeeIcon,
  CpuIcon,
  FlagIcon,
  BasketIcon,
  ApertureIcon,
  LayoutGridIcon,
  BoxIcon,
  Message2Icon,
  FilesIcon,
  CalendarIcon,
  UserCircleIcon,
  ChartBarIcon,
  ShoppingCartIcon,
  ChartLineIcon,
  ChartAreaIcon,
  ChartDotsIcon,
  ChartArcsIcon,
  ChartCandleIcon,
  ChartDonut3Icon,
  ChartRadarIcon,
  LayoutIcon,
  CardboardsIcon,
  PhotoIcon,
  FileTextIcon,
  BoxAlignBottomIcon,
  BoxAlignLeftIcon,
  FileDotsIcon,
  EditCircleIcon,
  AppsIcon,
  BorderAllIcon,
  BorderHorizontalIcon,
  BorderInnerIcon,
  BorderTopIcon,
  BorderVerticalIcon,
  BorderStyle2Icon,
  LoginIcon,
  UserPlusIcon,
  RotateIcon,
  ZoomCodeIcon,
  SettingsIcon,
  AlertCircleIcon,
  BrandTablerIcon,
  CodeAsterixIcon,
  BrandCodesandboxIcon,
  CircleDotIcon,
} from 'vue-tabler-icons'

export interface menu {
  header?: string
  title?: string
  icon?: any
  to?: string
  chip?: string
  chipBgColor?: string
  chipColor?: string
  chipVariant?: string
  chipIcon?: string
  children?: menu[]
  disabled?: boolean
  type?: string
  subCaption?: string
}

const sidebarItem: menu[] = [
  { header: 'Home' },
  { header: 'Apps' },
  {
    title: 'Blog',
    icon: ChartDonut3Icon,
    to: '/blog',
    children: [
      {
        title: 'Posts',
        icon: CircleDotIcon,
        to: '/apps/blog/posts',
      },
      {
        title: 'Detail',
        icon: CircleDotIcon,
        to: '/apps/blog/early-black-friday-amazon-deals-cheap-tvs-headphones',
      },
    ],
  },
]

export default sidebarItem
