import {Slide} from "../slide.tsx";
import {useTranslation} from "react-i18next";

import Styles from "./translatingText.module.css";
import {CodeBlock} from "../components/codeblock.tsx";
import {ExamplePropertyApp} from "../components/examplePropertyApp.tsx";

export function TranslatingTextSlide() {
    const {t, i18n} = useTranslation();

    const usedKeys = ["TRANSLATING_TEXT", "FIND_A_PROPERTY", "APP_PRICE", "APP_PRICE_UPPER_BOUND", "APP_NUMERIC_FILTER", "APP_BEDROOMS", "APP_BATHROOMS", "APP_GARAGE", "APP_SEARCH", "APP_BEDROOMS"];
    const code = (lang: string) => usedKeys.reduce<Record<string, string>>((acc, key) => {
        acc[key] = i18n.getResource(lang, "demo", key);
        return acc;
    }, {});

    return <Slide data-background-color="rgb(29, 83, 110)">
        <Slide>
            <h1>{t("TRANSLATING_TEXT")}</h1>
            <div className={Styles.split}>
                <div className={"fragment"}>
                    <ExamplePropertyApp lang={"en"}/>
                </div>
                <div>
                    <div className={"fragment"}>
                        <CodeBlock code={code("en")}/>
                    </div>
                </div>
            </div>
        </Slide>
        <Slide>
            <h1>{t("TRANSLATING_TEXT")}</h1>
            <div className={Styles.split}>
                <div>
                    <ExamplePropertyApp lang={"vi"}/>
                </div>
                <div>
                    <div>
                        <CodeBlock code={code("vi")}/>
                    </div>
                </div>
            </div>
        </Slide>
    </Slide>
}