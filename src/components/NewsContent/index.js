import React from 'react';
import { Text, RichText, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

const NewsContent = (props) => (
  <div>
    <h1><Text field={props.sitecoreContext.route.fields.newsTitle} /></h1>
    <RichText field={props.sitecoreContext.route.fields.newsContent} />
  </div>
);

export default withSitecoreContext()(NewsContent);
