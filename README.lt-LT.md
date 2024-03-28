<a name="readme-top"></a>

<div align="center">

<img height="120" src="https://unpkg.com/@arietta-studio/assets-logo@latest/assets/logo-3d.webp" style="vertical-align: middle;">
<img height="120" src="https://gw.alipayobjects.com/zos/kitchen/qJ3l3EPsdW/split.svg" style="vertical-align: middle;">
<img height="120" src="https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png" style="vertical-align: middle;">

<h1>Arietta Dumi tema</h1>

dumi-theme-arietta yra dokumentacijos svetainės temos paketas, sukurtas `Dumi 2`. <br/>Jis siūlo gražesnę ir patogesnę kūrimo bei skaitymo patirtį remiantis <br/>`@arietta-studio/ui`

[![][npm-release-shield]][npm-release-link]
[![][npm-downloads-shield]][npm-downloads-link]
[![][github-releasedate-shield]][github-releasedate-link]
[![][github-action-test-shield]][github-action-test-link]
[![][github-action-release-shield]][github-action-release-link]<br/>
[![][github-contributors-shield]][github-contributors-link]
[![][github-forks-shield]][github-forks-link]
[![][github-stars-shield]][github-stars-link]
[![][github-issues-shield]][github-issues-link]
[![][github-license-shield]][github-license-link]

[Pakeitimų žurnalas](./CHANGELOG.md) · [Pranešti apie klaidą][github-issues-link] · [Pateikti funkcijos prašymą][github-issues-link]

![](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

</div>

<details>
<summary><kbd>Turinys</kbd></summary>

#### TOC

- [✨ Savybės](#-savybės)
- [📦 Įdiegimas](#-įdiegimas)
- [🤯 Naudojimas](#-naudojimas)
- [⌨️ Vietinis kūrimas](#️-vietinis-kūrimas)
- [🤝 Bendradarbiavimas](#-bendradarbiavimas)
- [🔗 Nuorodos](#-nuorodos)
  - [Daugiau produktų](#daugiau-produktų)

####

</details>

## ✨ Savybės

- [x] 🤯 **Modernus temos stilius:** Ši temos paketas naudoja modernias dizaino technikas, tokias kaip gradientinės spalvos, matinis stiklas, šviesos efektai ir natūralios animacijos, kad pateiktų sąsają paprastesniu ir vizualiai patrauklesniu būdu, padarydamas dokumentus intuityvesniais, skaitomesniais ir patogesniais naudoti.
- [x] 🌓 **Vieno mygtuko paspaudimu perjungiamas šviesios ir tamsios temos režimas:** Remiantis antd v5, pagal numatytuosius nustatymus pateikiami šviesios ir tamsios temos algoritmai, siūlantys estetiškai patrauklias ir patogias parinktis. Vartotojai gali pasirinkti temos režimą pagal savo pageidavimus ir mėgautis gera skaitymo patirtimi įvairiose apšvietimo aplinkose.
- [x] 💅 **Pagrįsta Ant Design ir CSSinJS:** Ši temos paketas naudoja antd kaip pagrindinę komponentų biblioteką ir stiliaus sprendimą įgyvendina naudodamas CSSinJS, kuris padeda geriau kontroliuoti stiliaus detales ir pagerinti stiliaus pakartotinį naudojimą bei priežiūrą. Pagrindinė antd-style biblioteka suteikia daugiau lankstumo, skaitomumo ir priežiūros paprastumo rašant stilius.
- [x] 🪄 **Išskirtinis sintaksės išryškinimas:** Ši temos paketas suteikia tikslią ir gražią sintaksės išryškinimą. Jis naudoja modernias sintaksės išryškinimo bibliotekas, pavyzdžiui, Shiki ir Prism, ir siūlo turtingą kodo išryškinimo schemų rinkinį, kad pagerintų kodo skaitomumą.
- [x] 🧩 **Lanksti komponentų pakartotinio naudojimo galimybė:** Ši temos paketas suteikia didelę lankstumą pritaikant vietines temas. Jis eksportuoja aukštos kokybės komponentus iš temos paketo, kurie gali būti naudojami kaip nepriklausomi moduliai. Kūrėjai gali laisvai derinti ir naudoti šiuos komponentus dumi vietinėje temos pakete.
- [x] 📱 **Gerai pritaikyta mobiliesiems įrenginiams:** Ši temos paketas gerai pritaikytas mobiliesiems įrenginiams. Naudojant lankstų stiliaus sprendimą pagrįstą CSSinJS, lengvai įgyvendinamos įvairios išdėstymo parinktys. Vartotojai gali mėgautis nuoseklia ir sklandžia patirtimi skirtinguose įrenginiuose.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 📦 Įdiegimas

Norėdami įdiegti `dumi-theme-arietta`, vykdykite šią komandą:

[![][bun-shield]][bun-link]

```bash
$ bun add dumi dumi-theme-arietta
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤯 Naudojimas

Naudojimas Po įdiegimo paleiskite svetainę su `dumi`, ir tema bus automatiškai įkelta naudojimui.

```ts
interface SiteThemeConfig {
  actions: HeroProps['actions'];
  apiHeader?: ApiHeaderConfig | false;
  description?: string;
  docStyle?: 'block' | 'pure';
  features: FeaturesProps['items'];
  footer?: string | false;
  footerConfig?: FooterConfig;
  giscus?: {
    category: string;
    categoryId: string;
    repo: `${string}/${string}`;
    repoId: string;
  };
  hero?: HeroConfig | Record<string, HeroConfig>;
  hideHomeNav?: boolean;
  logo?: string;
  logoType?: LogoProps['type'];
  name?: string;
  siteToken?: SiteConfigToken;
  socialLinks?: {
    discord?: `https://discord.gg/${string}`;
    github?: string;
  };
  title?: string;
}
```

> \[!PASTABA]\
> Dėl išsamesnės konfigūracijos prašome kreiptis į [📘 Tipų failą](https://github.com/arietta-studio/dumi-theme-arietta/blob/master/src/types/config.ts) / [📘 Pavyzdį](https://github.com/arietta-studio/dumi-theme-arietta/blob/master/example/.dumirc.ts).

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ⌨️ Vietinis kūrimas

Galite naudoti „Github Codespaces“ internetiniam kūrimui:

[![][github-codespace-shield]][github-codespace-link]

Arba nuklonuokite jį vietiniam kūrimui:

```bash
$ git clone https://github.com/arietta-studio/dumi-theme-arietta.git
$ cd dumi-theme-arietta
$ bun install
$ bun dev
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤝 Bendradarbiavimas

Visų tipų indėliai yra labai laukiami, jei norite prisidėti prie kodo, drąsiai peržiūrėkite mūsų „GitHub“ [Problemas][github-issues-link], kad įsitrauktumėte.

[![][pr-welcome-shield]][pr-welcome-link]

[![][github-contrib-shield]][github-contrib-link]

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🔗 Nuorodos

### Daugiau produktų

- **[🍭 Arietta UI](https://github.com/arietta-studio/arietta-ui)** - Atvirojo kodo UI komponentų biblioteka, skirta nuostabių žiniatinklio programų kūrimui.
- **[👁️ Arietta Recognition](https://github.com/Arietta-Studio/arietta-recognition)** - yra dirbtinio intelekto sistemų rinkinys, naudojamas atpažinti ir suprasti mus supantį pasaulį.
- **[👁️ Arietta Lint](https://github.com/Arietta-Studio/arietta-lint)** - ESlint, Stylelint, Commitlint, Prettier, Remark, Semantic Release konfigūracija Arietta studijai.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

---

#### 📝 Licencija

Autorių teisės © 2024 [Arietta Studio][profile-link]. <br />
Šis projektas yra licencijuotas pagal [MIT](./LICENSE) licenciją.

<!-- LINK GROUP -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-black?style=flat-square
[bun-link]: https://bun.sh
[bun-shield]: https://img.shields.io/badge/-speedup%20with%20bun-black?logo=bun&style=for-the-badge
[github-action-release-link]: https://github.com/arietta-studio/dumi-theme-arietta/actions/workflows/release.yml
[github-action-release-shield]: https://img.shields.io/github/actions/workflow/status/arietta-studio/dumi-theme-arietta/release.yml?label=release&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-action-test-link]: https://github.com/arietta-studio/dumi-theme-arietta/actions/workflows/test.yml
[github-action-test-shield]: https://img.shields.io/github/actions/workflow/status/arietta-studio/dumi-theme-arietta/test.yml?label=test&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-codespace-link]: https://codespaces.new/arietta-studio/dumi-theme-arietta
[github-codespace-shield]: https://github.com/codespaces/badge.svg
[github-contrib-link]: https://github.com/arietta-studio/dumi-theme-arietta/graphs/contributors
[github-contrib-shield]: https://contrib.rocks/image?repo=arietta-studio%2Fdumi-theme-arietta
[github-contributors-link]: https://github.com/arietta-studio/dumi-theme-arietta/graphs/contributors
[github-contributors-shield]: https://img.shields.io/github/contributors/arietta-studio/dumi-theme-arietta?color=c4f042&labelColor=black&style=flat-square
[github-forks-link]: https://github.com/arietta-studio/dumi-theme-arietta/network/members
[github-forks-shield]: https://img.shields.io/github/forks/arietta-studio/dumi-theme-arietta?color=8ae8ff&labelColor=black&style=flat-square
[github-issues-link]: https://github.com/arietta-studio/dumi-theme-arietta/issues
[github-issues-shield]: https://img.shields.io/github/issues/arietta-studio/dumi-theme-arietta?color=ff80eb&labelColor=black&style=flat-square
[github-license-link]: https://github.com/arietta-studio/dumi-theme-arietta/blob/main/LICENSE
[github-license-shield]: https://img.shields.io/github/license/arietta-studio/dumi-theme-arietta?color=white&labelColor=black&style=flat-square
[github-releasedate-link]: https://github.com/arietta-studio/dumi-theme-arietta/releases
[github-releasedate-shield]: https://img.shields.io/github/release-date/arietta-studio/dumi-theme-arietta?labelColor=black&style=flat-square
[github-stars-link]: https://github.com/arietta-studio/dumi-theme-arietta/network/stargazers
[github-stars-shield]: https://img.shields.io/github/stars/arietta-studio/dumi-theme-arietta?color=ffcb47&labelColor=black&style=flat-square
[npm-downloads-link]: https://www.npmjs.com/package/dumi-theme-arietta
[npm-downloads-shield]: https://img.shields.io/npm/dt/dumi-theme-arietta?labelColor=black&style=flat-square
[npm-release-link]: https://www.npmjs.com/package/dumi-theme-arietta
[npm-release-shield]: https://img.shields.io/npm/v/dumi-theme-arietta?color=369eff&labelColor=black&logo=npm&logoColor=white&style=flat-square
[pr-welcome-link]: https://github.com/arietta-studio/dumi-theme-arietta/pulls
[pr-welcome-shield]: https://img.shields.io/badge/%F0%9F%A4%AF%20PR%20WELCOME-%E2%86%92-ffcb47?labelColor=black&style=for-the-badge
[profile-link]: https://github.com/arietta-studio
