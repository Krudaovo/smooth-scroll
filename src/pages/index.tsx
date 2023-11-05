import React, { useEffect } from 'react';
import Layout from '../components/layout';
import Image from '../components/image';
import BlankSection from '../components/blank-section';
import { graphql, PageProps, HeadProps } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { hoveredImage } from '../gsap/animation';

export type DataTypes = {
  allFile: {
    edges: {
      map(arg0: (image: any, i: number) => React.JSX.Element): React.ReactNode;
      node: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
  }
  site: {
    siteMetadata: {
      title: string
      description: string
      lang: string
      siteUrl: string
      themeColor: string
      charset: string
    }
  }
  file: {
    childImageSharp: {
      fixed: {
        src: string
      }
    }
  }
};
export default function Home({ data }: PageProps<DataTypes>) {

  useEffect(() => {
    for (let i = 0; i < Object.keys(data.allFile.edges).length; i++) {
      hoveredImage(`.image${i}`, `.image-description${i}`);
    }
  }, []);

  const imageDescription = [
    'She is a beautiful woman with deep blue eyes and golden hair. Her eyes are as clear as the ocean, and they are inviting to those who gaze into them. Her hair shines in the sunlight. Her face is white and smooth with a small nose and full lips. Her expression is gentle, calm, and smiling. She wears a pink, floral print dress that gives her a feminine look. She is posing in nature. In the background are green meadows and blue skies. She is waving happily at the camera. She is not only a Western-style woman with beautiful eyes, but also an attractive personality.',
    'He is a young man with dark skin and short hair. His eyes are brown and large, focused on the distant landscape. His nose is high and sleek, balancing his face. His lips are thin and soft. His expression is calm and composed, as if he is contemplating something. He wears a white shirt and blue jeans, giving him a casual air. He stands with his hands in his pockets. In the background is a clear blue sky and white clouds. On the horizon, mountains, forests, and buildings can be seen. He seems to be far away from the hustle and bustle of the city. He is not only a young black man staring into the distance with a clear sky in the background, but this photo gives the impression of someone who is working toward his dreams and goals.',
    'He is a man with red paint on his face. His paint represents the traditional culture and beliefs of his tribe. His eyes are full of sorrow and pain, and tears are spilling out. His mouth is tightly knit, suppressing unspoken emotions. His expression shows deep contrition and helplessness. He wears a black shirt and holds his hands to his chest. In the background, we see a dark colored wall. He seems to be worried that something bad has happened to his tribe or family. He is not only a person with tribal-like paint on his face, but the photo also shows human weakness and fragility.',
    'She is an attractive woman with white skin and red hair. Her eyes are green and large, shining in the light of the forest. Her nose is small and pretty, adorning the center of her face. Her lips are pink and full, with a sweet smile. Her expression is happy and joyful, and she looks confident for the camera. She is wearing a black top and jeans, simple but stylishly coordinated. She poses with her hands around her face. Her hands emphasize the shape and features of her face. In the background, we see green trees, grass, and flowers. She seems to be relaxing in nature. She is not only a woman of European descent posing with her hands around her face in the forest, but she is expressing her own charm and personality in this photo.'
  ];

  return (
    <>
      <Layout>
        <BlankSection>Smooth Scroll</BlankSection>
        <div className={`w-full py-[100vh]`}>
          <div className='w-full grid justify-items-center'>
            {data.allFile.edges.map((image, i) => {
              return <Image
                key={i}
                image={image.node.childImageSharp.gatsbyImageData}
                dataSpeed={'1'}
                imageDescription={imageDescription[i]}
                i={i} />
            })}
          </div>
        </div>
        <BlankSection>Thank you</BlankSection>
      </Layout>
    </>
  );
};
export const Head = (props: HeadProps<DataTypes>) => (
  <>
    <html lang={props.data.site.siteMetadata.lang} />
    <title>{props.data.site.siteMetadata.title}</title>
    <meta charSet={props.data.site.siteMetadata.charset} />
    <meta name='viewport' content='width=device-width,initial-scale=1' />
    <meta name='description' content={props.data.site.siteMetadata.description} />
    <meta property='og:title' content={props.data.site.siteMetadata.title} />
    <meta property='og:description' content={props.data.site.siteMetadata.description} />
    <meta property='og:url' content={props.data.site.siteMetadata.siteUrl} />
    <meta property='og:image' content={`${props.data.site.siteMetadata.siteUrl}/${props.data.file.childImageSharp.fixed.src}`} />
    <meta property='og:type' content='product' />
    <meta property='og:site_name' content={props.data.site.siteMetadata.title} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name='twitter:site' content='@IKEDA__JS' />
    <meta name='robots' content='noindex,nofollow' />
  </>
)
export const query = graphql`
  query MyQuery {
    allFile (filter: {extension: {eq: "jpg"}}) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, quality: 100)
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        lang
        siteUrl
        themeColor
        charset
      }
    }
    file(relativePath: {eq: "1f4cea5b9ec54c7f9f83501b9b139fe5.png"}) {
      childImageSharp {
        fixed {
          src
        }
      }
    }
  }
`