import React from 'react'
import Button from 'elements/Button'
import BrandIcon from 'parts/IconText'

export default function Header(props) {
    console.log(props);
    const getNavLinkClass = path => {
        console.log(typeof (path));
        // console.log(props.location.pathname);
        // console.log(props.location.pathname === path);
        return props.location.pathname === path ? "active" : ""
    }


    return (
        <header className="spacing-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light pl-0">
                    <BrandIcon />
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item ${getNavLinkClass("/")}`}>
                                <Button className="nav-link" type="link" href="/">Home</Button>
                            </li>
                            <li className={`nav-item ${getNavLinkClass("/browse-by")}`}>
                                <Button className="nav-link" type="link" href="/browse-by">Browse By</Button>
                            </li>
                            <li className={`nav-item ${getNavLinkClass("/stories")}`}>
                                <Button className="nav-link" type="link" href="/stories">Strories</Button>
                            </li>
                            <li className={`nav-item ${getNavLinkClass("/agents")}`}>
                                <Button className="nav-link" type="link" href="/agents">Agents</Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}
