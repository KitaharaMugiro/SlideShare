import { useTranslations } from "next-intl";

export default () => {
    const t = useTranslations('Slide');
    return <div>
        {t("no-mobile")} <br />
        {t("please-from-pc")}</div>
}