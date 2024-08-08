
// export const xmlSiteMapHandler = catchTryAsyncErrors(async (event) => {
//   const urls = [
//     { loc: 'https://1qkhxw231f.execute-api.us-east-2.amazonaws.com/Prod/api/user/sendOTP/', lastmod: '2024-08-01', changefreq: 'daily', priority: 1.0 },
//     { loc: 'https://1qkhxw231f.execute-api.us-east-2.amazonaws.com/Prod/api/user/verifyOTP', lastmod: '2024-08-01', changefreq: 'monthly', priority: 0.8 },
//     { loc: 'https://1qkhxw231f.execute-api.us-east-2.amazonaws.com/Prod/api/user/checkUserName/', lastmod: '2024-08-01', changefreq: 'monthly', priority: 0.8 },
//     { loc: 'https://1qkhxw231f.execute-api.us-east-2.amazonaws.com/Prod/api/user/signup', lastmod: '2024-08-01', changefreq: 'monthly', priority: 0.8 },
//     { loc: 'https://1qkhxw231f.execute-api.us-east-2.amazonaws.com/Prod/api/user/login', lastmod: '2024-08-01', changefreq: 'monthly', priority: 0.8 },
//     { loc: 'https://1xrl6p4fu6.execute-api.us-east-2.amazonaws.com/Prod/api/user/forgotPassword', lastmod: '2024-08-01', changefreq: 'monthly', priority: 0.8 },
//     { loc: 'https://1qkhxw231f.execute-api.us-east-2.amazonaws.com/Prod/api/user/sendOTP/', lastmod: '2024-08-01', changefreq: 'monthly', priority: 0.8 },
//     { loc: 'https://1qkhxw231f.execute-api.us-east-2.amazonaws.com/Prod/api/user/google/', lastmod: '2024-08-01', changefreq: 'monthly', priority: 0.8 },
//     { loc: 'https://1qkhxw231f.execute-api.us-east-2.amazonaws.com/Prod/api/user/instagram/', lastmod: '2024-08-01', changefreq: 'monthly', priority: 0.8 },
//     { loc: 'https://1qkhxw231f.execute-api.us-east-2.amazonaws.com/Prod/api/user/apple/', lastmod: '2024-08-01', changefreq: 'monthly', priority: 0.8 },
//     { loc: 'https://yxnn8evja6.execute-api.us-east-2.amazonaws.com/Prod/api/user/verifyRecaptcha', lastmod: '2024-08-01', changefreq: 'monthly', priority: 0.8 },
//     { loc: 'https://bjg1bhha32.execute-api.us-east-2.amazonaws.com/Prod/landingPage-ChainsListFunction-GC6Kwizl8pBb', lastmod: '2024-08-01', changefreq: 'monthly', priority: 0.8 },
//     { loc: 'https://bjg1bhha32.execute-api.us-east-2.amazonaws.com/Prod/api/landingPage/getTop10Nodes', lastmod: '2024-08-01', changefreq: 'monthly', priority: 0.8 },
//     { loc: 'https://bjg1bhha32.execute-api.us-east-2.amazonaws.com/Prod/api/landingPage/searchNode/', lastmod: '2024-08-01', changefreq: 'monthly', priority: 0.8 },
//     { loc: 'https://a76wuh1hld.execute-api.us-east-2.amazonaws.com/Prod/api/getUnReadNotifyCount', lastmod: '2024-08-01', changefreq: 'monthly', priority: 0.8 },
//     { loc: 'https://1xrl6p4fu6.execute-api.us-east-2.amazonaws.com/Prod/api/user/getUserProfile/', lastmod: '2024-08-01', changefreq: 'monthly', priority: 0.8 },
//   ];

//   const urlset = xmlbuilder.create('urlset', { version: '1.0', encoding: 'UTF-8' })
//     .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

//   urls.forEach(url => {
//     const urlElement = urlset.ele('url');
//     urlElement.ele('loc', url.loc);
//     urlElement.ele('lastmod', url.lastmod);
//     urlElement.ele('changefreq', url.changefreq);
//     urlElement.ele('priority', url.priority);
//   });

//   const xmlString = urlset.end({ pretty: true });

//   return {
//     statusCode: StatusCodes.OK,
//     headers: {
//       'Content-Type': 'application/xml',
//     },
//     body: xmlString
//   };
// });



// const apiIds = ["1qkhxw231f", "yxnn8evja6", "bjg1bhha32", "a76wuh1hld", "1xrl6p4fu6", "pwtrrli2j5", "04oagayqia", "5g5siyt23g", "r2yz61o671", "jf6r16jwcc", "j7er6sd9zf", "49myq7ow91", "3ovnmok1t8", "4l3av7tz4j", "imevpq6i2i","88rp2yqvs2","jk7s6osl3e", "uuiqsqx0z4" ];
