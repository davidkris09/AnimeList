import { Navigation, MenuBar } from "@/styles/styles"

export default function Nav () {
    return (
        <Navigation>
            <MenuBar href="/" className="marg">
                Home
            </MenuBar>
            <MenuBar href="/collections">
                Collections
            </MenuBar>
        </Navigation>
    )
}