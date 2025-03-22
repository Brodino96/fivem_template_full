import Config from "./config"

//@ts-ignore
const jsonData = LoadResourceFile(GetCurrentResourceName(), `/locales/${Config.locale}.json`)
const Locale = JSON.parse(jsonData)

export default function L(index: string) {
    return Locale[index]
}
