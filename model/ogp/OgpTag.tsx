import { VFC } from 'react'
import Head from 'next/head'

export interface OpgMetaData {
    pageTitle?: string
    pageDescription?: string
    pagePath?: string
    pageImg?: string
    pageImgWidth?: number
    pageImgHeight?: number

}

interface Props {
    ogpInfo: OpgMetaData
}

const OgpTag = (props: Props) => {
    if (!props.ogpInfo) return <div />
    const {
        pageTitle,
        pageDescription,
        pagePath,
        pageImg,
        pageImgWidth,
        pageImgHeight
    } = props.ogpInfo
    const title = pageTitle || "PresenShare"
    const description = pageDescription || "スライドをアップロードしてプレゼンを始めよう"
    const url = pagePath
    const imgUrl = pageImg || '/static/default_ogp.png'
    const imgWidth = pageImgWidth ? pageImgWidth : 1280
    const imgHeight = pageImgHeight ? pageImgHeight : 640

    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width,initial-scale=1.0" />
            <meta name="description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={imgUrl} />
            <meta property="og:image:width" content={String(imgWidth)} />
            <meta property="og:image:height" content={String(imgHeight)} />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&amp;display=swap"
                rel="stylesheet"
            />
            <link rel="canonical" href={url} />
        </Head>
    )
}

export default OgpTag