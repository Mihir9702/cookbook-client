export interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAVITEMS: Array<NavItem> = [
  {
    label: `View Recipes`,
    children: [
      {
        label: 'Categories',
        subLabel: 'Navigate selections to fit your needs',
        href: '/categories'
      },
      {
        label: 'Recipes',
        subLabel: 'Hundreds for recipes to choose from',
        href: '/recipes'
      }
    ]
  },
  {
    label: 'Sign in',
    href: '/login'
  },
  {
    label: 'Sign up',
    href: '/signup'
  }
]

export default NAVITEMS
