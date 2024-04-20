import {Slide} from "../slide.tsx";
import {useTranslation} from "react-i18next";

import Styles from "./title.module.css"

export function TitleSlide() {
    const {t, i18n} = useTranslation();

    return <Slide>
        <h1>{t("I18N")}</h1>
        <h3>{t("I18N_SUBTITLE")}</h3>

        <div className={Styles.languageSwitcher}>
            <span onClick={() => i18n.changeLanguage("en")}>🇬🇧</span>
            <span onClick={() => i18n.changeLanguage("nl")}>🇳🇱</span>
            <span onClick={() => i18n.changeLanguage("de")}>🇩🇪</span>
            <span onClick={() => i18n.changeLanguage("he")}>🇮🇱</span>
        </div>

        <aside className="notes">
            Speaker notes go here
        </aside>
    </Slide>
}