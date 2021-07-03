import React from "react";
import Link from "./Link";

const Header = () => {
    return (
        <div class="ui top fixed menu">
            <Link href="/" className="item">
                Accordion
            </Link>
            <Link href="/dropdown" className="item">
                Dropdown
            </Link>
            <Link href="/translate" className="item">
                Translate
            </Link>
            <Link href="/translate-wiki" className="item">
                TranslateWiki
            </Link>
        </div>
    );
};

export default Header;
