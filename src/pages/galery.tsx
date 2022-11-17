import React from 'react';
import styled from '@emotion/styled';
import Page from '../templates/page';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px dotted #aaa;
  margin-bottom: 3rem;

  img {
    margin: 1rem auto 4rem auto;
    min-width: 160px;
  }
`;

const ImageContent = styled.div`
  display: flex;
  margin-right: 3rem;
`;

const Description = styled.div`
  display: flex;
`;

const MetaContent = styled.div`
  font-size: 1.5rem;
`;

const Galery: React.FC = () => (
  <Page title="Galery - Galerija">
    <>
      {/* <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/20141223"
              title="2014-12-23"
            >
              <img src="https://i0.wp.com/lh6.googleusercontent.com/-HkUtmLDtwOQ/VJksjM7dlCE/AAAAAAAAJXM/15KkzsOzXfs/s160-c/20141223.jpg?fit=300%2C300&amp;ssl=1" />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/20141223">2014-12-23</a>
            </div>
            <MetaContent>
              <div>Location: </div>
              <div>Published: 23/12/2014 7:49:16 PM</div>
              <div>Number of Photos in Album: 1</div>
            </MetaContent>
          </div>
        </Description>
      </Row> */}
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/TheGreenHouse"
              title="The Green House"
            >
              <img
                title="The Green House"
                src="https://i2.wp.com/lh4.googleusercontent.com/-VUO1nH3vgro/VGso4I4ZYcE/AAAAAAAAJU8/5IsQNeIgyDI/s160-c/TheGreenHouse.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/TheGreenHouse">
                The Green House
              </a>
            </div>
            <MetaContent>
              <div>Location: </div>
              <div>Published: 15/03/2014 1:32:53 PM</div>
              <div>Number of Photos in Album: 116</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/OffRoadCars"
              title="Off Road Cars"
            >
              <img
                title="Off Road Cars"
                src="https://i2.wp.com/lh4.googleusercontent.com/-O5QgzSD-1t0/UoduiTMgPUE/AAAAAAAADfI/gJhhc4Hru9I/s160-c/OffRoadCars.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/OffRoadCars">
                Off Road Cars
              </a>
            </div>
            <MetaContent>
              <div>Location: </div>
              <div>Published: 19/10/2013 11:20:54 AM</div>
              <div>Number of Photos in Album: 37</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/LetIznatSrbieIstocno"
              title="Let iznat Srbie, istocno"
            >
              <img
                title="Let iznat Srbie, istocno"
                src="https://i1.wp.com/lh3.googleusercontent.com/-RJmvnRj2Atw/UoSbOdt-lSE/AAAAAAAADZc/_qcWfsi8SJc/s160-c/LetIznatSrbieIstocno.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/LetIznatSrbieIstocno">
                Let iznat Srbie, istocno
              </a>
            </div>
            <MetaContent>
              <div>Location: SERBIA/Belgrade/East</div>
              <div>Published: 7/09/2013 2:28:46 PM</div>
              <div>Number of Photos in Album: 70</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/KANjONCRNEReke2013"
              title="KANjON CRNE Reke - 2013"
            >
              <img
                title="KANjON CRNE Reke - 2013"
                src="https://i2.wp.com/lh4.googleusercontent.com/-UIgY5CT2JD8/Ulo2WGxqPUE/AAAAAAAAI4Y/9ehUTpgVaYM/s160-c/KANjONCRNEReke2013.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/KANjONCRNEReke2013">
                KANjON CRNE Reke - 2013
              </a>
            </div>
            <MetaContent>
              <div>Location: Homolje/Serbia</div>
              <div>Published: 31/08/2013 5:52:06 PM</div>
              <div>Number of Photos in Album: 301</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/HOMOLjEBiger2013"
              title="HOMOLjE - Biger - 2013"
            >
              <img
                title="HOMOLjE - Biger - 2013"
                src="https://i0.wp.com/lh6.googleusercontent.com/-0rU2ffzQuu0/Uk6jlZFHuUE/AAAAAAAAI4o/TvJXWqYYrOg/s160-c/HOMOLjEBiger2013.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/HOMOLjEBiger2013">
                HOMOLjE - Biger - 2013
              </a>
            </div>
            <MetaContent>
              <div>Location: Jasikovo/Serbia</div>
              <div>Published: 20/08/2013 8:52:25 AM</div>
              <div>Number of Photos in Album: 167</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/KrupajaVelikiBukLisineSrbija2013"
              title="Krupaja - Veliki Buk - Lisine -- Srbija 2013"
            >
              <img
                title="Krupaja - Veliki Buk - Lisine -- Srbija 2013"
                src="https://i0.wp.com/lh5.googleusercontent.com/-b0ghZcAxw_Y/Uzfxb3pTYKE/AAAAAAAAGeU/I0BnMg0kXAU/s160-c/KrupajaVelikiBukLisineSrbija2013.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/KrupajaVelikiBukLisineSrbija2013">
                Krupaja - Veliki Buk - Lisine — Srbija 2013
              </a>
            </div>
            <MetaContent>
              <div>Location: Serbia</div>
              <div>Published: 14/08/2013 3:55:56 PM</div>
              <div>Number of Photos in Album: 140</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/BELIZVORACIstocnaSrbija2013"
              title="BELIZVORAC - Istocna Srbija 2013"
            >
              <img
                title="BELIZVORAC - Istocna Srbija 2013"
                src="https://i2.wp.com/lh4.googleusercontent.com/-E5I5s0yerJE/Ujr4r9Jbc_E/AAAAAAAAHVE/jevCnHXzpSM/s160-c/BELIZVORACIstocnaSrbija2013.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/BELIZVORACIstocnaSrbija2013">
                BELIZVORAC - Istocna Srbija 2013
              </a>
            </div>
            <MetaContent>
              <div>Location: SERBIA</div>
              <div>Published: 6/08/2013 7:43:38 AM</div>
              <div>Number of Photos in Album: 118</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/AUSTRALIA201220132014"
              title="AUSTRALIA  2012-2013-2014"
            >
              <img
                title="AUSTRALIA  2012-2013-2014"
                src="https://i1.wp.com/lh6.googleusercontent.com/-oWZglcufWkk/U9twVOlzU_E/AAAAAAAAI3w/ojWD_2UduuY/s160-c/AUSTRALIA201220132014.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/AUSTRALIA201220132014">
                AUSTRALIA 2012-2013-2014
              </a>
            </div>
            <MetaContent>
              <div>Location: </div>
              <div>Published: 18/11/2012 8:36:26 AM</div>
              <div>Number of Photos in Album: 402</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/KanjonRekeJagnila"
              title="Kanjon Reke Jagnila"
            >
              <img
                title="Kanjon Reke Jagnila"
                src="https://i2.wp.com/lh4.googleusercontent.com/-J-V_Dlwypu0/UZzHj5xpbIE/AAAAAAAAI2Q/QhCVdjF8sAo/s160-c/KanjonRekeJagnila.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/KanjonRekeJagnila">
                Kanjon Reke Jagnila
              </a>
            </div>
            <MetaContent>
              <div>Location: Jasikovo/Serbia</div>
              <div>Published: 4/08/2012 8:34:36 AM</div>
              <div>Number of Photos in Album: 174</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/HomoljskoPoselo2012"
              title="Homoljsko Poselo - 2012"
            >
              <img
                title="Homoljsko Poselo - 2012"
                src="https://i2.wp.com/lh6.googleusercontent.com/-7hVoHePzUuk/UyrGTlIWb5E/AAAAAAAAGJ4/28vjCEXMHLg/s160-c/HomoljskoPoselo2012.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/HomoljskoPoselo2012">
                Homoljsko Poselo - 2012
              </a>
            </div>
            <MetaContent>
              <div>Location: </div>
              <div>Published: 30/06/2012 11:20:55 AM</div>
              <div>Number of Photos in Album: 98</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/ATOMIKInEASTSERBIAJasikovo2012"
              title="ATOMIK  in  EAST  SERBIA - Jasikovo 2012"
            >
              <img
                title="ATOMIK  in  EAST  SERBIA - Jasikovo 2012"
                src="https://i2.wp.com/lh3.googleusercontent.com/-mLaa05h2S9c/UYSkyWxGX1E/AAAAAAAADnM/z-jncB1lOFg/s160-c/ATOMIKInEASTSERBIAJasikovo2012.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/ATOMIKInEASTSERBIAJasikovo2012">
                ATOMIK in EAST SERBIA - Jasikovo 2012
              </a>
            </div>
            <MetaContent>
              <div>Location: East Serbia</div>
              <div>Published: 22/06/2012 2:03:41 AM</div>
              <div>Number of Photos in Album: 179</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/MrGregWheelerInSerbia2012"
              title="Mr. Greg Wheeler in Serbia - 2012"
            >
              <img
                title="Mr. Greg Wheeler in Serbia - 2012"
                src="https://i0.wp.com/lh3.googleusercontent.com/-WWUVqs_4hbg/UYTJXqGNkWE/AAAAAAAABMc/WEa7IHbflgE/s160-c/MrGregWheelerInSerbia2012.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/MrGregWheelerInSerbia2012">
                Mr. Greg Wheeler in Serbia - 2012
              </a>
            </div>
            <MetaContent>
              <div>Location: Jasikovo/Serbia</div>
              <div>Published: 21/06/2012 12:27:54 AM</div>
              <div>Number of Photos in Album: 281</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/ATOMIK4WD"
              title="ATOMIK  -  4WD"
            >
              <img
                title="ATOMIK  -  4WD"
                src="https://i2.wp.com/lh3.googleusercontent.com/-Q1e0h0fvp4s/UYSkyPWveZE/AAAAAAAAAZY/kt-4c6mfHzk/s160-c/ATOMIK4WD.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/ATOMIK4WD">
                ATOMIK - 4WD
              </a>
            </div>
            <MetaContent>
              <div>Location: AUSTRALIA</div>
              <div>Published: 27/04/2012 4:14:34 PM</div>
              <div>Number of Photos in Album: 114</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/14ISaborPenzioneraOpstineMajdanpek"
              title="14-i  Sabor  Penzionera  Opstine  Majdanpek"
            >
              <img
                title="14-i  Sabor  Penzionera  Opstine  Majdanpek"
                src="https://i2.wp.com/lh5.googleusercontent.com/-dfco43fv5YE/UYSkx142EZE/AAAAAAAAAZU/Tum47KQ2J_w/s160-c/14ISaborPenzioneraOpstineMajdanpek.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/14ISaborPenzioneraOpstineMajdanpek">
                14-i Sabor Penzionera Opstine Majdanpek
              </a>
            </div>
            <MetaContent>
              <div>Location: Jasikovo/Serbia</div>
              <div>Published: 28/06/2011 8:35:45 PM</div>
              <div>Number of Photos in Album: 177</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/Lipa2011"
              title="Lipa - 2011"
            >
              <img
                title="Lipa - 2011"
                src="https://i2.wp.com/lh4.googleusercontent.com/-Q4NsA56FnFI/UYSkxOxEQzE/AAAAAAAAAZM/LXwHeIXvTMg/s160-c/Lipa2011.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/Lipa2011">Lipa - 2011</a>
            </div>
            <MetaContent>
              <div>Location: East Serbia</div>
              <div>Published: 18/06/2011 5:00:00 PM</div>
              <div>Number of Photos in Album: 563</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/Australia2011"
              title="Australia 2011"
            >
              <img
                title="Australia 2011"
                src="https://i1.wp.com/lh5.googleusercontent.com/-8prtjpWPwjo/UYSkwgAHleE/AAAAAAAAIoY/yqtmSqe6fVY/s160-c/Australia2011.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/Australia2011">
                Australia 2011
              </a>
            </div>
            <MetaContent>
              <div>Location: AUSTRALIA/Canberra</div>
              <div>Published: 15/05/2011 10:49:43 AM</div>
              <div>Number of Photos in Album: 362</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/FishingCompetition2010MulwalaLake"
              title="Fishing competition - 2010, Mulwala Lake"
            >
              <img
                title="Fishing competition - 2010, Mulwala Lake"
                src="https://i1.wp.com/lh4.googleusercontent.com/-AEHO8YJclqw/UYSkvjuqCaE/AAAAAAAAAY8/tYn3EcTEwaw/s160-c/FishingCompetition2010MulwalaLake.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/FishingCompetition2010MulwalaLake">
                Fishing competition - 2010, Mulwala Lake
              </a>
            </div>
            <MetaContent>
              <div>Location: Mulwala lake/NSW-Australia</div>
              <div>Published: 4/12/2010 7:00:00 PM</div>
              <div>Number of Photos in Album: 239</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/Condobolin2010"
              title="Condobolin - 2010"
            >
              <img
                title="Condobolin - 2010"
                src="https://i0.wp.com/lh3.googleusercontent.com/-hsIqDsIAbW4/UYSkuZDm7tE/AAAAAAAAAYw/6hlSwoHAc50/s160-c/Condobolin2010.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/Condobolin2010">
                Condobolin - 2010
              </a>
            </div>
            <MetaContent>
              <div>Location: NSW Australia</div>
              <div>Published: 2/10/2010 5:00:00 PM</div>
              <div>Number of Photos in Album: 151</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/BIGERIzvorRekeJAGNILA"
              title="BIGER - izvor reke JAGNILA"
            >
              <img
                title="BIGER - izvor reke JAGNILA"
                src="https://i1.wp.com/lh3.googleusercontent.com/-9o7yrheizyQ/UYSktmcdTDE/AAAAAAAAHUg/Dldu9c4Apr4/s160-c/BIGERIzvorRekeJAGNILA.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/BIGERIzvorRekeJAGNILA">
                BIGER - izvor reke JAGNILA
              </a>
            </div>
            <MetaContent>
              <div>Location: Jasikovo/Serbia</div>
              <div>Published: 30/08/2010 5:00:00 PM</div>
              <div>Number of Photos in Album: 604</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/HramSvProrokIlija"
              title="Hram - Sv. Prorok Ilija"
            >
              <img
                title="Hram - Sv. Prorok Ilija"
                src="https://i1.wp.com/lh5.googleusercontent.com/-E_Dnsc8HLbA/UYSkuhV3qdE/AAAAAAAAHUI/_VOei7hVu7E/s160-c/HramSvProrokIlija.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/HramSvProrokIlija">
                Hram - Sv. Prorok Ilija
              </a>
            </div>
            <MetaContent>
              <div>Location: Jasikovo/Serbia</div>
              <div>Published: 29/08/2010 3:31:21 AM</div>
              <div>Number of Photos in Album: 50</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/PeShoshLaPetkonji"
              title="Pe Shosh, la Petkonji"
            >
              <img
                title="Pe Shosh, la Petkonji"
                src="https://i1.wp.com/lh4.googleusercontent.com/-EdTBZ3w6W44/UYSkuyctD_E/AAAAAAAAAY4/WOL3gdhZiNM/s160-c/PeShoshLaPetkonji.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/PeShoshLaPetkonji">
                Pe Shosh, la Petkonji
              </a>
            </div>
            <MetaContent>
              <div>Location: </div>
              <div>Published: 22/08/2010 6:34:59 PM</div>
              <div>Number of Photos in Album: 204</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/IRENAIJASMINVENCANjE15082010JASIKOVOZAGUBICA"
              title="IRENA i JASMIN - VENCANjE, 15.08.2010 JASIKOVO-ZAGUBICA"
            >
              <img
                title="IRENA i JASMIN - VENCANjE, 15.08.2010 JASIKOVO-ZAGUBICA"
                src="https://i1.wp.com/lh5.googleusercontent.com/-_dqTAuOqM68/UYSkuNddEeE/AAAAAAAAAYs/JKY5vedmwnk/s160-c/IRENAIJASMINVENCANjE15082010JASIKOVOZAGUBICA.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/IRENAIJASMINVENCANjE15082010JASIKOVOZAGUBICA">
                IRENA i JASMIN - VENCANjE, 15.08.2010 JASIKOVO-ZAGUBICA
              </a>
            </div>
            <MetaContent>
              <div>Location: Zagubica/Serbia</div>
              <div>Published: 15/08/2010 5:00:00 PM</div>
              <div>Number of Photos in Album: 73</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/BacijaJasikova2010"
              title="Bacija Jasikova 2010"
            >
              <img
                title="Bacija Jasikova 2010"
                src="https://i2.wp.com/lh6.googleusercontent.com/-l8zBYWL038o/UYSks_sfvCE/AAAAAAAAAYg/qxSEWSKZntw/s160-c/BacijaJasikova2010.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/BacijaJasikova2010">
                Bacija Jasikova 2010
              </a>
            </div>
            <MetaContent>
              <div>Location: Jasikovo/Serbia</div>
              <div>Published: 4/08/2010 5:00:00 PM</div>
              <div>Number of Photos in Album: 397</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/SladjanSamILICJasikovoHoliday2010"
              title="Sladjan-Sam  ILIC --Jasikovo Holiday 2010"
            >
              <img
                title="Sladjan-Sam  ILIC --Jasikovo Holiday 2010"
                src="https://i1.wp.com/lh5.googleusercontent.com/-oQNcmfGDf1w/UYSktRRkMaE/AAAAAAAAImA/wCMUHBw04Jc/s160-c/SladjanSamILICJasikovoHoliday2010.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/SladjanSamILICJasikovoHoliday2010">
                Sladjan-Sam ILIC -Jasikovo Holiday 2010
              </a>
            </div>
            <MetaContent>
              <div>Location: Jasikovo/Serbia</div>
              <div>Published: 2/08/2010 1:38:37 AM</div>
              <div>Number of Photos in Album: 155</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/LovUCRNOJReci"
              title="Lov u CRNO-j Reci"
            >
              <img
                title="Lov u CRNO-j Reci"
                src="https://i2.wp.com/lh4.googleusercontent.com/-MAjdnEaCens/UYSkv9x1GvE/AAAAAAAAAZA/TrGUvVW_WNI/s160-c/LovUCRNOJReci.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/LovUCRNOJReci">
                Lov u CRNO-j Reci
              </a>
            </div>
            <MetaContent>
              <div>Location: </div>
              <div>Published: 11/07/2010 6:34:59 PM</div>
              <div>Number of Photos in Album: 412</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/JASIKOVCANIAleksandarAcaTAUZ"
              title="JASIKOVCANI - Aleksandar Aca TAUZ"
            >
              <img
                title="JASIKOVCANI - Aleksandar Aca TAUZ"
                src="https://i2.wp.com/lh6.googleusercontent.com/-Bl1BHEuY2ls/UYSksqGwgIE/AAAAAAAAIMY/HTzat7JLVbs/s160-c/JASIKOVCANIAleksandarAcaTAUZ.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/JASIKOVCANIAleksandarAcaTAUZ">
                JASIKOVCANI - Aleksandar Aca TAUZ
              </a>
            </div>
            <MetaContent>
              <div>Location: Serbia</div>
              <div>Published: 26/03/2010 6:00:00 PM</div>
              <div>Number of Photos in Album: 288</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/FIREWORKS"
              title="FIREWORKS"
            >
              <img
                title="FIREWORKS"
                src="https://i2.wp.com/lh3.googleusercontent.com/-KM20ztVhGQc/UYSksVjGctE/AAAAAAAAAYY/kC6BcuTrYfc/s160-c/FIREWORKS.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/FIREWORKS">FIREWORKS</a>
            </div>
            <MetaContent>
              <div>Location: Canberra/Australia</div>
              <div>Published: 20/03/2010 8:32:42 PM</div>
              <div>Number of Photos in Album: 112</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a href="https://picasaweb.google.com/116722993080592421923/BalloonS" title="Balloon's">
              <img
                title="Balloon's"
                src="https://i1.wp.com/lh6.googleusercontent.com/-vccJVIu7szc/UYSkr_XD0-E/AAAAAAAAAYU/Xo8rw2wx09M/s160-c/BalloonS.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/BalloonS">
                Balloon&apos;s
              </a>
            </div>
            <MetaContent>
              <div>Location: Canberra/Australia</div>
              <div>Published: 13/03/2010 7:00:00 PM</div>
              <div>Number of Photos in Album: 282</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/ClydeRiver"
              title="Clyde River"
            >
              <img
                title="Clyde River"
                src="https://i1.wp.com/lh3.googleusercontent.com/-FXfUYI1zH1M/UYSkrjGFPeE/AAAAAAAAAYQ/oMiBMmGtE7A/s160-c/ClydeRiver.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/ClydeRiver">
                Clyde River
              </a>
            </div>
            <MetaContent>
              <div>Location: Batemans B ay</div>
              <div>Published: 27/02/2010 7:00:00 PM</div>
              <div>Number of Photos in Album: 195</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/INMEMORYPetarPeraILIC19462010"
              title="IN MEMORY -- Petar-Pera ILIC 1946-2010"
            >
              <img
                title="IN MEMORY -- Petar-Pera ILIC 1946-2010"
                src="https://i2.wp.com/lh4.googleusercontent.com/-CVDmUfEqRqQ/UYSkwVIXXZE/AAAAAAAABls/ZnIiUt7agX4/s160-c/INMEMORYPetarPeraILIC19462010.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/INMEMORYPetarPeraILIC19462010">
                IN MEMORY — Petar-Pera ILIC 1946-2010
              </a>
            </div>
            <MetaContent>
              <div>Location: Jasikovo/Serbia</div>
              <div>Published: 28/01/2010 7:00:00 PM</div>
              <div>Number of Photos in Album: 32</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/TheMitsubitshiTritonDriveTest"
              title="The Mitsubitshi - Triton drive test"
            >
              <img
                title="The Mitsubitshi - Triton drive test"
                src="https://i0.wp.com/lh6.googleusercontent.com/-ezwYVa-xGdE/UYSkq69DM-E/AAAAAAAAAYM/BC5yyCoiz-s/s160-c/TheMitsubitshiTritonDriveTest.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/TheMitsubitshiTritonDriveTest">
                The Mitsubitshi - Triton drive test
              </a>
            </div>
            <MetaContent>
              <div>Location: </div>
              <div>Published: 3/01/2010 7:00:00 PM</div>
              <div>Number of Photos in Album: 450</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/CherryFestivalYoung2009"
              title="Cherry Festival - Young 2009"
            >
              <img
                title="Cherry Festival - Young 2009"
                src="https://i0.wp.com/lh5.googleusercontent.com/-SLyV304L2ZE/UYSkqVmwN0E/AAAAAAAAAYI/gyfmF3lnA6g/s160-c/CherryFestivalYoung2009.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/CherryFestivalYoung2009">
                Cherry Festival - Young 2009
              </a>
            </div>
            <MetaContent>
              <div>Location: </div>
              <div>Published: 5/12/2009 7:00:00 PM</div>
              <div>Number of Photos in Album: 677</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/SpringShowCanberraAustralia"
              title="Spring Show - Canberra+Australia"
            >
              <img
                title="Spring Show - Canberra+Australia"
                src="https://i1.wp.com/lh6.googleusercontent.com/-tcIsWiN8iRE/UYSkqEsylVE/AAAAAAAAAYE/n_PTgFjJ0zA/s160-c/SpringShowCanberraAustralia.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/SpringShowCanberraAustralia">
                Spring Show - Canberra+Australia
              </a>
            </div>
            <MetaContent>
              <div>Location: </div>
              <div>Published: 25/10/2009 10:28:48 AM</div>
              <div>Number of Photos in Album: 148</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/WELCOMEToCONDOBOLIN"
              title="WELCOME to CONDOBOLIN"
            >
              <img
                title="WELCOME to CONDOBOLIN"
                src="https://i1.wp.com/lh6.googleusercontent.com/-STccYnO0VNc/UYSko7pHl3E/AAAAAAAAAX4/__9y8KpaI88/s160-c/WELCOMEToCONDOBOLIN.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/WELCOMEToCONDOBOLIN">
                WELCOME to CONDOBOLIN
              </a>
            </div>
            <MetaContent>
              <div>Location: </div>
              <div>Published: 1/08/2009 5:27:26 PM</div>
              <div>Number of Photos in Album: 476</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/IVANInAUSTRALIAMay2009AlbumNo2"
              title="I V A N   in   AUSTRALIA - May 2009.- Album no-2"
            >
              <img
                title="I V A N   in   AUSTRALIA - May 2009.- Album no-2"
                src="https://i0.wp.com/lh4.googleusercontent.com/-1X9MBm_CEhs/UYSkoPNwibE/AAAAAAAABIo/U0kuFZajMgQ/s160-c/IVANInAUSTRALIAMay2009AlbumNo2.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/IVANInAUSTRALIAMay2009AlbumNo2">
                I V A N in AUSTRALIA - May 2009.- Album no-2
              </a>
            </div>
            <MetaContent>
              <div>Location: ACT-NSW/Australia</div>
              <div>Published: 29/05/2009 2:06:45 PM</div>
              <div>Number of Photos in Album: 588</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/IVANInAUSTRALIAMay20091stAlbum"
              title="I V A N in AUSTRALIA - May 2009-1st Album"
            >
              <img
                title="I V A N in AUSTRALIA - May 2009-1st Album"
                src="https://i2.wp.com/lh6.googleusercontent.com/-nq70lwO6u3A/UYSknVjlPwE/AAAAAAAAAXs/rkxlW9eZ9iA/s160-c/IVANInAUSTRALIAMay20091stAlbum.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/IVANInAUSTRALIAMay20091stAlbum">
                I V A N in AUSTRALIA - May 2009-1st Album
              </a>
            </div>
            <MetaContent>
              <div>Location: NSW-ACT/AUSTRALIA</div>
              <div>Published: 16/05/2009 5:00:00 PM</div>
              <div>Number of Photos in Album: 1000</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/TamaraISrdjanSvadba2May2009"
              title="Tamara i Srdjan - Svadba 2.may.2009"
            >
              <img
                title="Tamara i Srdjan - Svadba 2.may.2009"
                src="https://i0.wp.com/lh6.googleusercontent.com/-IR-Ab8swDFM/UYSkpuo4iaE/AAAAAAAAAYA/K7m9zmJJ4VU/s160-c/TamaraISrdjanSvadba2May2009.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/TamaraISrdjanSvadba2May2009">
                Tamara i Srdjan - Svadba 2.may.2009
              </a>
            </div>
            <MetaContent>
              <div>Location: Canberra/Australia</div>
              <div>Published: 2/05/2009 11:28:20 AM</div>
              <div>Number of Photos in Album: 257</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/AUSTRALIA2009"
              title="A U S T R A L I A   2009"
            >
              <img
                title="A U S T R A L I A   2009"
                src="https://i1.wp.com/lh3.googleusercontent.com/-jW7-3y94zAs/UYSkl5Y8t6E/AAAAAAAAAXg/3P1AsTzbC7I/s160-c/AUSTRALIA2009.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/AUSTRALIA2009">
                A U S T R A L I A 2009
              </a>
            </div>
            <MetaContent>
              <div>Location: NSW/ACT Australia</div>
              <div>Published: 23/04/2009 8:36:40 AM</div>
              <div>Number of Photos in Album: 996</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/JasikovoIJasikovcaniUStarimSlikama"
              title="Jasikovo i Jasikovcani u Starim slikama"
            >
              <img
                title="Jasikovo i Jasikovcani u Starim slikama"
                src="https://i2.wp.com/lh6.googleusercontent.com/-2uaCUkyh9c8/UYSkkrss9UE/AAAAAAAAIoQ/2NodtX0Zm60/s160-c/JasikovoIJasikovcaniUStarimSlikama.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/JasikovoIJasikovcaniUStarimSlikama">
                Jasikovo i Jasikovcani u Starim slikama
              </a>
            </div>
            <MetaContent>
              <div>Location: </div>
              <div>Published: 7/03/2009 9:09:55 PM</div>
              <div>Number of Photos in Album: 676</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/Summernats2009"
              title="Summernats - 2009"
            >
              <img
                title="Summernats - 2009"
                src="https://i0.wp.com/lh6.googleusercontent.com/-Af7XkX9G5Ho/UYSkjOtGWFE/AAAAAAAAAXA/t1x55FF0z3U/s160-c/Summernats2009.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/Summernats2009">
                Summernats - 2009
              </a>
            </div>
            <MetaContent>
              <div>Location: Canberra/Australia.</div>
              <div>Published: 3/01/2009 7:00:00 PM</div>
              <div>Number of Photos in Album: 351</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/ULLADULLA"
              title="ULLADULLA"
            >
              <img
                title="ULLADULLA"
                src="https://i2.wp.com/lh6.googleusercontent.com/-8nlApkwmqMQ/UYSkjkCkZRE/AAAAAAAAAXI/J8cNI3Rj4dE/s160-c/ULLADULLA.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/ULLADULLA">ULLADULLA</a>
            </div>
            <MetaContent>
              <div>Location: Ulladulla-NSW/Australia</div>
              <div>Published: 30/12/2008 7:00:00 PM</div>
              <div>Number of Photos in Album: 100</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/MILASChristening"
              title="MILA's Christening"
            >
              <img
                title="MILA's Christening"
                src="https://i0.wp.com/lh6.googleusercontent.com/-N0CbLJfc_-Y/UYSkie6JHkE/AAAAAAAAAW4/ACxnD08HAvA/s160-c/MILASChristening.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/MILASChristening">
                MILA&apos;s Christening
              </a>
            </div>
            <MetaContent>
              <div>Location: </div>
              <div>Published: 9/11/2008 7:00:00 PM</div>
              <div>Number of Photos in Album: 91</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/OKTOMBARUJASIKOVO"
              title="OKTOMBAR u J A S I K O V O"
            >
              <img
                title="OKTOMBAR u J A S I K O V O"
                src="https://i2.wp.com/lh4.googleusercontent.com/-zrY8Xe-1qsM/UYSkm6zxv9E/AAAAAAAAAXo/cTYBcy0cyh4/s160-c/OKTOMBARUJASIKOVO.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/OKTOMBARUJASIKOVO">
                OKTOMBAR u J A S I K O V O
              </a>
            </div>
            <MetaContent>
              <div>Location: </div>
              <div>Published: 29/10/2008 1:34:15 PM</div>
              <div>Number of Photos in Album: 369</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/Jasikovo2008October05"
              title="Jasikovo - 2008.october.05 -"
            >
              <img
                title="Jasikovo - 2008.october.05 -"
                src="https://i1.wp.com/lh3.googleusercontent.com/-YywuAiW3EmE/UYSkgaWWNUE/AAAAAAAAGnk/rdUArl1OgB8/s160-c/Jasikovo2008October05.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/Jasikovo2008October05">
                Jasikovo - 2008.october.05 -
              </a>
            </div>
            <MetaContent>
              <div>Location: Jasikovo/Serbia</div>
              <div>Published: 5/10/2008 6:00:00 PM</div>
              <div>Number of Photos in Album: 176</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/PotajnicaSelisteHomolje"
              title="Potajnica - Seliste(Homolje)"
            >
              <img
                title="Potajnica - Seliste(Homolje)"
                src="https://i0.wp.com/lh5.googleusercontent.com/-BYW6rMCQg14/UYSkj78GKpE/AAAAAAAAAXM/5sr6FnEIzOg/s160-c/PotajnicaSelisteHomolje.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/PotajnicaSelisteHomolje">
                Potajnica - Seliste(Homolje)
              </a>
            </div>
            <MetaContent>
              <div>Location: Potajnica-Seliste/Serbia</div>
              <div>Published: 2/10/2008 5:00:00 PM</div>
              <div>Number of Photos in Album: 155</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/Septembar2008UJasikovo"
              title="Septembar,2008 u Jasikovo"
            >
              <img
                title="Septembar,2008 u Jasikovo"
                src="https://i0.wp.com/lh6.googleusercontent.com/-zY3VbpIO3yA/UYSkmq0wW5E/AAAAAAAAAXk/Ry-NPNyls6Q/s160-c/Septembar2008UJasikovo.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/Septembar2008UJasikovo">
                Septembar,2008 u Jasikovo
              </a>
            </div>
            <MetaContent>
              <div>Location: Jasikovo/Serbia</div>
              <div>Published: 30/09/2008 5:00:00 PM</div>
              <div>Number of Photos in Album: 369</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/Jasikovo2008Septembar21"
              title="Jasikovo - 2008.septembar.21 -"
            >
              <img
                title="Jasikovo - 2008.septembar.21 -"
                src="https://i1.wp.com/lh6.googleusercontent.com/-pVP_TnO3nNQ/UYSkgDhmR0E/AAAAAAAAAWg/e4OHiJh6A0w/s160-c/Jasikovo2008Septembar21.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/Jasikovo2008Septembar21">
                Jasikovo - 2008.septembar.21 -
              </a>
            </div>
            <MetaContent>
              <div>Location: Jasikovo/Serbia</div>
              <div>Published: 21/09/2008 5:00:00 PM</div>
              <div>Number of Photos in Album: 281</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/TRAVELAroundEUROPE"
              title="TRAVEL  around  EUROPE"
            >
              <img
                title="TRAVEL  around  EUROPE"
                src="https://i2.wp.com/lh6.googleusercontent.com/-pSOICNoknk8/UYSkigX062E/AAAAAAAAAW8/jgUnt7w6VCc/s160-c/TRAVELAroundEUROPE.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/TRAVELAroundEUROPE">
                TRAVEL around EUROPE
              </a>
            </div>
            <MetaContent>
              <div>Location: Europe</div>
              <div>Published: 5/09/2008 8:27:00 PM</div>
              <div>Number of Photos in Album: 554</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/JasikovoItaly2008August30September12"
              title="Jasikovo - Italy. - 2008.august.30---september.12.-"
            >
              <img
                title="Jasikovo - Italy. - 2008.august.30---september.12.-"
                src="https://i0.wp.com/lh6.googleusercontent.com/-kxHdzoOUcFo/UYSkiDVivyE/AAAAAAAAGnc/j-_5HkRxKN0/s160-c/JasikovoItaly2008August30September12.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/JasikovoItaly2008August30September12">
                Jasikovo - Italy. - 2008.august.30—september.12.-
              </a>
            </div>
            <MetaContent>
              <div>Location: </div>
              <div>Published: 30/08/2008 4:24:50 PM</div>
              <div>Number of Photos in Album: 398</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/AvgustUJASIKOVO2008G"
              title="Avgust  u  J A S I K O V O  2008 g"
            >
              <img
                title="Avgust  u  J A S I K O V O  2008 g"
                src="https://i0.wp.com/lh6.googleusercontent.com/-WJlUJerQJFA/UYSklOdCTOE/AAAAAAAAAXc/3evn4Gko95E/s160-c/AvgustUJASIKOVO2008G.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/AvgustUJASIKOVO2008G">
                Avgust u J A S I K O V O 2008 g
              </a>
            </div>
            <MetaContent>
              <div>Location: Jasikovo/Serbia.</div>
              <div>Published: 29/08/2008 5:00:00 PM</div>
              <div>Number of Photos in Album: 977</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/2Jasikovo2008August2324LazarevKanjonDvaDanaSaPrirodomDanDrugi"
              title="2-Jasikovo - 2008.august.23-24 - Lazarev Kanjon-dva dana sa prirodom,- Dan drugi.-"
            >
              <img
                title="2-Jasikovo - 2008.august.23-24 - Lazarev Kanjon-dva dana sa prirodom,- Dan drugi.-"
                src="https://i2.wp.com/lh4.googleusercontent.com/-U0NQQB1_hms/UYSkhgKmqyE/AAAAAAAAAWw/2EQgjOWaMo0/s160-c/2Jasikovo2008August2324LazarevKanjonDvaDanaSaPrirodomDanDrugi.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/2Jasikovo2008August2324LazarevKanjonDvaDanaSaPrirodomDanDrugi">
                2-Jasikovo - 2008.august.23-24 - Lazarev Kanjon-dva dana sa prirodom,- Dan drugi.-
              </a>
            </div>
            <MetaContent>
              <div>Location: Lazarev kanjon/Serbia.</div>
              <div>Published: 24/08/2008 5:00:00 PM</div>
              <div>Number of Photos in Album: 288</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/1Jasikovo2008August2324LazarevKanjonDvaDanaSaPrirodomDanPrvi"
              title="1-Jasikovo - 2008.august.23-24 - Lazarev Kanjon-dva dana sa prirodom,- Dan prvi.-"
            >
              <img
                title="1-Jasikovo - 2008.august.23-24 - Lazarev Kanjon-dva dana sa prirodom,- Dan prvi.-"
                src="https://i0.wp.com/lh6.googleusercontent.com/-i1rO3bZJHDE/UYSkhB_WWUE/AAAAAAAAAWs/jISzoOC9zrw/s160-c/1Jasikovo2008August2324LazarevKanjonDvaDanaSaPrirodomDanPrvi.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/1Jasikovo2008August2324LazarevKanjonDvaDanaSaPrirodomDanPrvi">
                1-Jasikovo - 2008.august.23-24 - Lazarev Kanjon-dva dana sa prirodom,- Dan prvi.-
              </a>
            </div>
            <MetaContent>
              <div>Location: Lazarev kanjon/Serbia</div>
              <div>Published: 23/08/2008 5:00:00 PM</div>
              <div>Number of Photos in Album: 429</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/LaPiatraANjagre"
              title="La Piatra a Njagre"
            >
              <img
                title="La Piatra a Njagre"
                src="https://i1.wp.com/lh4.googleusercontent.com/-NYKlRh-Ay0Y/UYSkkaIHDeE/AAAAAAAABlw/HLJYXsFB91I/s160-c/LaPiatraANjagre.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/LaPiatraANjagre">
                La Piatra a Njagre
              </a>
            </div>
            <MetaContent>
              <div>Location: Jasikovo/Serbia</div>
              <div>Published: 11/08/2008 5:00:00 PM</div>
              <div>Number of Photos in Album: 204</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/Jasikovo2008August03PeOgashuMoriLaShosh"
              title="Jasikovo - 2008.august.03 - Pe Ogashu Mori la Shosh"
            >
              <img
                title="Jasikovo - 2008.august.03 - Pe Ogashu Mori la Shosh"
                src="https://i0.wp.com/lh5.googleusercontent.com/-p7Uph1uukLM/UYSkg0QaCnE/AAAAAAAAAWo/CGAExfRiUAQ/s160-c/Jasikovo2008August03PeOgashuMoriLaShosh.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/Jasikovo2008August03PeOgashuMoriLaShosh">
                Jasikovo - 2008.august.03 - Pe Ogashu Mori la Shosh
              </a>
            </div>
            <MetaContent>
              <div>Location: Jasikovo/Serbia</div>
              <div>Published: 3/08/2008 5:00:00 PM</div>
              <div>Number of Photos in Album: 379</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/VASARUHOMOLJUZagubica2082008"
              title="VASAR u HOMOLJU - Zagubica 2.08.2008"
            >
              <img
                title="VASAR u HOMOLJU - Zagubica 2.08.2008"
                src="https://i2.wp.com/lh6.googleusercontent.com/-jXN3T0hxnBU/UYSkkJo6HYE/AAAAAAAAAXQ/6Uy5vx7jCco/s160-c/VASARUHOMOLJUZagubica2082008.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/VASARUHOMOLJUZagubica2082008">
                VASAR u HOMOLJU - Zagubica 2.08.2008
              </a>
            </div>
            <MetaContent>
              <div>Location: </div>
              <div>Published: 2/08/2008 6:41:32 PM</div>
              <div>Number of Photos in Album: 77</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/IzgradnjaCrkveSvetiProrokIlijaUJasikovo"
              title="Izgradnja Crkve Sveti Prorok Ilija u Jasikovo"
            >
              <img
                title="Izgradnja Crkve Sveti Prorok Ilija u Jasikovo"
                src="https://i0.wp.com/lh5.googleusercontent.com/-NgtBoTtEzuE/UYSkjvjTwgE/AAAAAAAAAXE/SK6WSX6SZps/s160-c/IzgradnjaCrkveSvetiProrokIlijaUJasikovo.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/IzgradnjaCrkveSvetiProrokIlijaUJasikovo">
                Izgradnja Crkve Sveti Prorok Ilija u Jasikovo
              </a>
            </div>
            <MetaContent>
              <div>Location: Jasikovo/Serbia</div>
              <div>Published: 2/08/2008 5:00:00 PM</div>
              <div>Number of Photos in Album: 109</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/HappyBirthdayGrandma"
              title="Happy Birthday Grandma!"
            >
              <img
                title="Happy Birthday Grandma!"
                src="https://i2.wp.com/lh6.googleusercontent.com/-b9NDAsiwj04/UYSkf3fb73E/AAAAAAAAAWc/VAqli6N1300/s160-c/HappyBirthdayGrandma.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/HappyBirthdayGrandma">
                Happy Birthday Grandma!
              </a>
            </div>
            <MetaContent>
              <div>Location: Murrumbateman NSW Australia</div>
              <div>Published: 25/05/2008 6:18:34 PM</div>
              <div>Number of Photos in Album: 61</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/CaptainsFlatBushMotorbikeRacingNSWAustralia"
              title="Captains Flat (Bush Motorbike racing)--NSW-Australia"
            >
              <img
                title="Captains Flat (Bush Motorbike racing)--NSW-Australia"
                src="https://i1.wp.com/lh6.googleusercontent.com/-NCjPXBfzYPA/UYSkedT9o3E/AAAAAAAAAWA/pGwrRQMDmXo/s160-c/CaptainsFlatBushMotorbikeRacingNSWAustralia.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/CaptainsFlatBushMotorbikeRacingNSWAustralia">
                Captains Flat (Bush Motorbike racing)-NSW-Australia
              </a>
            </div>
            <MetaContent>
              <div>Location: Captains Flat NSW Australia</div>
              <div>Published: 20/04/2008 8:47:01 PM</div>
              <div>Number of Photos in Album: 73</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/LowdenForestPark2008NSWAustralia"
              title="Lowden Forest Park 2008--NSW-Australia"
            >
              <img
                title="Lowden Forest Park 2008--NSW-Australia"
                src="https://i0.wp.com/lh6.googleusercontent.com/-8kl9PvXCtwA/UYSkdqewb2E/AAAAAAAAAV0/WHijNPaGa0s/s160-c/LowdenForestPark2008NSWAustralia.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/LowdenForestPark2008NSWAustralia">
                Lowden Forest Park 2008-NSW-Australia
              </a>
            </div>
            <MetaContent>
              <div>Location: Lowden Forest Park-NSW-Australia</div>
              <div>Published: 6/04/2008 9:40:55 PM</div>
              <div>Number of Photos in Album: 66</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/GoorooyarrooNatureReserveACTAustralia"
              title="Goorooyarroo Nature Reserve--ACT-Australia"
            >
              <img
                title="Goorooyarroo Nature Reserve--ACT-Australia"
                src="https://i2.wp.com/lh4.googleusercontent.com/-uaQpCn9Od-Q/UYSkc17hvUE/AAAAAAAAAVs/5gJ0xL_LlUM/s160-c/GoorooyarrooNatureReserveACTAustralia.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/GoorooyarrooNatureReserveACTAustralia">
                Goorooyarroo Nature Reserve-ACT-Australia
              </a>
            </div>
            <MetaContent>
              <div>Location: harrison act canberra</div>
              <div>Published: 16/03/2008 6:00:00 PM</div>
              <div>Number of Photos in Album: 161</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/Queanbeyan4WDCampingShow"
              title="Queanbeyan 4WD &amp; camping show"
            >
              <img
                title="Queanbeyan 4WD &amp; camping show"
                src="https://i0.wp.com/lh3.googleusercontent.com/-nzuvYFnk5Hk/UYSkfvsF2nE/AAAAAAAAAWU/k0bNSzZpw4o/s160-c/Queanbeyan4WDCampingShow.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/Queanbeyan4WDCampingShow">
                Queanbeyan 4WD &amp; camping show
              </a>
            </div>
            <MetaContent>
              <div>Location: Queanbeyan-NSW/Australia</div>
              <div>Published: 10/02/2008 8:41:30 PM</div>
              <div>Number of Photos in Album: 54</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/NationalMulticulturalFestivalCanberra"
              title="National Multicultural Festival-Canberra"
            >
              <img
                title="National Multicultural Festival-Canberra"
                src="https://i1.wp.com/lh6.googleusercontent.com/-3Isn_zDI5sg/UYSkfZ1ZhoE/AAAAAAAAAWQ/wWlas_IeNAY/s160-c/NationalMulticulturalFestivalCanberra.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/NationalMulticulturalFestivalCanberra">
                National Multicultural Festival-Canberra
              </a>
            </div>
            <MetaContent>
              <div>Location: Canberra-ACT/Australia</div>
              <div>Published: 9/02/2008 8:32:41 PM</div>
              <div>Number of Photos in Album: 53</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/MolongloGorgeQueanbeyanAustralia"
              title="Molonglo Gorge--Queanbeyan-Australia"
            >
              <img
                title="Molonglo Gorge--Queanbeyan-Australia"
                src="https://i0.wp.com/lh3.googleusercontent.com/-_IM9DmFquh4/UYSkcjtxzgE/AAAAAAAAAVo/Ieq06fvfqCY/s160-c/MolongloGorgeQueanbeyanAustralia.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/MolongloGorgeQueanbeyanAustralia">
                Molonglo Gorge-Queanbeyan-Australia
              </a>
            </div>
            <MetaContent>
              <div>Location: Molonglo River Queanbeyan NSW Australia</div>
              <div>Published: 3/02/2008 7:00:00 PM</div>
              <div>Number of Photos in Album: 67</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a href="https://picasaweb.google.com/116722993080592421923/Sydney" title="Sydney">
              <img
                title="Sydney"
                src="https://i2.wp.com/lh4.googleusercontent.com/-rk6p5MQrxhY/UYSkbKqc4VE/AAAAAAAAAVU/baz6SqcvQdo/s160-c/Sydney.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/Sydney">Sydney</a>
            </div>
            <MetaContent>
              <div>Location: sydney</div>
              <div>Published: 23/11/2007 7:00:00 PM</div>
              <div>Number of Photos in Album: 19</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/WamboinNSWAustralia"
              title="Wamboin--NSW-Australia"
            >
              <img
                title="Wamboin--NSW-Australia"
                src="https://i2.wp.com/lh5.googleusercontent.com/-S8hLGS_WqNw/UYSkcdloy-E/AAAAAAAAAVk/CAfrX6sb5Kg/s160-c/WamboinNSWAustralia.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/WamboinNSWAustralia">
                Wamboin-NSW-Australia
              </a>
            </div>
            <MetaContent>
              <div>Location: Wamboin NSW Australia</div>
              <div>Published: 27/10/2007 5:00:00 PM</div>
              <div>Number of Photos in Album: 106</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/INMemoryMiljaJovanovic20102007"
              title="IN Memory-Milja Jovanovic 20.10.2007"
            >
              <img
                title="IN Memory-Milja Jovanovic 20.10.2007"
                src="https://i1.wp.com/lh6.googleusercontent.com/-lIYmXHhGCPA/UYSkoVtFGSE/AAAAAAAAAX0/BpDJNtcG5jA/s160-c/INMemoryMiljaJovanovic20102007.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/INMemoryMiljaJovanovic20102007">
                IN Memory-Milja Jovanovic 20.10.2007
              </a>
            </div>
            <MetaContent>
              <div>Location: </div>
              <div>Published: 20/10/2007 11:27:33 AM</div>
              <div>Number of Photos in Album: 361</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/BrindabellaValleyNSWAustralia2007"
              title="Brindabella valley--NSW-Australia 2007"
            >
              <img
                title="Brindabella valley--NSW-Australia 2007"
                src="https://i2.wp.com/lh3.googleusercontent.com/-In9-RplxYF0/UYSkcILD7_E/AAAAAAAAAVg/TC4z4SgVAIM/s160-c/BrindabellaValleyNSWAustralia2007.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/BrindabellaValleyNSWAustralia2007">
                Brindabella valley-NSW-Australia 2007
              </a>
            </div>
            <MetaContent>
              <div>Location: Brindabella valley NSW Australia</div>
              <div>Published: 22/09/2007 5:00:00 PM</div>
              <div>Number of Photos in Album: 64</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a href="https://picasaweb.google.com/116722993080592421923/CarShow" title="Car Show">
              <img
                title="Car Show"
                src="https://i2.wp.com/lh6.googleusercontent.com/-didmzaO09WA/UYSkfgMs5YE/AAAAAAAAAWY/5RE-P8zh_8A/s160-c/CarShow.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/CarShow">Car Show</a>
            </div>
            <MetaContent>
              <div>Location: Canberra-ACT/Australia</div>
              <div>Published: 11/03/2007 11:13:01 PM</div>
              <div>Number of Photos in Album: 56</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/MurrumbatemanFarmsShow2006NSWAustralia"
              title="Murrumbateman Farms Show 2006--NSW-Australia"
            >
              <img
                title="Murrumbateman Farms Show 2006--NSW-Australia"
                src="https://i2.wp.com/lh3.googleusercontent.com/-sGO162uhfkk/UYSkeJRDHSE/AAAAAAAAAV8/7YIT4f2hpjo/s160-c/MurrumbatemanFarmsShow2006NSWAustralia.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/MurrumbatemanFarmsShow2006NSWAustralia">
                Murrumbateman Farms Show 2006-NSW-Australia
              </a>
            </div>
            <MetaContent>
              <div>Location: Murrumbateman NSW Australia</div>
              <div>Published: 15/10/2006 10:16:30 PM</div>
              <div>Number of Photos in Album: 116</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/FloriadCanberraACTAustralia"
              title="Floriad Canberra--ACT-Australia"
            >
              <img
                title="Floriad Canberra--ACT-Australia"
                src="https://i1.wp.com/lh4.googleusercontent.com/-YT4udQOXUlM/UYSkdY6zl0E/AAAAAAAAAVw/GB_3ut48G-Y/s160-c/FloriadCanberraACTAustralia.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/FloriadCanberraACTAustralia">
                Floriad Canberra-ACT-Australia
              </a>
            </div>
            <MetaContent>
              <div>Location: Canberra Australia</div>
              <div>Published: 2/10/2006 5:00:00 PM</div>
              <div>Number of Photos in Album: 86</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/GundagaiTumutBrindabellaCanberra"
              title="Gundagai-Tumut-Brindabella-Canberra"
            >
              <img
                title="Gundagai-Tumut-Brindabella-Canberra"
                src="https://i0.wp.com/lh4.googleusercontent.com/-K_6vDTmYGXY/UYSkexR9m5E/AAAAAAAAAWI/rUkdSQrbTO0/s160-c/GundagaiTumutBrindabellaCanberra.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/GundagaiTumutBrindabellaCanberra">
                Gundagai-Tumut-Brindabella-Canberra
              </a>
            </div>
            <MetaContent>
              <div>Location: ACT &amp; NSW - Australia</div>
              <div>Published: 10/07/2006 10:35:34 PM</div>
              <div>Number of Photos in Album: 78</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/ThredboPerisherSnowNSWAustralia"
              title="Thredbo &amp; Perisher snow--NSW-Australia"
            >
              <img
                title="Thredbo &amp; Perisher snow--NSW-Australia"
                src="https://i2.wp.com/lh5.googleusercontent.com/-kwVYcdF7ry4/UYSkevNrJ1E/AAAAAAAAAWE/W3nrrZDoviI/s160-c/ThredboPerisherSnowNSWAustralia.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/ThredboPerisherSnowNSWAustralia">
                Thredbo &amp; Perisher snow-NSW-Australia
              </a>
            </div>
            <MetaContent>
              <div>Location: Kosciuszko National Park NSW Australia</div>
              <div>Published: 13/06/2006 8:53:36 PM</div>
              <div>Number of Photos in Album: 68</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/CanberraWeeJasterTumutJindabyneCoomaSnowyHydro"
              title="Canberra-Wee Jaster-Tumut-Jindabyne-Cooma,(SnowyHydro)"
            >
              <img
                title="Canberra-Wee Jaster-Tumut-Jindabyne-Cooma,(SnowyHydro)"
                src="https://i1.wp.com/lh3.googleusercontent.com/-FDcLX7kTsl8/UYSkfAXTotE/AAAAAAAAAWM/PcsJKMFri4U/s160-c/CanberraWeeJasterTumutJindabyneCoomaSnowyHydro.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/CanberraWeeJasterTumutJindabyneCoomaSnowyHydro">
                Canberra-Wee Jaster-Tumut-Jindabyne-Cooma,(SnowyHydro)
              </a>
            </div>
            <MetaContent>
              <div>Location: ACT &amp; NSW - Australia</div>
              <div>Published: 13/05/2006 6:41:27 PM</div>
              <div>Number of Photos in Album: 133</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/GoogongLondonBridgeArch2006NSWAustralia"
              title="Googong &amp; London Bridge Arch 2006--NSW-Australia"
            >
              <img
                title="Googong &amp; London Bridge Arch 2006--NSW-Australia"
                src="https://i1.wp.com/lh5.googleusercontent.com/-cUGBDkc-Z_w/UYSkd1K627E/AAAAAAAAAV4/pdaJhe-Svlw/s160-c/GoogongLondonBridgeArch2006NSWAustralia.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/GoogongLondonBridgeArch2006NSWAustralia">
                Googong &amp; London Bridge Arch 2006-NSW-Australia
              </a>
            </div>
            <MetaContent>
              <div>Location: Googong Foreshores-NSW-Australia</div>
              <div>Published: 25/04/2006 11:31:26 PM</div>
              <div>Number of Photos in Album: 52</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/FELIXROMULIANAImperialPalaceIIIIVCentury"
              title="FELIX ROMULIANA-Imperial Palace III-IV century"
            >
              <img
                title="FELIX ROMULIANA-Imperial Palace III-IV century"
                src="https://i2.wp.com/lh4.googleusercontent.com/-ryw74tnzFJg/UYSkpaFjcDE/AAAAAAAAAX8/pCOztPOTKqI/s160-c/FELIXROMULIANAImperialPalaceIIIIVCentury.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/FELIXROMULIANAImperialPalaceIIIIVCentury">
                FELIX ROMULIANA-Imperial Palace III-IV century
              </a>
            </div>
            <MetaContent>
              <div>Location: </div>
              <div>Published: 5/06/2005 8:47:15 PM</div>
              <div>Number of Photos in Album: 190</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/Jasikovo2005"
              title="Jasikovo - 2005"
            >
              <img
                title="Jasikovo - 2005"
                src="https://i1.wp.com/lh5.googleusercontent.com/-C6HvpjW7nKs/UwxhS4iO2rE/AAAAAAAAI-0/q0zFMsvtF94/s160-c/Jasikovo2005.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/Jasikovo2005">
                Jasikovo - 2005
              </a>
            </div>
            <MetaContent>
              <div>Location: </div>
              <div>Published: 4/05/2005 5:03:38 AM</div>
              <div>Number of Photos in Album: 616</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/LowdenForestParkNSWAustralia20052007"
              title="Lowden Forest  Park--NSW-Australia 2005 &amp; 2007"
            >
              <img
                title="Lowden Forest  Park--NSW-Australia 2005 &amp; 2007"
                src="https://i1.wp.com/lh6.googleusercontent.com/-O25gAdv5BVk/UYSkb7j776E/AAAAAAAAAVc/GKdP7wmTYxk/s160-c/LowdenForestParkNSWAustralia20052007.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/LowdenForestParkNSWAustralia20052007">
                Lowden Forest Park-NSW-Australia 2005 &amp; 2007
              </a>
            </div>
            <MetaContent>
              <div>Location: Lowden Forest Rd NSW Australia</div>
              <div>Published: 23/03/2005 7:00:00 PM</div>
              <div>Number of Photos in Album: 47</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/JASIKOVO20012002"
              title="JASIKOVO -2001-2002"
            >
              <img
                title="JASIKOVO -2001-2002"
                src="https://i1.wp.com/lh4.googleusercontent.com/-KtQjNGH5b9M/UyQgAIj8EmE/AAAAAAAAI9w/OpvG5Wv5lGk/s160-c/JASIKOVO20012002.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/JASIKOVO20012002">
                JASIKOVO -2001-2002
              </a>
            </div>
            <MetaContent>
              <div>Location: </div>
              <div>Published: 1/11/2001 9:13:44 PM</div>
              <div>Number of Photos in Album: 194</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
      <Row>
        <ImageContent>
          <div>
            <a
              href="https://picasaweb.google.com/116722993080592421923/JASIKOVOMAY2000"
              title="JASIKOVO - MAY 2000"
            >
              <img
                title="JASIKOVO - MAY 2000"
                src="https://i1.wp.com/lh6.googleusercontent.com/-tQcnktw_7l0/Ux2OagILsuE/AAAAAAAAI-U/kBUtC5O-hLE/s160-c/JASIKOVOMAY2000.jpg?fit=300%2C300&amp;ssl=1"
              />
            </a>
          </div>
        </ImageContent>
        <Description>
          <div>
            <div>
              <a href="https://picasaweb.google.com/116722993080592421923/JASIKOVOMAY2000">
                JASIKOVO - MAY 2000
              </a>
            </div>
            <MetaContent>
              <div>Location: Jasikovo/Serbia</div>
              <div>Published: 1/05/2000 9:57:54 PM</div>
              <div>Number of Photos in Album: 326</div>
            </MetaContent>
          </div>
        </Description>
      </Row>
    </>
  </Page>
);

export default Galery;
