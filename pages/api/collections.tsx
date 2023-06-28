import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

/**
 * CollectionsAPI
 * @param req Nextjs `req` object
 * @param res Nextjs `res` object
 * @returns Either an error JSON response or a successful response with an
 *  array of Digital Collections result items. Each result item should
 *  have relevant information including the title and image URL.
 * @example
 * Failure:
 *  {
 *    status: 400,
 *    type: "invalid-request",
 *    title: "Invalid Request",
 *    detail: "Missing credentials or keyword",
 *  }
 *
 * Success:
 *  {
 *    status: 200,
 *    numResults: "1000",
 *    result: [
 *      itemObject,
 *      itemObject,
 *      ...
 *    ]
 *  }
 *
 * @example itemObject
 *  {
 *    uuid: "510d47db-c229-a3d9-e040-e00a18064a99",
 *    apiUri: "http://api.repo.nypl.org/api/v1/items/mods/510d47db-c229-a3d9-e040-e00a18064a99",
 *    apiItemURL: "http://api.repo.nypl.org/api/v1/items/...",
 *    apiItemDetailURL: "http://api.repo.nypl.org/api/v1/item_details/510d47db-c229-a3d9-e040-e00a18064a99",
 *    title: "Some title...",
 *    typeOfResource: "resource type",
 *    imageID: "123456",
 *    itemLink: "http://digitalcollections.nypl.org/items/510d47db-c229-a3d9-e040-e00a18064a99",
 *    dateDigitized: "2016-02-17T05:26:40Z",
 *    rightsStatement: "Text...",
 *    rightsStatementURI: "http://rightsstatement.org/vocab/NoC-US/1.0",
 *    imageUrl: "http://images.nypl.org/index.php?id=487251&t=w&download=1&suffix=510d47db-c229-a3d9-e040-e00a18064a99.001",
 *  }
 */
async function CollectionsAPI(req: NextApiRequest, res: NextApiResponse) {
  // The main Digital Collections API endpoint. Documentation can be found
  // here: http://api.repo.nypl.org/
  const apiURL =
    "http://api.repo.nypl.org/api/v2/items/search?publicDomainOnly=true";
  // Make sure you get an API token from:
  // http://api.repo.nypl.org/
  // and set it as an environment variable.
  const apiToken = process.env.API_REPO_TOKEN;
  // This assume a POST request with the keyword value in the `q` property
  // of the request body.
  const q = req.body.q;
  const fullAPIURL = `${apiURL}&q=${q}`;

  if (!apiToken || !q) {
    return res.status(400).json({
      status: 400,
      type: "invalid-request",
      title: "Invalid Request",
      detail: "Missing credentials or keyword",
    });
  }

  return axios
    .get(fullAPIURL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token token=${apiToken}`,
      },
    })
    .then(async (response) => {
      console.log("do something with the response", response);

      return res.json({
        status: 200,
      });
    })
    .catch((error) => {
      const errorStatus = error.response?.status || 500;
      return res.status(errorStatus).json({
        status: errorStatus,
        ...error.response?.data,
      });
    });
}

export default CollectionsAPI;
