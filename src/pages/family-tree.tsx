import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { darken, lighten } from 'polished';
import React from 'react';
import Page from '../templates/page';
import { colors } from '../styles/colors';

interface PageProps {
  data: {
    images: {
      nodes: Array<{
        name: string;
        childImageSharp: {
          fluid: FluidObject;
        };
      }>;
    };
  };
}

type PageImageProps = {
  name: string;
  title?: string;
  width?: number | undefined;
  height?: number | undefined;
} & PageProps;

const ImageWrap: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
      `}
    >
      {children}
    </div>
  );
};

const PageImage: React.FC<PageImageProps> = ({ name, title, width = 450, height = 450, data }) => {
  const image = data.images.nodes.find(x => x.name === name);
  if (!image) {
    return null;
  }

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        padding: 1rem;
        margin: 1rem;
        background-color: ${darken('0.1', '#fff')};

        @media (prefers-color-scheme: dark) {
          background-color: ${lighten('0.01', colors.darkmode)};
        }

        a,
        a:hover {
          text-decoration: none;
          box-shadow: none;
        }

        .gatsby-image-wrapper {
          width: ${width}px;
          height: ${height}px;

          img {
            margin: 0;
            padding: 0;
            object-fit: contain !important;
          }
        }

        .image-title {
          text-align: center;
          margin-top: 1rem;
          width: ${width}px;
        }
      `}
    >
      <a href={image?.childImageSharp.fluid.src}>
        <Img fluid={image?.childImageSharp.fluid} title={title} />
      </a>
      {title && <div className="image-title">{title}</div>}
    </div>
  );
};

const FamilyTree: React.FC<PageProps> = ({ data }) => {
  return (
    <Page title="Family Tree - Porodicno Stablo">
      <>
        <ImageWrap>
          <PageImage name="ftg" title="Georgonji" data={data} />
          <PageImage name="fti" title="Iljionji" data={data} />
        </ImageWrap>

        <h2>Ilic Family - Iljionji - Ilici</h2>

        <ImageWrap>
          <PageImage name="il" title="Iljionji" data={data} />
        </ImageWrap>

        <p>Family tree ILIC - family from 1800 to 2002.</p>
        <p>
          Mainly, the middle tree shows offspring only along the male line. The right and left
          branches of the tree show both male and female offspring until 2002 of all today&apos;s
          relatives of Ilica, which is still respected by older generations.
        </p>
        <p>
          Due to lack of data, some fields were left blank. Also, minor mistakes of some names are
          possible.
        </p>
        <p>
          Based on some old records from 1818, the first ancestor named BACILO came from Krivelj.
          The surname is not mentioned, he celebrated Saint Olympia like most of today&apos;s Ilica.
          This information is not shown in the image (found later). He had two sons, the first left
          branch of his offspring and today they are called Basiloni. Their last name is Ilic, and
          one of their families after the fifth generation changes their surname to Petrovic in
          order to preserve the memory of their grandfather, that is, great-grandfather Petar. After
          the name of the second heir of Elijah (Ilija), his descendants are later called ILJIONJI,
          which remains to this day.
        </p>
        <p>
          The case of changing the surname also occurs with the Simeonovic family, where they change
          the surname to Mihajlovic, after the name of their grandfather, Mihajlo.
        </p>

        <hr />

        <p>Porodicno stablo ILIC — familije od 1800 do 2002 godine.</p>
        <p>
          Glavno, sredje stablo prikazuje potomstvo samo po muskoj liniji. Desne i leve grane stabla
          prikazuju i musko i zensko potomstvo do 2002 godine svih danasnjih srodnika Ilica, sto se
          i danas postuje kod starijih generacija.
        </p>
        <p>
          Zbog nedostatka podataka, izvesna polja su ostala prazna. Takodje, moguce su i manje
          greske nekih imena.
        </p>
        <p>
          Na osnovu nekih starih zapisa iz 1818 godine, prvi predak po imenu BACILO, dosao je iz
          Krivelja. Prezime se ne pominje, slavio je svetog Alimpiju kao i vecina danasnjih Ilica.
          Ovaj podatak nije prikazan na skici (pronadjen kasnije). Imao je dva sina, prva leva grana
          njegovog potomstva i danas se zovu Basilonji. Prezivaju se Ilic, a jedna njihova familija
          posle pete generacije menja prezime u Petrovic da bi sacuvali secanje na dedu, odnosno
          pradedu Petra. Po imenu drugog naslednika Ilije (Iljij), njegovi potomci se kasnije
          nazivaju ILJIONJI, sto ostaje do dana danasnjeg.
        </p>
        <p>
          Slucaj promene prezimena javlja se i kod familije Simeonovic, gde menjaju prezime u
          Mihajlovic, po imenu dede, Mihajla.
        </p>

        <ImageWrap>
          <PageImage
            name="stana_ilic_petkovic"
            title="Ljuba (Ilic) Petkovic - Petkonji iz Jasikova"
            width={300}
            height={300}
            data={data}
          />
          <PageImage
            name="iljenka_ilic_gicic"
            title="Iljenka (Ilic) Gicic - Giconji iz Vlaola"
            width={300}
            height={300}
            data={data}
          />
          <PageImage
            name="milan_ilic_1889_1957_"
            title="Milan Ilic (1889-1957), Iljionji iz Jasikova"
            width={300}
            height={300}
            data={data}
          />
          <PageImage
            name="marica_1910-1938_janko_1907-1998_ilic"
            title="Janko Ilic (1907-1998) i supruga, Marica (Stankovic) Ilic (1910-1938)"
            width={300}
            height={300}
            data={data}
          />
          <PageImage
            name="dimitrije_marica_ilic"
            title="Dimitrije Ilic (1929- ) i supruga, Marica (Djordjevic) Ilic (1935-2001)"
            width={300}
            height={300}
            data={data}
          />
          <PageImage
            name="svetlana_ljubomir_ilic"
            title="Ljubomir Ilic i supruga, Svetlana (Jorgovanovic) Ilic. (foto-1978)"
            width={300}
            height={300}
            data={data}
          />
          <PageImage
            name="ilici2006"
            title="Svetlana i Ljubomir Ilic, i sinovi Sladjan i Srdjan Ilic. (foto-2006)"
            width={300}
            height={300}
            data={data}
          />
        </ImageWrap>

        <h2>
          Marija and her descendants in Jasikovo and Vlaole - Marija i njeni potomci u Jasikovo i
          Vlaole
        </h2>

        <ImageWrap>
          <PageImage name="ma" title="Marija" data={data} />
        </ImageWrap>

        <p>MARIJA and her descendants - wife of PETER ILIC.</p>
        <p>
          Maria comes from the neighboring village of Vlaola. After the death of her first husband
          German Vladic from Vlaole, she remarried to Petar Ilic in Jasikovo. She left two sons in
          Vlaole, and in Jasikovo she had three daughters and one son.
        </p>
        <p>
          The image above shows all the descendants who have their roots in both Vlaole and Jasikovo
          until 2002.
        </p>

        <hr />

        <p>MARIJA i njeni potomci - supruga PETRA ILIC-a.</p>
        <p>
          Marija potice iz susednog sela Vlaola. Posle pogibije njenog prvog supruga Germana Vladica
          iz Vlaola, ona se preudaje za Petra Ilica u Jasikovo. U Vlaole ostavlja dva sina, a u
          Jasikovo imala je tri kcerke i jednog sina.
        </p>
        <p>
          Na skici su prikazani svi potomci koji vuku njen koren i u Vlaole i u Jasikovo do 2002
          godine.
        </p>

        <h2>Marija Stanojevic - Iljionji</h2>

        <ImageWrap>
          <PageImage name="ma" title="Iljionji" data={data} />
          <PageImage
            name="milanstanailic"
            title="Milan Ilic (1889-1957) i supruga, Stana (Adamovic) Ilic (1895-1962) iz drugog braka"
            data={data}
          />
        </ImageWrap>

        <p>MARIJA Stanojevic (1888 - 1920) - wife of MILAN ILIC (1889 - 1957).</p>
        <p>
          Marija Stanojevic comes from the Stanojevic family (her family was also called Iljionji).
          The image above shows her origin and relatives, as well as her descendants.
        </p>
        <p>
          At a young age she was tragically killed leaving two small children. The custom that was
          then to exhume the deceased after a few days, contributed to the tragedy being greater.
          Maria was pregnant, close to giving birth before the murder. Two dead born female babies
          were found in the coffin. The tragedy takes place a year after the return of Milan Ilic
          from the first st. Rate. Seven years in the war, a Thessalonian with two decorations.
          Milan Ilic later married Stan Adamovic (Adamonji) from Jasikovo. They had no offspring.
        </p>

        <hr />

        <p>MARIJA Stanojevic (1888 - 1920) - supruga MILANA ILIC-a (1889 - 1957).</p>
        <p>
          Marija Stanojevic potice iz familije Stanojevic (njena se familija isto zvala Iljionji).
          Na skici je prikazano njeno poreklo i srodnici, kao i njeni potomci.
        </p>
        <p>
          U mladim godinama bila je tragicno ubijena ostavivsi dvoje male dece. Obicaj koji je tada
          bio da se pokojnik otkopa posle par dana, doprineo je da tragedija bude veca. Marija je
          bila trudna, blizu porodjaja pre ubistva. U kovcegu su pronasli dve mrtve porodjene zenske
          bebe. Trgedija se dogadja godinu dana nakom povratna Milana Ilica iz prvog sv. Rata. Sedam
          godine u ratu, solunac sa dva odlikovanja. Milan Ilic se kasnije zeni Stanom Adamovic
          (Adamonji) iz Jasikova. Nisu imali potomstvo.
        </p>

        <h2>Marica Stankovic - Georganji i Adamonji</h2>

        <ImageWrap>
          <PageImage name="dg" title="Georganji" data={data} />
          <PageImage
            name="marica_stankovic_1910-1938"
            title="Marica Stankovic (1910-1938), Georganji iz Jasikova"
            data={data}
          />
        </ImageWrap>

        <p>MARICA Stankovic (1910 - 1938) - wife of JANKA ILIC. (1907 - 1998).</p>
        <p>
          Marica Stankovic comes from the Stankovic-Georganji family. The image shows her relatives
          and descendants. Also, the origin and relatives of her mother from the Adamovic-Adamonji
          family are shown here.
        </p>
        <p>
          Marica died of the disease at a young age, leaving three small children. Janko Ilic later
          married Ljubica Nikolic from Jasikovo. They had no offspring.
        </p>

        <hr />

        <p>MARICA Stankovic (1910 - 1938) - supruga JANKA ILIC-a. (1907 - 1998).</p>
        <p>
          Marica Stankovic potice iz familije Stankovic-Georganji. Na skici su prikazani njeni
          srodnici i potomci. Takodje, ovde je prikazano poreklo i srodnici njene majke iz familije
          Adamovic-Adamonji.
        </p>
        <p>
          Marica zbog bolesti umire u mladim godinama, ostavivsi troje male dece. Janko Ilic se
          kasnije zeni Ljubicom Nikolic iz Jasikova. Nisu imali potomstvo.
        </p>

        <h2>Georgonji - family tree - Georgonji - porodicno stablo</h2>

        <ImageWrap>
          <PageImage name="ge" title="Georgonji" data={data} />
          <PageImage
            name="manojlostanadjordjevic"
            title="Manojlo Djordjevic (1885-1959) , Stana (Peric) Djordjevic iz sela Vlaola (1894-1975)"
            data={data}
          />
          <PageImage
            name="marica_1950"
            title="Marica Djordjevic (1935-2001), Georgonji iz Jasikova Mihajlo Djordjevic (1912-1989) i Sandra (Nikolajevic) Djordjevic (1916-1987)"
            data={data}
          />
          <PageImage
            name="sandamihajlodjordjevic"
            title="Mihajlo Djordjevic (1912-1989) i Sandra (Nikolajevic) Djordjevic (1916-1987)"
            data={data}
          />
        </ImageWrap>

        <p>
          MARICA Djordjevic (1935 - 2001), wife of DIMITRIJA ILIC (1929 -), comes from the
          Djordjevic-Georgonji family.
        </p>
        <p>
          The image shows a Djordjevic tree from around 1830 to 2001. In addition to the main tree,
          all relatives of Djordjevic until 2001 are shown on both the right and left sides.
        </p>

        <hr />

        <p>
          MARICA Djordjevic (1935 - 2001), supruga DIMITRIJA ILIC-a (1929 -), potice iz familije
          Djordjevic-Georgonji.
        </p>
        <p>
          Na skici je prikazano stablo Djordjevica iz negde 1830 godine do 2001 godine. Pored
          glavnog stabla i sa desne i sa leve strane prikazani su svi srodnici Djordjevica do 2001
          godine.
        </p>
      </>
    </Page>
  );
};

export const query = graphql`
  query {
    images: allFile(
      filter: {
        relativeDirectory: { eq: "img/ft" }
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
      }
    ) {
      nodes {
        name
        childImageSharp {
          fluid(maxWidth: 1240) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export default FamilyTree;
