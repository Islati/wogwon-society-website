import {cva} from 'class-variance-authority'

export {default as NavigationMenu} from './NavigationMenu.vue'
export {default as NavigationMenuList} from './NavigationMenuList.vue'
export {default as NavigationMenuItem} from './NavigationMenuItem.vue'
export {default as NavigationMenuTrigger} from './NavigationMenuTrigger.vue'
export {default as NavigationMenuContent} from './NavigationMenuContent.vue'
export {default as NavigationMenuLink} from './NavigationMenuLink.vue'
export const navigationMenuTriggerStyle = cva(
    'group inline-flex w-max items-center justify-center bg-transparent px-4 text-sm font-medium text-gray-200 transition-all duration-300 ease-in-out hover:text-white focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 hover:',
);
