// next-seo.config.ts
import { DefaultSeoProps } from "next-seo";

const SEO: DefaultSeoProps = {
    titleTemplate: "%s | Torre Profiles",
    defaultTitle: "Torre Profiles",
    description: "Search professionals and explore profiles on Torre.",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://torre-profiles.vercel.app/",
        siteName: "Torre Profiles",
    },
    twitter: {
        handle: "@torre",
        site: "@torre",
        cardType: "summary_large_image",
    },
};

export default SEO;
