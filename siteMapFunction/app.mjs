import { StatusCodes } from "http-status-codes";
import xmlbuilder from "xmlbuilder";
import { catchTryAsyncErrors } from "./helper.mjs";
import AWS from "aws-sdk";

// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION
// });

AWS.config.update({
  accessKeyId: "",
  secretAccessKey: "",
  region: "us-east-2",
});

const apiGateway = new AWS.APIGateway();

export const xmlSiteMapHandler = catchTryAsyncErrors(async (event) => {
  const apiIds = ["1qkhxw231f", "yxnn8evja6", "bjg1bhha32", "a76wuh1hld", "1xrl6p4fu6", "pwtrrli2j5", "04oagayqia", "5g5siyt23g", "r2yz61o671", "jf6r16jwcc", "j7er6sd9zf", "49myq7ow91", "3ovnmok1t8", "4l3av7tz4j", "imevpq6i2i","88rp2yqvs2","jk7s6osl3e", "uuiqsqx0z4" ];
  const stageName = process.env.STAGE_NAME || "Prod";
  const region = process.env.AWS_REGION || "us-east-2";

  let allEndpoints = [];

  for (const apiId of apiIds) {
    const baseUrl = `https://${apiId}.execute-api.${region}.amazonaws.com/${stageName}`;
    const resources = await apiGateway
      .getResources({ restApiId: apiId })
      .promise();
    const endpoints = resources.items
      .map((resource) => resource.path)
      .filter((path) => !["/api", "/", "/api/user"].includes(path));

    const fullEndpoints = endpoints.map((endpoint) => `${baseUrl}${endpoint}`);
    allEndpoints = allEndpoints.concat(fullEndpoints);
  }

  const urlset = xmlbuilder
    .create("urlset", { version: "1.0", encoding: "UTF-8" })
    .att("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");

  allEndpoints.forEach((endpoint) => {
    const urlElement = urlset.ele("url");
    urlElement.ele("loc", endpoint);
    urlElement.ele("lastmod", new Date().toISOString().split("T")[0]);
    urlElement.ele("changefreq", "daily");
    urlElement.ele("priority", "0.8");
  });

  const xmlString = urlset.end({ pretty: true });

  return {
    statusCode: StatusCodes.OK,
    headers: {
      "Content-Type": "application/xml",
    },
    body: xmlString,
  };
});
