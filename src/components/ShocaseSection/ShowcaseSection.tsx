import { ShowCard } from "../ShowCard/ShowCard.tsx";
import styles from './ShowcaseSection.module.css'

export const ShowcaseSection = () => {
    return (
        <div className={styles.showcaseWrapper}>
            <div className={styles.showcaseContainer}>
                <ShowCard
                    img="/cardAssets/3Dprintednotebook_207212a4-5555-4c82-8caf-d18b0ea685f7.webp"
                    title="Универсальная тетрадь, напечатанная на 3D принтере. Удобный и практичный материал и многофункциональный дизайн "
                />
                <ShowCard
                    img="/cardAssets/Deskrailstlpack_3ed0ddfd-1252-4744-8865-c4bd909d6a49.webp"
                    title="Многофункциональный держатель на стол. Формат рельсы повышает сценарии использования и увеличивает комфорт использования"
                />
                <ShowCard
                    img="/cardAssets/Shopify-02287.webp"
                    title="Механические настольные часы, напечатанные на 3D принтере. Удобны в использовании и легки в кастомизации"
                />
                <ShowCard
                    img="/cardAssets/Shopify-8035.webp"
                    title="Держатель для клавиатуры. Практичный и удобный, позволяет закрепить множество разных вещей прямо на клавиатуре"
                />
                <ShowCard
                    img="/cardAssets/Shopify-07169.webp"
                    title="Стойка-держатель для стола. Удобная кастомизируемая стойка, позволяющая настроить её конфигурацию как угодно"
                />
                <ShowCard
                    img="/cardAssets/3Dprintednotebook_207212a4-5555-4c82-8caf-d18b0ea685f7.webp"
                    title="Универсальная тетрадь, напечатанная на 3D принтере. Удобный и практичный материал и многофункциональный дизайн "
                />
                <ShowCard
                    img="/cardAssets/Deskrailstlpack_3ed0ddfd-1252-4744-8865-c4bd909d6a49.webp"
                    title="Многофункциональный держатель на стол. Формат рельсы повышает сценарии использования и увеличивает комфорт использования"
                />
            </div>
        </div>
    );
};
