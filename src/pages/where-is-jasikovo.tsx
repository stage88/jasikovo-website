import React from 'react';
import Page from '../templates/page';

const WhereIsJasikovo: React.FC = () => (
  <Page title="Where Is Jasikovo - Gde Je Jasikovo">
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7021.761042041185!2d21.937748764613094!3d44.28302189647886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47515b951d6cd03d%3A0x672678f3874ffbfc!2sJasikovo%2C%20Serbia!5e1!3m2!1sen!2sau!4v1623241949256!5m2!1sen!2sau"
        loading="lazy"
        width="100%"
        height="600px"
      />
    </div>
  </Page>
);

export default WhereIsJasikovo;
