import { Navbar } from "./components/Navbar/Navbar.tsx";
import { SectionBlock } from "./components/SectionBlock/SectionBlock.tsx";
import { TextSection } from "./components/TextSection/TextSection.tsx";
import { ButtonSection } from "./components/ButtonSection/ButtonSection.tsx";
import { ModalBlock } from "./components/ModalBlock/ModalBlock.tsx";
import { ShowcaseSection } from "./components/ShocaseSection/ShowcaseSection.tsx";
import { FooterBar } from "./components/FooterBar/FooterBar.tsx";
import { SchemaSection } from "./components/SchemaSection/SchemaSection.tsx";

import { SVG_FIRST, SVG_SECOND, SVG_THIRD, SVG_FOURTH, SVG_FIVE } from "./components/shared/Patterns";

function App() {
    const menuLinks = [
        { label: "Текстовый блок", href: "#Текстовый блок" },
        { label: "Кнопочный блок", href: "#Кнопочный блок" },
        { label: "Блок схемы", href: "#Блок схемы" },
        { label: "Блок витрины", href: "#Блок витрины" },
        { label: "Блок модалки и чёрной страницы", href: "#Блок модалки и чёрной страницы" }
    ];

    return (
        <>
            <Navbar links={menuLinks} />
            <main style={{ display: 'grid', gap: '10px' }}>
                <SectionBlock bgSvg={SVG_FIRST} sectionText="Текстовый блок">
                    <TextSection />
                </SectionBlock>

                <SectionBlock bgSvg={SVG_SECOND} sectionText="Кнопочный блок">
                    <ButtonSection />
                </SectionBlock>

                <SectionBlock bgSvg={SVG_THIRD} sectionText="Блок схемы">
                    <SchemaSection></SchemaSection>
                </SectionBlock>

                <SectionBlock bgSvg={SVG_FOURTH} sectionText="Блок витрины">
                    <ShowcaseSection />
                </SectionBlock>

                <SectionBlock bgSvg={SVG_FIVE} sectionText="Блок модалки и чёрной страницы">
                    <ModalBlock />
                </SectionBlock>

            </main>
            <FooterBar />
        </>
    );
}

export default App;
